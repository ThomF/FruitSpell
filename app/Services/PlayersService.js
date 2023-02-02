import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";
import { saveState } from "../Utils/Store.js";



class PlayersService{







    createPlayer(formData){
        let player = new Player(formData)

        appState.players.push(player)
        appState.emit('players')
        saveState('players', appState.players)
    }
}


export const playersService = new PlayersService()