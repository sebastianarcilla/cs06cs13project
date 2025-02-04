const motivationSentences = [
  "You're stronger than you think.",
  "If you don't take risks, you can't create a future.",
  "Sometimes, life sucks and you have to keep on moving.",
  "The biggest adventure you can ever take is to live the life of your dreams.",
  "Pave your own road, don't follow the others blindly.",
  "We walk a path of thorns to reach a garden of roses.",
  "Every loss we have is an opportunity for us to grow.",
  "This world is cruel and merciless.. But it's also very beautiful. Never forget that.",
  "But nothing's ever perfect, haven't you realised that yet? Earth turns on a tilted axis just doing the best it can.",
  "If you still can't do it, then you probably aren't putting in the work."
];

const motivationElement = document.getElementById('motivation');
const rouletteElement = document.getElementById('roulette');

function getRandomMotivation() {
  const randomIndex = Math.floor(Math.random() * motivationSentences.length);
  motivationElement.textContent = motivationSentences[randomIndex];
}

rouletteElement.addEventListener('click', getRandomMotivation);

getRandomMotivation(); 



/* edit mental check-up msgs here bass */
function happy() {
  const element = document.getElementById("message");
  element.innerHTML = "We're so pleased to hear that! Keep on spreading that positivity to everyone!";}
function sad() {
  const element = document.getElementById("message");
  element.innerHTML = "To be honest, you're not alone. Push through it. You're stronger than you know. Everything will be alright in time, but for now, keep going!";}
function angry() {
  const element = document.getElementById("message");
  element.innerHTML = "Try and calm down, put on some music, or just take a deep breath. Don't take it all out on the wrong person or the wrong thing.";}
function stressed() {
  const element = document.getElementById("message");
  element.innerHTML = "Wherever you're from, we get that stress you're feeling right now. Try to concentrate, and remember you're not alone in this.";}
function focused() {
  const element = document.getElementById("message");
  element.innerHTML = "Keep focusing on what you're doing, your lock-in will be crazy! We believe in you!";}


function addTask() {
  const newTaskInput = document.getElementById('new-task');
  const newTaskText = newTaskInput.value.trim();

  if (newTaskText !== '') {
    const taskList = document.getElementById('task-list');
    const newListItem = document.createElement('li');
    newListItem.innerHTML = `
      <input type="checkbox" id="task-${taskList.children.length}">
      <label for="task-${taskList.children.length}">${newTaskText}</label>
    `;
    taskList.appendChild(newListItem);
    newTaskInput.value = '';
  }
}