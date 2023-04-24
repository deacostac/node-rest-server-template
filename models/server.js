import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { router } from '../routes/user.js';
dotenv.config()

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.usersPath = '/api/users'

        //Middlewares
        this.middlewares();

        //App routes
        this.routes();
    }

    middlewares(){

        //Cors
        this.app.use(cors())

        // Read and PArse Body
        this.app.use(express.json())

        this.app.use( express.static('public'));
    }

    routes(){
        this.app.use(this.usersPath, router)
    }

    listen(){      
        this.app.listen(this.port, () => {
            console.log(`http://localhost:${this.port}`);
        })
    }
}

export{
    Server
}