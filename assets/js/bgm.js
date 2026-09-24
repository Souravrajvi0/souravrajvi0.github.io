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

    var wantsSound = localStorage.getItem(MUTED_KEY) !== 'true';
    var unlocked = false;

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
        btn.textContent = wantsSound ? '🔊' : '🔇';
    }
    render();

    // Muted autoplay is always allowed by browsers, so start playback
    // immediately (silently). The moment the user interacts, unmute
    // in-place instead of waiting on a fresh play() call.
    audio.muted = true;
    audio.play().catch(function () {});

    function unlock() {
        if (unlocked) return;
        unlocked = true;
        audio.play().catch(function () {});
        if (wantsSound) {
            audio.muted = false;
        }
    }

    document.addEventListener('pointerdown', unlock, { once: true });
    document.addEventListener('keydown', unlock, { once: true });
    document.addEventListener('scroll', unlock, { once: true, passive: true });

    btn.addEventListener('click', function () {
        wantsSound = !wantsSound;
        localStorage.setItem(MUTED_KEY, wantsSound ? 'false' : 'true');
        render();
        unlock();
        audio.muted = !wantsSound;
    });

    setInterval(function () {
        if (!audio.paused) {
            localStorage.setItem(TIME_KEY, String(audio.currentTime));
        }
    }, 1000);

    window.addEventListener('pagehide', function () {
        localStorage.setItem(TIME_KEY, String(audio.currentTime));
    });
})();
