class Ship {

	constructor(x, y, image) {
		this.x = x
		this.y = y
		this.image = image
		this.speed = 3
	}

	move(x, y) {
		this.x += x * this.speed
		this.y += y * this.speed
	}

	update() {
		this.handleKeyPress()
		push()
		image(this.image, this.x, this.y)
		if (config.showLocations === true) {
			fill(100, 102, 153)
			text(JSON.stringify({ x: this.x, y: this.y }), this.x, this.y - 10)
		}
		pop()
	}

	handleKeyPress() {

		if (keyCode === 32 && keyIsPressed === true) {
			bullets.newBullet(this.x, this.y, -1, images.Laser)
			keyCode = 0
			sounds.Laser.play()
			return
		}

		if (keyIsDown(LEFT_ARROW)) {
			if (this.x > 0) {
				this.move(-1, 0)
			}
		}

		if (keyIsDown(RIGHT_ARROW)) {
			if (this.x < width - this.image.width) {
				this.move(1, 0)
			}
		}

		if (keyIsDown(UP_ARROW)) {
			if (this.y > 0) {
				this.move(0, -1)
			}
		}

		if (keyIsDown(DOWN_ARROW)) {
			if (this.y < height - this.image.height) {
				this.move(0, 1)
			}
		}

	}
}