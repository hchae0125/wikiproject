import express, { Application } from 'express';
import mysql from 'mysql';
import morgan from 'morgan';
import cors from 'cors';
import {dbConnect} from './database';
import { AppRouting } from '../routes/appRouting';

export class App {
    private app: Application; 
    constructor (private port?: number | string) {
        dbConnect.connect();
        this.app = express();
        this.app.use(cors);
        
        this.setting();
        this.middleware();
        this.app.use('/api', AppRouting());
    }
    

    setting () {
        this.app.set('port', this.port || process.env.PORT || 4000);
    }

    middleware () {
        this.app.use(morgan(`dev`));
    }

    async listen () {
        await this.app.listen(this.app.get('port'), () => {
            console.log(this.app.get('port'));
        });
        
    }

}