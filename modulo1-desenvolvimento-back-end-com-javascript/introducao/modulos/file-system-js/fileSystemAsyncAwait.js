import { promises as fs } from "fs";

const init = async () => {
    try{
        await fs.writeFile("teste1.txt","bla bla bla");
        await fs.appendFile("teste1.txt","\nteste append file");
        const data = await fs.readFile("teste3.txt","utf-8");
        console.log(data);
    } catch(err){
        console.log(err);
    }  
}

init();