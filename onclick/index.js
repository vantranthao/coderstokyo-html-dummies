var addInput = document.getElementById('add-input');

var addButton = document.getElementById('add-button');

var todoList = [
    'Take a shower',
    'Breakfast',
    'Dinner',
    'Lunch'
];



function getHere() {
    var accessHere = document.getElementById('todoList');
    var mainContent = todoList.map((item) => {
        return `<li>${item}</li>`;
    })
    accessHere.innerHTML = mainContent.join('');
}

getHere();

const item = () => {
    var newItem = addInput.value;
    todoList.push(newItem);
    getHere();
    addInput.value = ''
};

//addButton.onclick = item;
addButton.addEventListener('click', item);