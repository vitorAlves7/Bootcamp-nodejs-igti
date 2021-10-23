import { promises as fs } from "fs";


fs.writeFile("teste3.txt","bla bla bla").then(() => {
    fs.appendFile("teste3.txt","\nteste append file").then(() => {
        fs.readFile("teste3.txt","utf-8").then(resp =>{
            console.log(resp);
        }).catch(err => {
            console.log(err);
        })
    }).catch(err => {
        console.log(err);
    })
}).catch(err => {
    console.log(err);
})
