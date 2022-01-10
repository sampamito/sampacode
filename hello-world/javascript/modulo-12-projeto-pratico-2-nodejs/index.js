const express = require('express');
const path = require('path');
var bodyParser = require('body-parser')

// referencia ao framework express
const app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use( bodyParser.urlencoded({    // to support URL-encoded bodies
    extended: true
}));

// renderiza o index.ejs em html
app.engine('html', require('ejs').renderFile);

// indico que a view engine vai ser aberta em html
app.set('view engine', 'html');

// indico que o diretorio 'public' contem os arquivos estaticos
app.use('/public', express.static(path.join(__dirname, 'public')));

// indico que o diretorio 'views' contem as views
app.set('views', path.join(__dirname,'/views'));

var tasks = ['Arrumar o quarto', 'Comprar no supermercado'];

app.post('/',(req,res)=>{
    tasks.push(req.body.task);
    res.render('index',{tasksList:tasks});
})

app.get('/',(req,res)=>{
    res.render('index',{tasksList:tasks});
})

app.get('/delete/:id',(req,res)=>{
    tasks = tasks.filter((val, index)=>{
        if(index != req.params.id){
            return val;
        }
    })
    res.render('index',{tasksList:tasks});
})

app.listen(5000,()=>{
    console.log('server rodando!');
})