import React, { Component } from 'react'
import './App.css' // Você precisará criar um arquivo App.css para estilos
import { Container, ContainerPad } from './styles'

interface AppState {
  msg: string
  pad_c: boolean
  pad_d: boolean
  pad_e: boolean
  pad_playing: 'C' | 'D' | 'E' | null
}

// eslint-disable-next-line @typescript-eslint/ban-types
class App extends Component<{}, AppState> {
  player_pad_c: HTMLAudioElement
  player_pad_d: HTMLAudioElement
  player_pad_e: HTMLAudioElement

  // eslint-disable-next-line @typescript-eslint/ban-types
  constructor(props: {}) {
    super(props)
    this.state = {
      msg: '',
      pad_c: false,
      pad_d: false,
      pad_e: false,
      pad_playing: null
    }
    this.player_pad_c = new Audio()
    this.player_pad_d = new Audio()
    this.player_pad_e = new Audio()
  }

  componentDidMount() {
    this.player_pad_c.src = require('./foundations/c.mp3')
    this.player_pad_d.src = require('./foundations/d.mp3')
    this.player_pad_e.src = require('./foundations/e.mp3')
  }

  _play = (pad: 'C' | 'D' | 'E') => {
    const { pad_playing } = this.state
    this._stopAll()

    if (pad_playing === pad) {
      this.setState({ pad_playing: null })
    } else {
      this.setState({ pad_playing: pad })

      const audioPlayer = this._getAudioPlayer(pad)
      audioPlayer.volume = 0
      audioPlayer.play()
      this._fadeIn(audioPlayer, 2)
    }
  }

  _stopAll = () => {
    const { pad_playing } = this.state
    if (pad_playing) {
      const audioPlayer = this._getAudioPlayer(pad_playing)
      this._fadeOut(audioPlayer, 2)
      this.setState({ pad_playing: null })
    }
  }

  _getAudioPlayer = (pad: 'C' | 'D' | 'E') => {
    switch (pad) {
      case 'C':
        return this.player_pad_c
      case 'D':
        return this.player_pad_d
      case 'E':
        return this.player_pad_e
      default:
        throw new Error(`Pad "${pad}" não é suportado.`)
    }
  }

  // Função para aplicar fade in gradualmente
  _fadeIn = (player: HTMLAudioElement, duration: number) => {
    const increment = 0.05 // Incremento de volume a cada intervalo de tempo
    const interval = (duration * 1000) / (player.volume / increment) // Intervalo em milissegundos
    const fadeInInterval = setInterval(() => {
      if (player.volume + increment < 1) {
        player.volume += increment
      } else {
        clearInterval(fadeInInterval) // Limpar o intervalo quando o volume atingir 1
      }
    }, interval)
  }

  // Função para aplicar fade out gradualmente
  _fadeOut = (player: HTMLAudioElement, duration: number) => {
    const decrement = 0.05 // Decremento de volume a cada intervalo de tempo
    const interval = (duration * 1000) / (player.volume / decrement) // Intervalo em milissegundos
    const fadeOutInterval = setInterval(() => {
      if (player.volume - decrement > 0) {
        player.volume -= decrement
      } else {
        player.pause()
        player.currentTime = 0
        clearInterval(fadeOutInterval) // Limpar o intervalo quando o volume atingir 0
      }
    }, interval)
  }

  render() {
    const { pad_c, pad_d, pad_e, pad_playing } = this.state
    return (
      <div>
        <>
          <div>
            <Container>
              <ContainerPad
                className={pad_playing === 'C' ? 'pad active' : 'pad'}
                onClick={() => {
                  this._play('C')
                }}
              >
                <p>Paradise C</p>
              </ContainerPad>
              <ContainerPad
                className={pad_playing === 'D' ? 'pad active' : 'pad'}
                onClick={() => {
                  this._play('D')
                }}
              >
                <p>Paradise D</p>
              </ContainerPad>
              <ContainerPad
                className={pad_playing === 'E' ? 'pad active' : 'pad'}
                onClick={() => {
                  this._play('E')
                }}
              >
                <p>Paradise E</p>
              </ContainerPad>
              <ContainerPad
                className={pad_playing === 'E' ? 'pad active' : 'pad'}
                onClick={() => {
                  this._play('E')
                }}
              >
                <p>Paradise E</p>
              </ContainerPad>
            </Container>
            <div className="control-panel">
              <p>Pad C: {pad_c.toString()}</p>
              <p>Pad D: {pad_d.toString()}</p>
              <p>Pad E: {pad_e.toString()}</p>
              {(pad_c || pad_d || pad_e) && (
                <img src="assets/stop.png" alt="Stop" onClick={this._stopAll} />
              )}
            </div>
          </div>
        </>
      </div>
    )
  }
}

export default App
