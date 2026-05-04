

import fs from "fs";

console.log("🔍 Data fetch ho raha hai websites se...\n");

async function fetchJokes() {
  try {
    console.log("😂 Jokes fetch ho rahe hain...");

   
    const r1 = await fetch("https://v2.jokeapi.dev/joke/Any?type=twopart&amount=10");
    const d1 = await r1.json();
    const jokes1 = d1.jokes.map(j => `${j.setup}\n${j.delivery} 😄`);

    const r2 = await fetch("https://official-joke-api.appspot.com/jokes/ten");
    const d2 = await r2.json();
    const jokes2 = d2.map(j => `${j.setup}\n${j.punchline} 😂`);

   
    const jokes3 = [];
    for (let i = 0; i < 5; i++) {
      const r3 = await fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      });
      const d3 = await r3.json();
      jokes3.push(d3.joke + " 🤣");
    }

    const all = [...jokes1, ...jokes2, ...jokes3];
    console.log(`   ✅ ${all.length} jokes mili!`);
    return all;
  } catch (e) {
    console.log("   ⚠️ Jokes fetch fail — default use ho raha hai");
    return [
      "Why do programmers prefer dark mode?\nBecause light attracts bugs! 🐛",
      "Why did the developer go broke?\nBecause he used up all his cache! 😂",
      "How many programmers does it take to change a light bulb?\nNone — that's a hardware problem! 💡",
      "A SQL query walks into a bar and sees two tables.\nIt walks up to them and asks: Can I join you? 🍺",
      "Why do Java developers wear glasses?\nBecause they don't C#! 👓",
      "Programmer ke ghar mein aag lagi.\nNeighbour: Call 101!\nProgrammer: Nahi — pehle documentation padhta hoon! 🔥"
    ];
  }
}


async function fetchPoems() {
  try {
    console.log("📜 Poems fetch ho rahi hain...");

    
    const r1 = await fetch("https://poetrydb.org/random/10");
    const d1 = await r1.json();
    const poems1 = d1.map(p =>
      `"${p.title}" — ${p.author}\n\n${p.lines.slice(0, 8).join("\n")}`
    );

    
    const r2 = await fetch("https://api.quotable.io/quotes/random?limit=5&tags=poetry|nature|life");
    const d2 = await r2.json();
    const poems2 = d2.map(q => `"${q.content}"\n— ${q.author}`);

    const all = [...poems1, ...poems2];
    console.log(`   ✅ ${all.length} poems mili!`);
    return all;
  } catch (e) {
    console.log("   ⚠️ Poems fetch fail — default use ho raha hai");
    return [
      `"The Road Not Taken" — Robert Frost\n\nTwo roads diverged in a yellow wood,\nAnd sorry I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could\nTo where it bent in the undergrowth;`,
      `"If" — Rudyard Kipling\n\nIf you can keep your head when all about you\nAre losing theirs and blaming it on you,\nIf you can trust yourself when all men doubt you,\nBut make allowance for their doubting too;`,
      `"Still I Rise" — Maya Angelou\n\nYou may write me down in history\nWith your bitter, twisted lies,\nYou may trod me in the very dirt\nBut still, like dust, I'll rise.`,
      `Zindagi ek safar hai,\nHar pal naya savera hai,\nUth ja o musafir,\nManzil teri nazar hai! ✨`,
      `Chand taaron ki roshni,\nDil mein ek umang hai,\nAaj ka din khaas hai,\nKyunki tu mere sang hai! 🌙`
    ];
  }
}


async function fetchQuantum() {
  try {
    console.log("🔬 Quantum facts fetch ho rahe hain...");

    
    const r1 = await fetch(
      "https://en.wikipedia.org/api/rest_v1/page/summary/Quantum_mechanics"
    );
    const d1 = await r1.json();
    const wiki = d1.extract.slice(0, 400) + "...";

    
    const r2 = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en");
    const d2 = await r2.json();

    const facts = [
      `🔬 Wikipedia se:\n\n${wiki}\n\nSimple mein: Quantum physics bahut choti cheezoon (atoms, electrons) ka science hai jahan normal rules kaam nahi karte!`,
      `⚛️ Superposition:\nEk quantum particle ek saath DO jagah ho sakta hai!\nJaise ek coin — jab tak pakdo nahi, heads bhi hai aur tails bhi! 🪙`,
      `🔗 Quantum Entanglement:\nDo particles ek doosre se itne connected hote hain ki chahe unke beech light years ka faasla ho — ek change hota hai toh doosra bhi instantly change ho jaata hai!\nEinstein ne ise "spooky action" kaha tha! 👻`,
      `❓ Heisenberg Uncertainty:\nTum kisi particle ki SPEED aur POSITION dono ek saath perfectly nahi jaان sakte.\nEk jaano toh doosra blur ho jaata hai! 🌀`,
      `💡 Fun Fact (Wikipedia se):\n${d2.text || "Quantum computers ek problem ko classical computers se millions guna fast solve kar sakte hain!"}`
    ];

    console.log(`   ✅ ${facts.length} quantum facts mili!`);
    return facts;
  } catch (e) {
    console.log("   ⚠️ Quantum fetch fail — default use ho raha hai");
    return [
      `🔬 Quantum Physics - Simple Mein!\n\nYe science ki woh branch hai jo bahut choti cheezon ka study karti hai.\n\n⚛️ Superposition: Particle ek saath do jagah hota hai!\n🔗 Entanglement: Do particles forever connected!\n❓ Uncertainty: Speed aur position dono ek saath nahi jaante!\n\nReal use: MRI, Lasers, Computer chips! 🚀`,
      `👻 Spooky Action!\n\nEinstein bhi quantum physics se confuse the!\nUnhone kaha: "God does not play dice"\nPar quantum physics prove karti hai — God DOES play dice! 🎲`,
      `🌀 Schrodinger's Cat:\n\nEk cat ek box mein hai.\nJab tak dekho nahi — cat ek saath ZINDA bhi hai aur MARI bhi!\nYahi hai quantum superposition! 🐱`
    ];
  }
}


async function fetchGreetings() {
  try {
    console.log("👋 Quotes fetch ho rahe hain...");
    const r = await fetch("https://api.quotable.io/quotes/random?limit=5&tags=inspirational");
    const d = await r.json();
    const quotes = d.map(q => `"${q.content}" — ${q.author} 💫`);
    console.log(`   ✅ ${quotes.length} quotes mili!`);
    return quotes;
  } catch (e) {
    return [
      "Namaste! 🙏 Main tumhara AI hoon. Poem, joke ya quantum physics poocho!",
      "Hello dost! Kya seekhna chahte ho aaj? 😊",
      "Hey! Main ready hoon. Poocho kuch bhi! 🚀"
    ];
  }
}


async function buildServer() {
  console.log("⏳ Thoda wait karo — data aa raha hai...\n");

  const [jokes, poems, quantum, greetings] = await Promise.all([
    fetchJokes(),
    fetchPoems(),
    fetchQuantum(),
    fetchGreetings()
  ]);

  console.log("\n✍️  server.js ban raha hai...");

  const serverCode = `import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// ============================================
// REAL DATA — Multiple websites se fetch kiya
// Jokes: jokeapi.dev + official-joke-api
// Poems: poetrydb.org + quotable.io
// Quantum: Wikipedia REST API
// ============================================

const DB = {
  jokes: ${JSON.stringify(jokes, null, 2)},

  poems: ${JSON.stringify(poems, null, 2)},

  quantum: ${JSON.stringify(quantum, null, 2)},

  greetings: ${JSON.stringify(greetings, null, 2)},

  fallback: [
    "Yaar ye nahi pata mujhe! Poocho: poem, joke, ya quantum physics 😊",
    "Interesting! Par mere paas sirf poems, jokes aur quantum physics hai abhi 🤔",
    "Hmm... Try karo: 'ek poem sunao', 'joke sunao', 'quantum kya hai' ✨"
  ]
};

function respond(msg) {
  const m = msg.toLowerCase();
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];

  if (m.includes("poem") || m.includes("poetry") || m.includes("kavita") || m.includes("shayari"))
    return "🎭 Yahan ek poem hai:\\n\\n" + pick(DB.poems);

  if (m.includes("joke") || m.includes("funny") || m.includes("hasao") || m.includes("comedy"))
    return "😂 Sun yeh joke:\\n\\n" + pick(DB.jokes);

  if (m.includes("quantum") || m.includes("physics") || m.includes("atom") || m.includes("science"))
    return pick(DB.quantum);

  if (m.includes("hi") || m.includes("hello") || m.includes("hey") || m.includes("namaste"))
    return pick(DB.greetings);

  if (m.includes("thanks") || m.includes("shukriya") || m.includes("dhanyawad"))
    return "Koi baat nahi dost! 😊 Aur kuch chahiye?";

  if (m.includes("bye") || m.includes("alvida"))
    return "Alvida! 👋 Phir milenge!";

  return pick(DB.fallback);
}

app.post("/chat", (req, res) => {
  const message = req.body.message;
  if (!message) return res.status(400).json({ error: "Message nahi mila!" });
  res.json({ content: respond(message) });
});

app.listen(3000, () => {
  console.log("🚀 Server chal raha hai: http://localhost:3000");
  console.log("✅ Real web data use ho raha hai — No API needed!");
});
`;

  fs.writeFileSync("server.js", serverCode);
  console.log("\n🎉 DONE! server.js ban gaya real data ke saath!");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log(`📊 Stats:`);
  console.log(`   😂 Jokes:   ${jokes.length}`);
  console.log(`   📜 Poems:   ${poems.length}`);
  console.log(`   🔬 Quantum: ${quantum.length}`);
  console.log(`   👋 Quotes:  ${greetings.length}`);
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("\nAb chalao: node server.js");
  console.log("Phir browser mein: localhost:3000 🚀\n");
}

buildServer();