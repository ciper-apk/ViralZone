document.querySelector("button").addEventListener("click", function () {
window.scrollTo({
top: window.innerHeight,
behavior: "smooth"
});
});
const quizQuestions = [
{
question: "What has keys but cannot open a single door?",
answer: "A keyboard"
},
{
question: "I have a head and a tail, but no body. What am I?",
answer: "A coin"
},
{
question: "What can you catch but never throw?",
answer: "A cold"
},
{
question: "The more you take from me, the bigger I become. What am I?",
answer: "A hole"
},
{
question: "What has many teeth but cannot bite?",
answer: "A comb"
},
{
question: "What goes up but never comes down?",
answer: "Your age"
},
{
question: "What has one eye but cannot see?",
answer: "A needle"
},
{
question: "What gets wetter the more it dries?",
answer: "A towel"
},
{
question: "What belongs to you, but other people use it more than you do?",
answer: "Your name"
},
{
question: "I speak without a mouth and hear without ears. What am I?",
answer: "An echo"
}
];

let currentQuestion = 0;
let score = 0;

document.getElementById("takeQuiz").addEventListener("click", function () {
currentQuestion = 0;
score = 0;

showQuestion();
});

function showQuestion() {
const q = quizQuestions[currentQuestion];

const userAnswer = prompt(
"Question " + (currentQuestion + 1) + " of " + quizQuestions.length +
"\n\n" + q.question
);

if (userAnswer !== null) {
if (userAnswer.trim().toLowerCase() === q.answer.toLowerCase()) {
score++;
alert("🔥 Correct!");
} else {
alert("❌ Wrong!\n\nAnswer: " + q.answer);
}
}

currentQuestion++;

if (currentQuestion < quizQuestions.length) {
showQuestion();
} else {
alert(
"🎯 Quiz Complete!\n\n" +
"Your score: " + score + "/" + quizQuestions.length
);
}
}
function makeMeLaugh() {
const jokes = [
"Why did the phone go to school? Because it wanted to improve its connection! 😂",
"Why did the computer catch a cold? It left its Windows open! 🤣",
"What do you call a sleeping bull? A bulldozer! 😂",
"Why was the math book sad? Because it had too many problems! 😭😂",
"Why did the Wi-Fi break up with the phone? There was no connection! 😂",
"What did one wall say to the other wall? I'll meet you at the corner! 😂",
"Why don't eggs tell jokes? They might crack each other up! 🤣",
"Why did the student eat his homework? The teacher said it was a piece of cake! 😂",
"What do you call a fake noodle? An impasta! 🍝😂",
"Why did the laptop go to the doctor? It had a bad case of the bytes! 💻😂"
 ];

const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

alert(randomJoke);
}
function randomChallenge() {
const challenges = [
"😂 Try to make your friend laugh without saying a word.",
"🎭 Act like a famous celebrity for 20 seconds.",
"🤣 Make the funniest face you can for 10 seconds.",
"🎤 Sing a song using only 'la la la'.",
"😎 Walk across the room like you're on a red carpet.",
"🗣️ Talk for 20 seconds without saying the word 'I'.",
"🎬 Act out a movie scene without speaking.",
"😂 Tell your worst joke with a completely serious face.",
"🕺 Create your own dance move and give it a name.",
"🎤 Pretend you're presenting breaking news about something ordinary.",
"🐔 Imitate an animal and let someone guess which one.",
"😭 Try to make someone laugh while keeping a straight face.",
"🎭 Pretend you're a teacher explaining something ridiculous.",
"📱 Describe your phone like you're selling it for ₦1 million.",
"🦸 Invent a superhero and explain their weirdest power.",
"🎮 Pretend you're a game commentator describing someone walking.",
"😂 Give yourself the funniest nickname you can think of.",
"🎬 Make a 10-second fake movie trailer about your life.",
"🗣️ Say a tongue twister three times without messing up.",
"🤣 Try to tell a joke without smiling.",
"🎤 Pretend you're a famous singer giving an award speech.",
"🕺 Create a dance move that nobody has ever seen before.",
"😂 Pretend you just won ₦1 billion and give an acceptance speech.",
"🎭 Act like a robot for 30 seconds.",
"📺 Pretend you're a news reporter covering a very silly story.",
"🐱 Act like a cat for 15 seconds.",
"🦁 Act like a lion without making a sound.",
"🎮 Pretend you're playing your favorite game without holding a phone.",
"😂 Try to make someone laugh using only facial expressions.",
"🎤 Sing your name like it is a dramatic movie soundtrack.",
"🎬 Act like the main character in an action movie.",
"😎 Give yourself a superhero entrance.",
"🤣 Make up a completely ridiculous excuse for being late.",
"🗣️ Talk like a robot for 20 seconds.",
"🎭 Pretend you're being interviewed on TV.",
"😂 Describe your breakfast like it's a luxury meal.",
"🕺 Create a victory celebration for winning something small.",
"🎤 Give a motivational speech about your favorite snack.",
"🎬 Pretend you're directing a blockbuster movie.",
"🤣 Make up a funny company name and explain what it sells.",
"🦸 Create a superhero whose power is completely useless.",
"📱 Pretend your phone is your best friend and introduce it.",
"🎭 Act like a strict principal for 20 seconds.",
"😂 Pretend you are an influencer reviewing a bottle of water.",
"🎤 Make up a song about what you're doing right now.",
"🕺 Invent a new dance and teach it to someone.",
"🤣 Give the most dramatic reaction possible to someone saying 'hello'.",
"🎬 Pretend you're starring in the world's worst movie.",
"😎 Give yourself a ridiculous stage name.",
"😂 Try to make a serious sentence sound funny.",
"🐸 Imitate your favorite animal and let someone guess it.",
"🎤 Pretend you're performing at a huge concert.",
"🎭 Act like you're meeting an alien for the first time.",
"🤣 Explain how to make a sandwich like you're teaching a university class.",
"🕵️ Pretend you're a detective investigating a missing snack.",
"🎬 Create a dramatic trailer for your school day.",
"😂 Pretend you're a celebrity avoiding reporters.",
"🦸 Invent a superhero whose only power is finding lost things.",
"🎤 Give a speech thanking everyone for your imaginary award.",
"🤣 Pretend you're a customer complaining about the world's worst restaurant."
 ];

const randomIndex = Math.floor(Math.random() * challenges.length);
alert(challenges[randomIndex]);
}
function showSection(sectionId) {
document.getElementById("home").style.display = "none";
document.getElementById("ai-tools").style.display = "none";
document.getElementById("leaderboard").style.display = "none";

document.getElementById(sectionId).style.display = "block";
}
const chatBox = document.getElementById("chatBox");
const chatInput = document.getElementById("chatInput");

function addMessage(who, text) {
const p = document.createElement("p");
p.textContent = who + ": " + text;
chatBox.appendChild(p);
chatBox.scrollTop = chatBox.scrollHeight;
}

function getReply(msg) {
msg = msg.toLowerCase();
if (msg.includes("quiz")) return "Go to Home and hit Take Quiz to find your vibe!";
if (msg.includes("leaderboard")) return "Check the Leaderboard tab to see the top players.";
if (msg.includes("hello") || msg.includes("hi")) return "Hey! How can I help?";
return "I'm still learning. Try asking about quizzes or the leaderboard.";
}

function sendMessage() {
const text = chatInput.value.trim();
if (!text) return;
addMessage("You", text);
chatInput.value = "";
setTimeout(() => addMessage("Assistant", getReply(text)), 400);
}

document.getElementById("sendChat").addEventListener("click", sendMessage);
chatInput.addEventListener("keydown", e => {
if (e.key === "Enter") sendMessage();
});