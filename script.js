const slides   = document.querySelectorAll('.slide');
const playBtn  = document.getElementById('play-btn');
const prevBtn  = document.getElementById('prev-btn');
const nextBtn  = document.getElementById('next-btn');
const dotsWrap = document.getElementById('dots');
const counter  = document.getElementById('counter');

let idx       = 0;
let timer     = null;
let isPlaying = false;
const INTERVAL = 1200;

// Build dots
slides.forEach((_, i) => {
    const d = document.createElement('span');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(d);
});

function updateUI() {
    slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === idx));
    counter.textContent = `${idx + 1} / ${slides.length}`;
}

function goTo(n) {
    idx = (n + slides.length) % slides.length;
    updateUI();
}

function startPlay() {
    isPlaying = true;
    playBtn.innerHTML = '<span class="btn-icon">⏸</span> Pause';
    playBtn.classList.add('playing');
    timer = setInterval(() => goTo(idx + 1), INTERVAL);
}

function stopPlay() {
    isPlaying = false;
    playBtn.innerHTML = '<span class="btn-icon">▶</span> Play';
    playBtn.classList.remove('playing');
    clearInterval(timer);
}

playBtn.addEventListener('click', () => isPlaying ? stopPlay() : startPlay());
prevBtn.addEventListener('click', () => { stopPlay(); goTo(idx - 1); });
nextBtn.addEventListener('click', () => { stopPlay(); goTo(idx + 1); });

// Init — show first slide, don't auto-play
updateUI();
