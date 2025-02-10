import { MainData } from "@intefaces/main.data.interface";
import { GeneratorService } from "@services/generator-service";

export const generateCode = async() => {
    try {           
        console.log("CONTROLLER")
        let data:MainData = {
          name: "test",
          fieldsList: [
            {
              name: "first",
              type: "string",
              size: 10
            },
            {
              name: "lastName",
              type: "string",
              size: 12
            },
            {
                name: "dayOfBirth",
                type: "Date",
                size: 12
              }
          ],
          language: 1 
        }
          const generator = new GeneratorService(data).generate();
          console.log(generator)
          return generator                         
    } catch (error) {    
       
    }    
};