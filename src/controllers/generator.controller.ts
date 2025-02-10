import { MainData } from "@intefaces/main.data.interface";
import { GeneratorService } from "@services/generator-service";

export const generateCode = async() => {
    try {           
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
        let response = new GeneratorService(data).generate();
        return response                        
    } catch (error) {    
       
    }    
};