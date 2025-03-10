let students = [];

document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
   
    const studentData = {
        student_id: document.getElementById('student_id').value,
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        grade: document.getElementById('grade').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        phone: document.getElementById('phone').value
    };
   
    students.push(studentData);
    document.getElementById('studentForm').reset();
    document.getElementById('downloadButton').style.display = 'inline-block';
});

document.getElementById('downloadButton').addEventListener('click', function() {
    const jsonData = JSON.stringify(students, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'students.json';
    link.click();
});
