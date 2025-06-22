import { AUTO, Game, Scale } from 'phaser'
import type { Types } from 'phaser'

import Boot from '../game/boot'
import Preload from '../game/preloader'
import Title from '../game/title'
import MainGame from '../game/scenes/game'

const config: Types.Core.GameConfig = {
	type: AUTO,
	scale: {
		parent: 'game-container',
		width: 1920,
		height: 1080,
		autoCenter: Scale.CENTER_BOTH,
		mode: Scale.FIT,
	},
	backgroundColor: '#585858',
	scene: [Boot, Preload, Title, MainGame],
}

const StartGame = (parent: string) => {
	return new Game({ ...config, parent })
}

export default StartGame
