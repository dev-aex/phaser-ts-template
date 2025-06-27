import { Scene } from 'phaser'
import SCENE from '../common/scenes.keys'

class Preload extends Scene {
	constructor() {
		super(SCENE.PRELOAD)
	}
	preload() {}

	create() {
		this.scene.start(SCENE.TITLE)
	}
}

export default Preload
