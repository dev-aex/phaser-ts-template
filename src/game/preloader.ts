import { Scene } from 'phaser'
import { SCENES } from '../common/keys'

class Preload extends Scene {
	constructor() {
		super(SCENES.PRELOAD)
	}
	preload() {}

	create() {
		this.scene.start(SCENES.TITLE)
	}
}

export default Preload
