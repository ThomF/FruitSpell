import { generateId } from "../Utils/generateId.js";



export class Player {

    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.score = data.score || 0;


    }

    get ListTemplate() {
        return `<div class="row" onclick="app.playersController.activePlayer('${this.id}')">
        <h1><b>${this.name}</b></h1>
        <p>SCORE:${this.score}</p>
        </div>`
    }



}