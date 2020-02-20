// var todoList = [
//     'Take shower',
//     'Have a walk',
//     'Go to bed'
// ];

// var htmlList = document.getElementById('todoList');
// console.dir(htmlList)

// var content = todoList.map(function(item) {
//     return `<li>${item}</li>`;
// });

// //htmlList.innerHTML = content.join('');
// console.dir(htmlList.children)

// htmlList.innerHTML = content.join('')



var todoList = [
    'take shower',
    'breakfast',
    'dinner',
    'clean the house'
];

var ulAccessHTML = document.getElementById('todoList');
console.dir(ulAccessHTML)
console.dir(ulAccessHTML.innerHTML); // empty

var content = todoList.map((item) => {
    return `<li>${item}</li>`;
})

console.log(content); // array

ulAccessHTML.innerHTML = content.join('');

console.dir(ulAccessHTML.children)