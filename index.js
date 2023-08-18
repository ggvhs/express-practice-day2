const express = require('express');

const app = express();

const PORT = 3003

app.listen(PORT, () => console.log(`Running Express on ${PORT}`))

app.get('/' , (req,res) => {
    let numOfJuice = req.params.numOfJuice;
   
    
    res.send(`<h1>${numOfJuice} apple juice</h1>,
    <a href="/98">take one and pass</a>
    
    `
    
    );
    
})

app.get('/:numOfJuice' , (req,res) =>{
    let numOfJuice = parseInt(req.params.numOfJuice);
    if (numOfJuice > 0){
        let knockOneDown = numOfJuice - 1;
        let startAgain = '<a href="/">start again</a>'

        res.send(`
        <h1>${numOfJuice} bottles of juice on the wall</h1>
        <a href="/${knockOneDown}">take one pass it</a>
        // ${knockOneDown > 0 ? startAgain : ''}
        `);

    } else{
        res.send(`
        <h1>No more juice</h1>
        <a href='/'>start again</a>

        `)
    }
})