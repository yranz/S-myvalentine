const envelope = document.querySelector('.envelope');
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const modal = document.getElementById("modalyes");
const closeBtn = document.getElementById("closeyes");
const openLetterBtn = document.getElementById("openLetterBtn");
const letterModal = document.getElementById("letterModal");
const letterClose = document.querySelector('.letter-close');

let scale = 1;

noBtn.addEventListener("click", () => {
    scale += 0.3;
    yesBtn.style.transform = `scale(${scale})`;
});

envelope.addEventListener('click', () => {
    envelope.classList.add('open');
});

yesBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Floating hearts
function createFloatingHearts() {
    const modalContent = document.querySelector('.modal-content');
    if (!modalContent) return;

    const heartsContainer = document.createElement('div');
    heartsContainer.classList.add('floating-hearts');
    modalContent.appendChild(heartsContainer);

    const heartSymbols = ['❤️', '💖', '💕', '💗', '💓', '💞'];

    function spawnHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

        const leftPos = Math.random() * 100;
        const size = Math.random() * 1.2 + 1;
        const duration = Math.random() * 8 + 10;
        const delay = Math.random() * 5;

        heart.style.left = `${leftPos}%`;
        heart.style.fontSize = `${size}rem`;
        heart.style.animationDuration = `${duration}s`;
        heart.style.animationDelay = `${delay}s`;

        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), (duration + delay + 2) * 1000);
    }

    let heartInterval;
    const observer = new MutationObserver(() => {
        if (modal.style.display === 'block') {
            if (!heartInterval) {
                heartInterval = setInterval(spawnHeart, Math.random() * 400 + 400);
            }
        } else {
            clearInterval(heartInterval);
            heartInterval = null;
            heartsContainer.innerHTML = '';
        }
    });

    observer.observe(modal, { attributes: true, attributeFilter: ['style'] });
}

createFloatingHearts();

// Open Love Letter button
if (openLetterBtn && letterModal && letterClose) {
    openLetterBtn.addEventListener('click', () => {
        letterModal.style.display = 'flex';
    });

    letterClose.addEventListener('click', () => {
        letterModal.style.display = 'none';
    });
}

// ... lahat ng existing code mo (envelope, yes/no, modal, hearts) ...

// Video show/hide
const showVideoBtn = document.querySelector('.show-video-btn');
const videoSection = document.querySelector('.video-section');
const loveVideo = document.getElementById('loveVideo');

if (showVideoBtn && videoSection && loveVideo) {
    showVideoBtn.addEventListener('click', () => {
        videoSection.classList.add('active');
        // Optional: auto-play pag na-click
        // loveVideo.play();
    });
}

// Open Love Letter button


if (openLetterBtn && letterModal && letterClose) {
    openLetterBtn.addEventListener('click', () => {
        letterModal.style.display = 'flex';
    });

    letterClose.addEventListener('click', () => {
        letterModal.style.display = 'none';
    });
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('Service Worker registered'))
      .catch(err => console.log('Service Worker failed', err));
  });
}