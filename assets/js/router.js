(function () {
    var ROUTES = {
        '': { init: 'initIndexPage' },
        'index.html': { init: 'initIndexPage' },
        'about.html': { init: 'initAboutPage' },
        'opensource.html': { init: 'initOpenSourcePage' }
    };

    var loadedScripts = {};
    // Scripts already present in the very first real page load are already
    // "loaded" - track them so the router never re-executes/re-declares them.
    document.querySelectorAll('script[src]').forEach(function (s) {
        loadedScripts[s.src] = true;
    });

    var loadedStyleHrefs = {};
    document.querySelectorAll('link[rel="stylesheet"][href]').forEach(function (l) {
        loadedStyleHrefs[l.href] = true;
    });
    var loadedStyleText = {};
    document.querySelectorAll('style').forEach(function (s) {
        loadedStyleText[s.textContent] = true;
    });

    function routeKeyFor(url) {
        try {
            var u = new URL(url, window.location.href);
            if (u.origin !== window.location.origin) return null;
            var basename = u.pathname.split('/').pop();
            if (Object.prototype.hasOwnProperty.call(ROUTES, basename)) {
                return { key: basename, url: u.href, hash: u.hash };
            }
        } catch (e) {}
        return null;
    }

    function loadScript(src) {
        if (loadedScripts[src]) return Promise.resolve();
        loadedScripts[src] = true;
        return new Promise(function (resolve) {
            var el = document.createElement('script');
            el.src = src;
            el.onload = function () { resolve(); };
            el.onerror = function () { resolve(); };
            document.body.appendChild(el);
        });
    }

    function mergeHead(newHead) {
        var links = newHead.querySelectorAll('link[rel="stylesheet"][href]');
        links.forEach(function (l) {
            if (!loadedStyleHrefs[l.href]) {
                loadedStyleHrefs[l.href] = true;
                var clone = document.createElement('link');
                clone.rel = 'stylesheet';
                clone.href = l.href;
                document.head.appendChild(clone);
            }
        });

        var styles = newHead.querySelectorAll('style');
        styles.forEach(function (s) {
            if (!loadedStyleText[s.textContent]) {
                loadedStyleText[s.textContent] = true;
                var clone = document.createElement('style');
                clone.textContent = s.textContent;
                document.head.appendChild(clone);
            }
        });
    }

    function swapBody(newBody) {
        var keep = ['bgm-audio', 'bgm-toggle'];
        Array.from(document.body.children).forEach(function (child) {
            if (keep.indexOf(child.id) === -1) {
                child.remove();
            }
        });

        var scriptSrcs = [];
        Array.from(newBody.children).forEach(function (child) {
            if (child.tagName === 'SCRIPT') {
                if (child.src) scriptSrcs.push(child.src);
                return;
            }
            document.body.appendChild(document.adoptNode(child.cloneNode(true)));
        });

        return scriptSrcs;
    }

    function navigate(url, push) {
        var route = routeKeyFor(url);
        if (!route) {
            window.location.href = url;
            return;
        }

        fetch(route.url)
            .then(function (res) { return res.text(); })
            .then(function (html) {
                var doc = new DOMParser().parseFromString(html, 'text/html');

                document.title = doc.title;
                mergeHead(doc.head);

                var headScriptSrcs = [];
                doc.head.querySelectorAll('script[src]').forEach(function (s) {
                    headScriptSrcs.push(s.src);
                });

                var bodyScriptSrcs = swapBody(doc.body);
                var allScriptSrcs = headScriptSrcs.concat(bodyScriptSrcs);

                var chain = Promise.resolve();
                allScriptSrcs.forEach(function (src) {
                    chain = chain.then(function () { return loadScript(src); });
                });

                return chain.then(function () {
                    if (push) {
                        window.history.pushState({ route: route.key }, '', route.url);
                    }
                    window.scrollTo(0, 0);
                    var initName = ROUTES[route.key].init;
                    if (typeof window[initName] === 'function') {
                        window[initName]();
                    }
                });
            })
            .catch(function () {
                window.location.href = url;
            });
    }

    document.addEventListener('click', function (event) {
        if (event.defaultPrevented) return;
        if (event.button !== 0) return;
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

        var anchor = event.target.closest('a[href]');
        if (!anchor) return;
        if (anchor.target && anchor.target !== '_self') return;
        if (anchor.hasAttribute('download')) return;

        var route = routeKeyFor(anchor.href);
        if (!route) return;

        event.preventDefault();
        navigate(anchor.href, true);
    });

    window.addEventListener('popstate', function () {
        navigate(window.location.href, false);
    });

    // The page scripts (index.js / about.js / opensource.js) only define
    // their init function and never self-invoke - the router is the single
    // place responsible for calling it, both on the true first page load
    // and after every AJAX swap, so it never runs twice.
    var initialRoute = routeKeyFor(window.location.href);
    if (initialRoute) {
        var initName = ROUTES[initialRoute.key].init;
        if (typeof window[initName] === 'function') {
            window[initName]();
        }
    }
})();
