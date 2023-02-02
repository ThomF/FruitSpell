import { generateId } from "../Utils/generateId.js";



export class Player {

    constructor(data){
        this.id = generateId()
        this.name = data.name
        this.score = 0;
    }

    get ListTemplate(){
        return `<div class="row">
        <p>${this.name}</p>
        <p>SCORE:${this.score}</p>
        </div>`
    }



}