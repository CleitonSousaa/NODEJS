const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    

       
// ROTAS PRINCIPAIS

    // PRINCIPAL
    app.get('/', function(req, res){
        res.render('principal')
    })

    // HOME
    app.get('/dados', function(req,res){
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('home', {posts: posts})
        })   
    })

    // FORMULARIO
    app.get('/cad',function(req, res){
        res.render('formulario')
    })

// SUB ROTAS

    // ATUALIZAR
    app.get('/up/:id', function(req, res) {
        Post.findAll({where: {'id': req.params.id}}).then(function(posts) {
            res.render('atualizar', { posts: posts });
        });
    });




// ROTAS FUNCOES

    //CRIAR TABELA
    app.post('/add', function(req, res){
        Post.create({
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            email: req.body.email

        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send('houve um erro'+ erro)
        })
    })


    // ATUALIZAR USUARIO
    app.post('/upd', function(req, res){
        const postId = req.body.id;
    
        Post.update({
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            email: req.body.email
        },{where: { id: postId }}).then(function(){res.redirect('/');}).catch(function(erro){res.send('houve um erro' + erro);});
    });
    

    //DELETAR USUARIO
    app.get('/deletar/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.render('principal')
            
        }).catch(function(erro){
            res.send('essa postagem nao existe'+ erro)
        })
    })

  
app.listen(8081, function(){
    console.log("servidor rodando na url http:localhost:8081")
})