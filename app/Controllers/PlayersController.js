import { appState } from "../AppState.js"
// @ts-ignore
import{ setHTML, setText} from"../Utils/Writer.js"
import { playersService } from "../Services/PlayersService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"

function _drawPlayers(){
    let template = ''
    appState.players.forEach(p => template += p.ListTemplate)
    // @ts-ignore
    setHTML('score', template)
}

// @ts-ignore
function _drawPlayer(){
    console.log("will this work")
    // @ts-ignore
    setText('activePlayer', `${appState.player.name} ${appState.player.score}`)
}


export class PlayersController{

    constructor(){
        this.show()
        appState.on('players', _drawPlayers)
        appState.on('player', _drawPlayer)

    }


    show(){
        _drawPlayers()
    }



    handleFormSubmit(){
        try {
            // @ts-ignore
            event.preventDefault()
            // @ts-ignore
            const form = event.target
            const formData = getFormData(form)

            playersService.createPlayer(formData)
            console.log(formData)

        } catch (error) {
            
        }
    }
    handleFruitSubmit(answer){
        try {
            // @ts-ignore
            event.preventDefault()
            // @ts-ignore
            const form = event.target
            const formData = getFormData(form)

            playersService.createPlayer(formData)
            console.log(formData)

        } catch (error) {
            
        }
    }
    randomFruit(){
        playersService.randomFruit()
    }

    activePlayer(pId){
        try {
            console.log('controller active')
            playersService.setActivePlayer(pId)
        } catch (error) {
            Pop.error(error)
            
        }
        
    }


}