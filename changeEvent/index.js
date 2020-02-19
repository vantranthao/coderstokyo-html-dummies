var students = [{
        name: 'Van',
        age: 20
    },
    {
        name: 'Hanh',
        age: 19
    },
    {
        name: 'Duyen',
        age: 18
    },
    {
        name: 'Hang',
        age: 18
    },
    {
        name: 'Nam',
        age: 19
    },
    {
        name: 'Huong',
        age: 20
    }
];

var selectStudent = document.getElementById('select-student');
selectStudent.addEventListener('change', function() {
    // save the current age value be selected
    var currentAge = parseInt(selectStudent.value);
    var filterStudent = students.filter((stu) => {
        return stu.age === currentAge;
    })
    render(filterStudent);
})


function render(students) {
    var studentsTable = document.getElementById('students-table');
    var content = students.map((student) => {
        return `<tr><td>${student.name}</td><td>${student.age}<td></tr>`;
    });
    studentsTable.innerHTML = content.join('');
}

render(students);































// var selectStudent = document.getElementById('select-student');
// selectStudent.addEventListener('change', collectItem);

// // const collectItem = () => {
// //     // current selected age
// //     var currentAge = selectStudent.value;
// // }
// function collectItem () {
//     // current selected age
//     var currentAge = parseInt(selectStudent.value);
//     var collectStudent = students.filter((student) => {
//         return student.age === currentAge;
//     });
//     renderInfo(collectItem);
// }


// const renderInfo = (students) => {
//     var studentsTable = document.getElementById('students-table');
//     var content = students.map((student) => {
//         return `<tr><td>${student.name}</td><td>${student.age}</td></tr>`;
//     });

//     studentsTable.innerHTML = content.join('');
// }
// renderInfo();