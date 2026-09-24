(function () {
    var AUDIO_SRC = 'assets/audio/bgm.mp3';
    var VOLUME = 0.35;
    var TIME_KEY = 'bgmTime';
    var MUTED_KEY = 'bgmMuted';

    var audio = document.createElement('audio');
    audio.id = 'bgm-audio';
    audio.src = AUDIO_SRC;
    audio.loop = true;
    audio.volume = VOLUME;
    audio.preload = 'auto';
    document.body.appendChild(audio);

    var savedTime = parseFloat(localStorage.getItem(TIME_KEY));
    if (!isNaN(savedTime)) {
        audio.addEventListener('loadedmetadata', function () {
            try { audio.currentTime = savedTime % audio.duration; } catch (e) {}
        }, { once: true });
    }

    var muted = localStorage.getItem(MUTED_KEY) === 'true';

    var btn = document.createElement('button');
    btn.id = 'bgm-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Toggle background music');
    btn.className = 'boxxy';
    btn.style.position = 'fixed';
    btn.style.bottom = '20px';
    btn.style.left = '20px';
    btn.style.zIndex = '1000';
    btn.style.width = '40px';
    btn.style.height = '40px';
    btn.style.background = '#000';
    btn.style.color = '#fff';
    btn.style.fontSize = '18px';
    btn.style.display = 'flex';
    btn.style.alignItems = 'center';
    btn.style.justifyContent = 'center';
    btn.style.cursor = 'pointer';
    document.body.appendChild(btn);

    function render() {
        btn.textContent = muted ? '🔇' : '🔊';
    }
    render();

    function play() {
        audio.play().catch(function () {});
    }

    function setMuted(next) {
        muted = next;
        localStorage.setItem(MUTED_KEY, muted ? 'true' : 'false');
        render();
        if (muted) {
            audio.pause();
        } else {
            play();
        }
    }

    btn.addEventListener('click', function () {
        setMuted(!muted);
    });

    if (!muted) {
        play();
        var resumeOnInteract = function () {
            play();
            document.removeEventListener('pointerdown', resumeOnInteract);
            document.removeEventListener('keydown', resumeOnInteract);
        };
        document.addEventListener('pointerdown', resumeOnInteract, { once: true });
        document.addEventListener('keydown', resumeOnInteract, { once: true });
    }

    setInterval(function () {
        if (!audio.paused) {
            localStorage.setItem(TIME_KEY, String(audio.currentTime));
        }
    }, 1000);

    window.addEventListener('pagehide', function () {
        localStorage.setItem(TIME_KEY, String(audio.currentTime));
    });
})();
