import { ControllerGenerator } from '@classes/controller.generator.service';
import { Router} from 'express';

const generator = Router();

const controller = new ControllerGenerator();

generator
    .get("/", async (req, res)=>{
        const ctrl = controller.generateController()
        console.log(req.body)
        console.log(ctrl)
        res.send(ctrl)
    })
    .get('/generate', (req, res)=>{
        console.log(req.body)
        const ctrl = controller.generateController();
    })
    .get('/generate/:id', (req, res)=>{
        console.log(req.body)
    })
    .put('/')

export default generator