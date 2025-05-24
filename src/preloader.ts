import { Scene } from 'phaser'
import { SCENES } from './lib/keys'

class PreloaderScene extends Scene {
	constructor() {
		super(SCENES.PRELOADER)
	}

	init() {
		/*====================================
                  LOADER
    ====================================*/
		this.load.on('progress', () => {
			this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Loading...', {
				fontFamily: 'Lexend',
				fontStyle: 'Bold',
				fontSize: '2rem',
			})
		})

		/*====================================
                  SET DATA
    ====================================*/
		/* LOCAL STORAGE*/
		if (localStorageService.read() === undefined) localStorageService.createDefault()
	}

	preload() {}

	create() {
		this.scene.start()
	}
}

export default PreloaderScene
