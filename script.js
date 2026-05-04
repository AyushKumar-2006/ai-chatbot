const inputField = document.getElementById('input');
const chatDiv = document.getElementById('chat');

function addMessage(text, sender) {
  const isAI = sender === 'ai';
  const div = document.createElement('div');
  div.className = `message ${sender}`;
  div.innerHTML = isAI
    ? `<div class="avatar-small">AI</div><div class="bubble">${text.replace(/\n/g, '<br>')}</div>`
    : `<div class="bubble">${text}</div><div class="avatar-small">ME</div>`;
  chatDiv.appendChild(div);
  chatDiv.scrollTop = chatDiv.scrollHeight;
}

async function send() {
  const message = inputField.value.trim();
  if (!message) return;

  addMessage(message, 'user');
  inputField.value = '';

  const typing = document.createElement('div');
  typing.className = 'message ai';
  typing.id = 'typing';
  typing.innerHTML = `<div class="avatar-small">AI</div><div class="bubble typing">Thinking...</div>`;
  chatDiv.appendChild(typing);
  chatDiv.scrollTop = chatDiv.scrollHeight;

  try {
    const response = await fetch('http://localhost:3000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    const data = await response.json();
    document.getElementById('typing')?.remove();
    addMessage(data.content || data.error, 'ai');
  } catch (error) {
    document.getElementById('typing')?.remove();
    addMessage('❌ Server error. Is node server.js running?', 'ai');
  }
}