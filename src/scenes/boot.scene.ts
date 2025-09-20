import { Scene } from 'phaser'

import SCENE from '../common/scenes.keys'

class Boot extends Scene {
	constructor() {
		super(SCENE.BOOT)
	}

	create() {
		this.scene.start(SCENE.PRELOAD)
	}
}

export default Boot
