import Elem from './js/element.js'
import FastClick from './js/fastclick.js'
import { getTableCells, getTable } from './js/controller.js'
import { getRandomVal } from './js/probability.js'

import winMessages from './data/messages-processed.js'

/*
import './css/style.css'
import './css/win-messages.css'
import './css/mobile.css'

import './fonts/courgette.css'
*/

const $winContainer = Elem('div', { className: 'win-container flex-container' })

const $winMessage = Elem('h1', { className: 'win-message' })
$winContainer.appendChild($winMessage)

document.addEventListener('DOMContentLoaded', () => {
  const $body = document.body

  const $gameContainer = Elem('div', { className: 'game-container flex-container' })

  const tableCells = getTableCells({
    onPause: () => {
      $body.classList.add('paused')

      const winMessage = getRandomVal(winMessages)

      $winMessage.textContent = winMessage.text
      $winMessage.id = winMessage.type
    },
    onPlay: () => {
      $body.classList.remove('paused')
    }
  })

  const $table = getTable(tableCells)
  $gameContainer.appendChild($table)

  $body.appendChild($gameContainer)
  $body.appendChild($winContainer)

	FastClick.attach($body);
  // Fully disable touch scroll
  document.addEventListener('touchmove', e => e.preventDefault())
})
