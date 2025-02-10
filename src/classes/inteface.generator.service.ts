import { MainData } from "@intefaces/main.data.interface";

export class InterfaceGenerator{

    mainData: MainData; 
    constructor(mainData: MainData) {
        this.mainData = mainData
    }

    generate(){      
        const body = this.#generateString();
        const file = this.#generateFile(body);
        console.log(body)
        return body;
    }

    #generateFile(body:string){
        console.log("generating Data wg");
    }

    #generateString(){
        const language = this.mainData.language
        let output:string = "";           
        switch (language) {            
            case 1: {
                output = this.#vbGenerator(); 
                break;
            }
            case 2: {
                output = this.#cSharpGenerator();
                break;
            }
            case 3: {
                output = this.#nodeGenerator(); 
                break;
            }            
        }

        return output
    }

    #vbGenerator():string{
        let ouput = `public Interface ${this.mainData.name} {`;

        this.mainData.fieldsList.forEach(field => {
            ouput += `\n\t${field.name} ${field.type}`
        })

        ouput += `\n}`
        return ouput;
    }

    #cSharpGenerator():string{
        let ouput = `public Interface ${this.mainData.name} {`;

        this.mainData.fieldsList.forEach(field => {
            ouput += `\n\t${field.name} ${field.type}`
        })

        ouput += `\n}`
        return ouput;
    }

    #nodeGenerator():string{
        let ouput = `export interface ${this.mainData.name} {`;

        this.mainData.fieldsList.forEach(field => {
            ouput += `\n\t${field.name} ${field.type}`
        })

        ouput += `\n}`
        return ouput;
    }    
} 