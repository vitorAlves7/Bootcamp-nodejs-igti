import express from "express";

const app = express();
app.use(express.json())

app.all("/testAll",(req,res) =>{
    res.send(req.method);
});

app.get("/teste?",(_req,res) =>{
    res.send("/teste?");
});

app.get("/buzz+",(_req,res) =>{
    res.send("/buzz+");
});

app.get("/one*Blue",(req,res) => {
    res.send(req.path);
});

app.post("/test(ing)+", (req,res) => {
    console.log(req.body) ;
    res.send("/test(ing)+");
});

app.get(/.*Red$/, (req,res) => {
    res.send("/.*Red$/");
});

//parametros na rota

app.get("/testParam/:id/:a?",(req,res) => {
    res.send(req.params.id + " " + req.params.a);
});



app.listen(3000, () => {
    console.log("API Started!");
});

