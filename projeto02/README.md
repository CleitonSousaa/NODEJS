# Sobre o projeto
- Consulta de dados em um banco de dados mySQL. com operações de criar dados, ler, atualizar e excluir. tudo isso gerenciado por uma interface facil e simples.  

- Layout Diagrama :   
 
> /img/diagramaCrud.png  

- Tecnologias ultilidadas :  
> NodeJS  
> Express  
> bodyParser  
> MySQL  
> HTML5  
> CSS3  
> JavaScript  
> Handlebars  

- Configuççao para execução  
## No Backend
- instalar as dependencias listadas no arquivo package.json  
> Crud/package.json
```

npm install

```

- se for a primeira vez configurar o banco de dados  

> Crud/molels/Db.js

```

const sequelize = new Sequelize("NOME_DO_BANCO", "USUARIO", "SENHA", {
    host:"localhost",
    dialect:"mysql",
    query:{raw:true}
});

```

- configura o post.js para executar a criação da tabela 

> Crud/molels/Post.js


```

Post.sync({force: true})

```
- apos a primeira execução comentar para não reencrever a tabela nas proximas execuções

> Crud/molels/Post.js


```

//Post.sync({force: true})

```



- No Frontend :  

> Crud/views/principal.handlebars   

> Rota inicial : /img/pagina_inicial.png  

> Crud/views/home.handlebars  

> Listar usuarios /img/listar_usuarios.png  

> Crud/views/atualizar.handlebars   

> Ataulizar /img/editar_usuario.png  


