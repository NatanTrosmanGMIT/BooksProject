// Imports
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// First step
app.get('/', (req, res) => {
    res.send('Welcome to My DR&P Project - Books');
})

// display that info
app.get('/api/books', (req, res) => {
    const books = [
        {
            "_id": 1,
            "Title": "Unlocking Android",
            "PageCount": 416,
            "PublishedDate": {
                "$date": "2009-04-01T00:00:00.000-0700"
            },
            "Url": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
            "Description": "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
            "Authors": ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
            "Categories": ["Open Source", "Mobile"]
        },
        {
            "_id": 2,
            "Title": "Android in Action, Second Edition",
            "PageCount": 592,
            "PublishedDate": {
                "$date": "2011-01-14T00:00:00.000-0800"
            },
            "ThumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
            "Description": "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
            "Authors": ["W. Frank Ableson", "Robi Sen"],
            "Categories": ["Java"]
        }

    ];
    res.json({ movies: books });
})

// goes to html file
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

// display name after submition but shows in the html
app.get('/book', (req, res) => {
    console.log(`1111111111111111111`)
    res.send('Book Title : ' + req.query.title + ' Authour Name(s): ' + req.query.authour)
})

// display name after submition but doesnt show in the html
app.post('/name', (req, res) => {
    console.log(`555555555555555555555`)
    res.send('Book Title : ' + req.body.title + ' Authour Name(s): ' + req.body.authour)
})
// // getting the name typed in the HTML
// app.get('/hello/:name', (req,res)=>{
//     console.log(req.params.name);
//     res.send('Hello '+req.params.name);
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

