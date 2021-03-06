const express = require('express');
const cors = require('cors');

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        
        // Middleware
        this.middlewares();

        //App Routes
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Reading and Parsing
        this.app.use(express.json());

        //public directory
        this.app.use(express.static('public'));
    }

    //endpoints
    routes(){
        this.app.use('/api/users', require('./routes/user'))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Listening in PORT:', this.port);
        });
    }
}

module.exports = Server;