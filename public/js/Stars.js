class Stars {

	constructor(density) {
		let starCount = 125
		this.stars = []

		if (density > 0 && density <= 1000) {
			starCount = width * height / 1e6 * density
		}

		for (var i = 0; i < starCount; ++i) {
			this.stars.push(this.newStar())
		}
	}

	newStar(reset) {
		var s = {
			x: random(0, width),
			y: random(0, height - 1),
			speed: random(1, 10),
			color: {r: random(128, 255), g: random(128, 255), b: random(128, 255)},
			size: 1
		}
		s.size = s.speed / 4
		if (reset !== undefined) { // on reset always place at the top
			s.y = 0
		}
		return s
	}

	update() {
		push()
		fill(200)
		strokeWeight(1)
		for (var i = 0; i < this.stars.length; ++i) {
			this.stars[i].y += this.stars[i].speed
			stroke(this.stars[i].color.r, this.stars[i].color.g, this.stars[i].color.b)
			if (this.stars[i].y > height) {
				this.stars[i] = this.newStar(true)
			}
			ellipse(this.stars[i].x, this.stars[i].y, this.stars[i].size, this.stars[i].size)
		}
		pop()
	}

}
