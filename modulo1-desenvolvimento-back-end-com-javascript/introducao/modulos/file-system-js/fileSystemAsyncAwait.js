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

const writeReadJson = async () => {
    try {

        const arrayCarros = ["Gol","Palio","Uno"];
        const obj = {
            carros:arrayCarros
        }

        await fs.writeFile("teste.json",JSON.stringify(obj));
        
        const data = JSON.parse(await fs.readFile("teste.json"));
        data.carros.push("Sandeiro");
        console.log(data);

        await fs.writeFile("teste.json",JSON.stringify(data));

    } catch(err) {
        console.log(err);
    }
}

init();

writeReadJson();