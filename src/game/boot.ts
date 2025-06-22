import { Scene } from 'phaser'
import { SCENES } from '../common/keys'

class Boot extends Scene {
	constructor() {
		super(SCENES.BOOT)
	}

	create() {
		this.scene.start(SCENES.PRELOAD)
	}
}

export default Boot
