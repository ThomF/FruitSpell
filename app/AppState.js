import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { Player } from "./Models/Player.js"

class AppState extends EventEmitter {

  /** @type {import('./Models/Player').Player[]} */
  players = loadState('players', [Player])
  /** @type {import('./Models/Player').Player | null} */
  player = null
  
  /** @type {string[]} */
  fruits = ['apple', 'orange', 'bananana']
  /** @type {string[] | null} */
  activeFruit = null

  

}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
