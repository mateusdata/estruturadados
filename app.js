const fs = require("fs");

fs.readFile("txt.in", "utf8", (err, input) =>{
    if(err){
        console.log(err)
    }
    /*console.log("Arquivo criado com sucesso")
    let tree = input.split("\n").map(linha ,input, ()=>{
        linha.split("\n")
    })*/
    let output = input.split("\n").map(linha => {
        //linha.split(" ")
        return linha.split(" ")
    })    

    console.log(output);
})
