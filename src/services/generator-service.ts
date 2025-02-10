import { InterfaceGenerator } from "@classes/inteface.generator.service";
import { MainData } from "@intefaces/main.data.interface";

export class GeneratorService {

    data: MainData        

    constructor(data:MainData) {
        this.data = data
    }

    generate(){
        try {
            return new InterfaceGenerator(this.data).generate(); 

        } catch (error) {
            
        }
    }
}


