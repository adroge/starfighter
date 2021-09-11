let images = {}
let sounds = {}
let enemy
let ship
let stars
let bullets

function preload() {
	images.Ship = loadImage('/img/Ship.png')
	images.Enemy = loadImage('/img/Enemy.png')
	images.Laser = loadImage('/img/laser.png')
	soundFormats('mp3', 'ogg');
	sounds.Laser = loadSound('/sfx/laser.mp3');
}

function setup() {
	let windowSize = getCanvasSize()

	createCanvas(windowSize.width, windowSize.height)
	sounds.Laser.setVolume(0.25)

	stars = new Stars(config.starDensity)
	ship = new Ship(Math.floor(width / 2), height - images.Ship.height * 2, images.Ship)
	enemy = new Enemy(images.Enemy)
	bullets = new Bullets()
}

function draw() {
	background(16, 16, 16)
	stars.update()
	ship.update()
	enemy.update()
	bullets.update()
}

function getCanvasSize() {
	let w = 640,
		h = 480,
		qp = new URLSearchParams(location.search)

	if (qp.has('small') === false) {
		w = windowWidth
		h = windowHeight
	}
	return { width: w, height: h }
}

// function resizeCanvas() {
// 	let windowSize = getSize()
// 	resizeCanvas(windowSize.width, windowSize.height)
// }

window.addEventListener('resize', function () {
	setup()
})
