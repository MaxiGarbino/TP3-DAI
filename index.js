import express, { query } from "express"; // hacer npm i express
import cors from "cors"; // hacer npm i cors
import Alumno from "./models/alumno.js"
import {sumar, restar, multiplicar, dividir} from "./modules/matematica.js"
import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from
"./modules/omdb-wrapper.js"

const app = express();
const port = 3000;
// Agrego los Middlewares
app.use(cors()); // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON
//
// Aca pongo todos los EndPoints
//
app.get('/saludar/:nombre', function (req, res) {
    res.send('Hola: ' + req.params.nombre)
   });
app.get('/', (req, res) => { // EndPoint "/"
res.send('Ya estoy respondiendo!');
})
app.get('/validarfecha/:ano/:mes/:dia',(req,res) => {
    const fecha =  Date.parse(`${req.params.ano}-${req.params.mes}-${req.params.dia}`);
    if(fecha){
        res.sendStatus(200);
    }
    else{
        res.sendStatus(400);
    }
});
app.get('/matematica/sumar', (req,res) => 
{
    let n1 = parseInt(req.query.n1);
    let n2 = parseInt(req.query.n2);
    res.status(200).send(`${sumar(n1,n2)}`);
})
app.get('/matematica/restar', (req,res) => 
{
    let n1 = parseInt(req.query.n1);
    let n2 = parseInt(req.query.n2);
    res.status(200).send(`${restar(n1,n2)}`);
})
app.get('/matematica/multiplicar', (req,res) => 
{
    let n1 = parseInt(req.query.n1);
    let n2 = parseInt(req.query.n2);
    res.status(200).send(`${multiplicar(n1,n2)}`);
})
app.get('/matematica/dividir', (req,res) => 
{
    let n1 = parseInt(req.query.n1);
    let n2 = parseInt(req.query.n2);
    res.status(200).send(`${dividir(n1,n2)}`);
})
app.get('/omdb/searchbypage', async(req,res) => 
{
    let texto = req.query.search;
    let pagina = parseInt(req.query.p) ;
    let aux = await OMDBSearchByPage(texto,pagina);
    res.status(200).send(aux)
})
app.get('/omdb/searchcomplete', async(req,res) => 
{
    let texto = req.query.search;
    let aux = await OMDBSearchComplete(texto);
    res.status(200).send(aux)
})

const alumnosArray = [];
alumnosArray.push(new Alumno("Esteban Dido" , "22888444", 20));
alumnosArray.push(new Alumno("Matias Queroso", "28946255", 51));
alumnosArray.push(new Alumno("Elba Calao" , "32623391", 18));

app.get('/alumnos', async(req,res) =>{
    res.status200.send()
})
app.listen(port, () => {
console.log(`Example app listening on port http://localhost:${port}`)
})
