import { Scene } from 'phaser'

import SCENE from '../common/scenes.keys'

class Title extends Scene {
	constructor() {
		super(SCENE.TITLE)
	}

	create() {
		this.add
			.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Play', {
				fontSize: '4rem',
				color: '#ffffff',
			})
			.setInteractive({ useHandCursor: true })
			.on('pointerdown', () => {
				this.scene.start(SCENE.GAME)
			})
	}
}

export default Title
