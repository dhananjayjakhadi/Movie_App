const express = require('express');
const app = express();

const courses = [
    {id: 1, course: 'newCourse1'},
    {id: 2, course: 'newCourse1'},
    {id: 3, course: 'newCourse1'}
];
app.get("/", (req, res) => {
    res.send('Welcome to App!!');
})

app.get("/api/courses", (req, res) => {
  res.send(courses);  
})

app.get("/api/courses/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id)); 
    if(!course) res.status(404).send('Course not found');
    res.send(course);
})

const port =  process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is Listening on ${port}`));