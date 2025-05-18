import Phaser from 'phaser'

const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  pixelArt: true,
  scale: {
    parent: 'game-container',
    width: 1920,
    height: 1080,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    mode: Phaser.Scale.FIT
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  backgroundColor: '#FFFFFF',
  scene: []
}

new Phaser.Game(gameConfig)
