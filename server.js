import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

    //LOCAL DATABASE
const database = {
  poems: [
    "Roses are red,\nViolets are blue,\nCode is beautiful,\nAnd so are you. 🌹",
    "The stars above shine bright at night,\nThe moon glows with a silver light,\nDreams take flight on wings of air,\nBeauty blooms beyond compare. ✨",
    "In the quiet of the morning dew,\nA thousand flowers start anew,\nThe world awakes with gentle grace,\nA smile upon the earth's sweet face. 🌸",
    "Beneath the sky so vast and wide,\nThe ocean rolls with endless tide,\nEach wave a story, soft and deep,\nA thousand secrets it does keep. 🌊",
    "Time flies like an arrow in flight,\nDays turn to darkness, darkness to light,\nLive every moment, laugh and be free,\nThat's what life means to you and me. 🕊️"
  ],

  jokes: [
    "Why do programmers prefer dark mode? 😄\nBecause light attracts bugs! 🐛",
    "Why did the computer go to the doctor? 🖥️\nBecause it had a virus! 🤧",
    "What did one math book say to the other? 📚\nI've got too many problems! 😅",
    "Why can't you trust an atom? ⚛️\nBecause they make up everything! 💀",
    "How do you comfort a JavaScript bug? 🐞\nYou console it! 😂",
    "Why did the developer go broke? 💸\nBecause he used up all his cache! 🏦",
    "What's a computer's favorite snack? 🍪\nMicrochips! 😆"
  ],

  quantumPhysics: [
    "⚛️ Quantum Superposition:\nA quantum particle can exist in multiple states at once — until you observe it. Like Schrödinger's cat, it's both alive and dead until you look inside the box!",
    "🔗 Quantum Entanglement:\nTwo particles can be 'entangled' — meaning measuring one instantly affects the other, no matter how far apart they are. Einstein called this 'spooky action at a distance.'",
    "🌊 Wave-Particle Duality:\nLight and electrons behave as both waves AND particles. In the double-slit experiment, a single electron passes through two slits simultaneously — as a wave!",
    "❓ Heisenberg Uncertainty Principle:\nYou can NEVER know both the exact position and momentum of a particle at the same time. The more precisely you know one, the less you know the other.",
    "🕳️ Quantum Tunneling:\nParticles can pass through barriers they classically shouldn't be able to cross. This is why nuclear fusion happens in the sun and how tunnel diodes work in electronics!",
    "🔬 Planck's Constant:\nEnergy comes in tiny discrete packets called 'quanta.' Max Planck discovered E = hf, meaning energy (E) equals Planck's constant (h) times frequency (f). This started the quantum revolution!",
    "🐱 Schrödinger's Cat:\nErwin Schrödinger imagined a cat in a box with poison triggered by a quantum event. Until observed, the cat is both alive AND dead — a famous paradox of quantum mechanics!"
  ]
};

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getBotResponse(message) {
  const msg = message.toLowerCase().trim();

  if (msg.includes("poem") || msg.includes("poetry") || msg.includes("verse")) {
    return "🎭 Here's a poem just for you:\n\n" + getRandomItem(database.poems);
  }

  if (msg.includes("joke") || msg.includes("funny") || msg.includes("laugh") || msg.includes("humor")) {
    return "😂 Here's a joke:\n\n" + getRandomItem(database.jokes);
  }

  if (msg.includes("quantum") || msg.includes("physics") || msg.includes("particle") ||
      msg.includes("entanglement") || msg.includes("superposition") || msg.includes("wave")) {
    return "🔬 Quantum Physics Fact:\n\n" + getRandomItem(database.quantumPhysics);
  }

  return "🤖 I can help you with:\n\n• 📝 Write me a poem\n• 😄 Tell me a joke\n• ⚛️ Explain quantum physics\n\nJust ask me any of these!";
}

//  ROUTE
app.post("/chat", (req, res) => {
  const message = req.body.message;
  if (!message) return res.status(400).json({ error: "Message is required" });
  const reply = getBotResponse(message);
  res.json({ content: reply });
});

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});