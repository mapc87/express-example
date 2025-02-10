import { ControllerGenerator } from '@classes/controller.generator.service';
import { generateCode } from '@controllers/generator.controller';
import { Router} from 'express';

const generator = Router();

generator
    .get("/", async (req, res)=>{
        
        let data = generateCode();
        res.send(data)
    })
    .get('/generate', (req, res)=>{
        console.log(req.body)
        let data = generateCode();
        res.send(data)
    })
    .get('/generate/:id', (req, res)=>{
        console.log(req.body)
    })
    .put('/')

export default generator