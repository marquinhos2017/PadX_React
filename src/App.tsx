import React, { Component } from 'react';
import './App.css'; // Você precisará criar um arquivo App.css para estilos
import { Color, Container, ContainerPad } from './styles';

interface AppState {
  msg: string;
  pad_c: boolean;
  pad_d: boolean;
  pad_e: boolean;
  pad_playing: 'C' | 'D' | 'E' | null;
  masterVolume: number;
  padVolumes: { [key in 'C' | 'D' | 'E']: number };
}

class App extends Component<{}, AppState> {
  player_pad_c: HTMLAudioElement;
  player_pad_d: HTMLAudioElement;
  player_pad_e: HTMLAudioElement;

  constructor(props: {}) {
    super(props);
    this.state = {
      msg: '',
      pad_c: false,
      pad_d: false,
      pad_e: false,
      pad_playing: null,
      masterVolume: 0.5, // Volume inicial mestre
      padVolumes: {
        C: 0.5,
        D: 0.5,
        E: 0.5,
      },
    };
    this.player_pad_c = new Audio();
    this.player_pad_d = new Audio();
    this.player_pad_e = new Audio();
  }

  componentDidMount() {
    this.player_pad_c.src = require('./foundations/c.mp3');
    this.player_pad_d.src = require('./foundations/d.mp3');
    this.player_pad_e.src = require('./foundations/e.mp3');
  }

  _play = (pad: 'C' | 'D' | 'E') => {
    const { pad_playing, padVolumes } = this.state;
    this._stopAll();

    if (pad_playing === pad) {
      this.setState({ pad_playing: null });
    } else {
      this.setState({ pad_playing: pad });

      const audioPlayer = this._getAudioPlayer(pad);
      audioPlayer.volume = padVolumes[pad]; // Define o volume do pad
      audioPlayer.play();
      this._fadeIn(audioPlayer, 2);
    }
  }

  _stopAll = () => {
    const { pad_playing } = this.state;
    if (pad_playing) {
      const audioPlayer = this._getAudioPlayer(pad_playing);
      this._fadeOut(audioPlayer, 2);
      this.setState({ pad_playing: null });
    }
  }

  _getAudioPlayer = (pad: 'C' | 'D' | 'E') => {
    switch (pad) {
      case 'C':
        return this.player_pad_c;
      case 'D':
        return this.player_pad_d;
      case 'E':
        return this.player_pad_e;
      default:
        throw new Error(`Pad "${pad}" não é suportado.`);
    }
  }

  // Função para aplicar fade in gradualmente
  _fadeIn = (player: HTMLAudioElement, duration: number) => {
    const increment = 0.05; // Incremento de volume a cada intervalo de tempo
    const interval = duration * 1000 / (player.volume / increment); // Intervalo em milissegundos
    const fadeInInterval = setInterval(() => {
      if (player.volume + increment < 1) {
        player.volume += increment;
      } else {
        clearInterval(fadeInInterval); // Limpar o intervalo quando o volume atingir 1
      }
    }, interval);
  }

  // Função para aplicar fade out gradualmente
  _fadeOut = (player: HTMLAudioElement, duration: number) => {
    const decrement = 0.05; // Decremento de volume a cada intervalo de tempo
    const interval = duration * 1000 / (player.volume / decrement); // Intervalo em milissegundos
    const fadeOutInterval = setInterval(() => {
      if (player.volume - decrement > 0) {
        player.volume -= decrement;
      } else {
        player.pause();
        player.currentTime = 0;
        clearInterval(fadeOutInterval); // Limpar o intervalo quando o volume atingir 0
      }
    }, interval);
  }

  // Manipulador de eventos para o controle deslizante de volume mestre
  _handleMasterVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const masterVolume = parseFloat(event.target.value);
    this.setState({ masterVolume }, () => {
      // Quando o volume mestre é alterado, atualiza o volume de todos os players de áudio
      this.player_pad_c.volume = masterVolume;
      this.player_pad_d.volume = masterVolume;
      this.player_pad_e.volume = masterVolume;
    });
  }

  // Manipulador de eventos para o controle deslizante de volume do pad
  _handlePadVolumeChange = (pad: 'C' | 'D' | 'E', volume: number) => {
    this.setState(prevState => ({
      padVolumes: {
        ...prevState.padVolumes,
        [pad]: volume,
      },
    }));
  }

  render() {
    const { pad_c, pad_d, pad_e, pad_playing, masterVolume, padVolumes } = this.state;
    return (
      <div>
        <Container>
          <ContainerPad
            className={pad_playing === 'C' ? 'pad active' : 'pad'}
            onClick={() => {
              this._play('C');
            }}
          >

            <p>C</p>
          </ContainerPad>
          <ContainerPad
            className={pad_playing === 'D' ? 'pad active' : 'pad'}
            onClick={() => {
              this._play('D');
            }}
          >

            <p>D</p>
          </ContainerPad>
          <ContainerPad
            className={pad_playing === 'E' ? 'pad active' : 'pad'}
            onClick={() => {
              this._play('E');
            }}
          >

            <p>E</p>
          </ContainerPad>
          <ContainerPad
            className={pad_playing === 'C' ? 'pad active' : 'pad'}
            onClick={() => {
              this._play('C');
            }}
          >

            <p>C</p>
          </ContainerPad>
          <ContainerPad
            className={pad_playing === 'D' ? 'pad active' : 'pad'}
            onClick={() => {
              this._play('D');
            }}
          >

            <p>D</p>
          </ContainerPad>
          <ContainerPad
            className={pad_playing === 'E' ? 'pad active' : 'pad'}
            onClick={() => {
              this._play('E');
            }}
          >

            <p>E</p>
          </ContainerPad>
          <ContainerPad
            className={pad_playing === 'C' ? 'pad active' : 'pad'}
            onClick={() => {
              this._play('C');
            }}
          >

            <p>C</p>
          </ContainerPad>
          <ContainerPad
            className={pad_playing === 'D' ? 'pad active' : 'pad'}
            onClick={() => {
              this._play('D');
            }}
          >

            <p>D</p>
          </ContainerPad>
          <ContainerPad
            className={pad_playing === 'E' ? 'pad active' : 'pad'}
            onClick={() => {
              this._play('E');
            }}
          >

            <p>E</p>
          </ContainerPad>
          <ContainerPad
            className={pad_playing === 'C' ? 'pad active' : 'pad'}
            onClick={() => {
              this._play('C');
            }}
          >

            <p>C</p>
          </ContainerPad>
          <ContainerPad
            className={pad_playing === 'D' ? 'pad active' : 'pad'}
            onClick={() => {
              this._play('D');
            }}
          >

            <p>D</p>
          </ContainerPad>
          <ContainerPad
            className={pad_playing === 'E' ? 'pad active' : 'pad'}
            onClick={() => {
              this._play('E');
            }}
          >

            <p>E</p>
          </ContainerPad>
        </Container>
        <div className="control-panel">
          <p>Pad C: {pad_c.toString()}</p>
          <p>Pad D: {pad_d.toString()}</p>
          <p>Pad E: {pad_e.toString()}</p>
          {(pad_c || pad_d || pad_e) && (
            <img src="assets/stop.png" alt="Stop" onClick={this._stopAll} />
          )}
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={masterVolume}
            onChange={this._handleMasterVolumeChange}
          />
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={padVolumes['C']}
            onChange={(event) => this._handlePadVolumeChange('C', parseFloat(event.target.value))}
          />
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={padVolumes['D']}
            onChange={(event) => this._handlePadVolumeChange('D', parseFloat(event.target.value))}
          />
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={padVolumes['E']}
            onChange={(event) => this._handlePadVolumeChange('E', parseFloat(event.target.value))}
          />
        </div>
      </div>
    );
  }
}

export default App;