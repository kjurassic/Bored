const express = require("express")
const path = require('path')
let  app = express();
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'))
});
app.use(express.static('public'))
app.listen(3000,  () => console.log("listening on port 3000!"));