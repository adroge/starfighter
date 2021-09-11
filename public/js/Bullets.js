class Bullets {

	constructor() {
		this.bullets = []
	}

	newBullet(x, y, speed, image) {
		this.bullets.push({ x, y, speed, image })
	}

	update() {
		push()
		for (let i = 0; i < this.bullets.length; ++i) {
			this.bullets[i].y += this.bullets[i].image.height * this.bullets[i].speed
			image(this.bullets[i].image, this.bullets[i].x, this.bullets[i].y)
		}

		for (let i = this.bullets.length - 1; i >= 0; --i) {
			if (this.bullets[i].y < 0 || this.bullets[i].y > height) {
				this.bullets.splice(i, 1)
			}
		}

		pop()
	}
}
