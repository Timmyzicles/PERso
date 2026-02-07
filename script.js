const yesBtn = document.getElementById('yesBtn');
const maybeBtn = document.getElementById('maybeBtn');
const message = document.getElementById('message');
const heartsLayer = document.getElementById('heartsLayer');
const wishInput = document.getElementById('wishInput');
const sendWish = document.getElementById('sendWish');
const wishOutput = document.getElementById('wishOutput');

const yesMessages = [
  'Yay! I knew your heart was as sweet as candy. 💙',
  'Perfect! Let\'s plan the cutest date ever. 🫶',
  'Best answer! Sending you a thousand tiny hugs. 🌸'
];

const maybeMessages = [
  'I\'ll wait with flowers and hot cocoa. ☁️',
  'Take your time—I brought extra chocolates. 🍫',
  'No pressure, just soft blue skies and kind vibes. 🌤️'
];

function burstHearts(count = 12, x = window.innerWidth / 2, y = window.innerHeight / 2) {
  const hearts = ['💙', '🩵', '💌', '✨'];

  for (let i = 0; i < count; i += 1) {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = `${x + (Math.random() * 160 - 80)}px`;
    heart.style.top = `${y + (Math.random() * 90 - 45)}px`;
    heart.style.animationDelay = `${Math.random() * 0.2}s`;
    heartsLayer.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

yesBtn.addEventListener('click', () => {
  message.textContent = pickRandom(yesMessages);
  burstHearts(18);
});

maybeBtn.addEventListener('mouseenter', () => {
  if (window.matchMedia('(hover: hover)').matches) {
    maybeBtn.style.transform = `translate(${Math.random() * 80 - 40}px, ${Math.random() * 24 - 12}px)`;
  }
});

maybeBtn.addEventListener('click', () => {
  maybeBtn.style.transform = 'translate(0, 0)';
  message.textContent = pickRandom(maybeMessages);
  burstHearts(8);
});

sendWish.addEventListener('click', () => {
  const wish = wishInput.value.trim();

  if (!wish) {
    wishOutput.textContent = 'Write something sweet first 🌼';
    return;
  }

  wishOutput.textContent = `Wish sent: “${wish}” 💫`;
  wishInput.value = '';
  burstHearts(14);
});

wishInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendWish.click();
  }
});

window.addEventListener('click', (event) => {
  if (event.target.closest('.btn')) {
    return;
  }

  burstHearts(5, event.clientX, event.clientY);
});
