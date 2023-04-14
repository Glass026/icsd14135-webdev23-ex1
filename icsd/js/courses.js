const courses = [
    { title: 'English 1', category: 'sem1' },
    { title: 'Discrete Mathematics', category: 'sem1' },
    { title: 'Structured Programming', category: 'sem1' },
    { title: 'Introduction to Computer Science and Communications', category: 'sem1' },
    { title: 'Logic Design', category: 'sem1' },
    { title: 'Calculus', category: 'sem1' },
    { title: 'Physics', category: 'sem1' },
    //{ name: 'Mitrou Lilian', category: 'professor' },
];

function createCourseList() {
    let ul = document.getElementById('courseList');
    courses.forEach(course => {
        let li = document.createElement('li');
        li.setAttribute('data-category', course.category);
        li.textContent = course.title;
        ul.appendChild(li);
    });
}

function filterCourses() {
    let select = document.getElementById('categoryFilter');
    let filter = select.value;
    let ul = document.getElementById('courseList');
    let li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        let category = li[i].getAttribute('data-category');
        if (filter === 'all' || category === filter) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

createCourseList();