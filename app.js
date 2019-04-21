let express = require("express");

let app = express();

app.use(express.static(__dirname));

app.listen(322,()=>console.log("App listen to 322"))













