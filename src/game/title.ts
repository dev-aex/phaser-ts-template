import { Scene } from 'phaser'
import { SCENES } from '../../common/keys'

class Title extends Scene {
	constructor() {
		super(SCENES.TITLE)
	}

	create() {
		this.add
			.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Play', {
				fontSize: '4rem',
				color: '#ffffff',
			})
			.setInteractive({ useHandCursor: true })
			.on('pointerdown', () => {
				this.scene.start(SCENES.GAME)
			})
	}
}

export default Title
