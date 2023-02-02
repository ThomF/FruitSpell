import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";
import { saveState } from "../Utils/Store.js";
import { setHTML, setText } from "../Utils/Writer.js"




class PlayersService {
    setActivePlayer(pId) {
        let player = appState.players.find(p => p.id == pId)
        if (!player) {
            throw new Error("not a player")
        }
        appState.player = player
    }

    randomFruit() {
        let ourFruit = appState.fruits
        let index = Math.floor(Math.random() * ourFruit.length)
        // console.log(index, 'this is my random index', ourFruit[index])
        appState.activeFruit = ourFruit[index]
        console.log(appState.activeFruit);
        setText('ranFruit', `${appState.activeFruit}`)

    }





    createPlayer(formData) {
        let player = new Player(formData)

        appState.players.push(player)
        appState.emit('players')
        saveState('players', appState.players)
    }
}


export const playersService = new PlayersService()