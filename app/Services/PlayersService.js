import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";
import { saveState } from "../Utils/Store.js";
import { setText } from "../Utils/Writer.js"




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

    addPoint(formData) {
        console.log(formData);
        if (appState.activeFruit == formData.fruit) {
            appState.player.score++
            appState.activeFruit = null
            playersService.randomFruit()
            appState.emit('activeFruit')
            console.log(appState.player.score, 'this is the active players score');
            saveState('players', appState.players)


        } else console.log('I suck at this');
    }
}


export const playersService = new PlayersService()