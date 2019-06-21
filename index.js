const express = require('express');
const app = express();

// const courses = [
//     {id: 1, course: 'newCourse1'},
//     {id: 2, course: 'newCourse1'},
//     {id: 3, course: 'newCourse1'}
// ]
app.get("/", (req, res) => {
    res.send('Welcome to App!!');
})

app.get("/api/courses", (req, res) => {
  res.send([1,2,3]);  
})

app.get("/api/courses/:id", (req, res) => {
    res.send(req.params.id);  
})

app.get("/api/posts/:year/:month", (req, res) => {
    res.send(req.query);  
})

const port =  process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is Listening on ${port}`));