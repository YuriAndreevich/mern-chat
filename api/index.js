import express from "express";

const app = express();

app.get('/test', (req, res) => {
    res.json('test ok')
})

app.post('/register', (req, res) => { })

app.listen(4000)

//mongodb+srv://admin:l5wVsKHsbcZBI9tX@patriot.ghzx2ys.mongodb.net/?retryWrites=true&w=majority