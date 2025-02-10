import express, {Express, Request, Response} from 'express';
import { Router } from 'express'


export class serverClientPlugin  {

    router: Router;
    app: Express;

  
    constructor() {
       this.app = express();
       this.router = Router()        
    }

    getApp = ()=>{
        return this.app
    }

    server =  () =>{
        return express()
    }

    req = () =>{
        return this.req
    }

    res =  () =>{
        return Response
    }



    // get = (route:string, callback: ()=>{})=>{
        
    // }

    // post = ()=>{

    // }
    // put = ()=>{

    // }

    // delete = ()=>{
        
    // }
}




