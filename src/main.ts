import { WEBGL, Game, Scale } from 'phaser'

const config: Phaser.Types.Core.GameConfig = {
	type: WEBGL,
	scale: {
		parent: 'game-container',
		width: 1920,
		height: 1080,
		autoCenter: Scale.CENTER_BOTH,
		mode: Scale.FIT,
	},
	backgroundColor: '#0f0f0f',
	scene: [],
}

window.onload = () => {
	new Game(config)
}
