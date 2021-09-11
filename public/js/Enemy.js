class Enemy {

	constructor(image) {
		this.x = Math.floor(width / 3)
		this.y = image.height * 2
		this.image = image
	}

	update() {
		push()
		if (config.showLocations === true) {
			fill(100, 102, 153)
			text(JSON.stringify({ x: this.x, y: this.y }), this.x, this.y - 10)
		}
		image(this.image, this.x, this.y)
		pop()
	}
}
