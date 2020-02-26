const express = require('express');
const app = express();

app.get('/', (req, res) => {
    main()
    res.send({ status: 200, message: "No-Lib is running..." })
});

const main = () => {
    console.log("## ##  Main has been started  ## ##")

    console.log("## MAIN ##   List File Result Instancely")
    console.log()

    setTimeout(() => {
        console.log("## MAIN ##   List File Result Delay 5000")
        console.log()
    }, 5000)

    console.log("## ##  Main has been ended  ## ##")
    console.log()
}
module.exports = app;