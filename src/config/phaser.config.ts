import type { Types } from 'phaser'
import { AUTO, Game, Scale } from 'phaser'

import Boot from '../scenes/boot.scene'
import MainGame from '../scenes/game.scene'
import Preload from '../scenes/preload.scene'
import Title from '../scenes/title.scene'

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
