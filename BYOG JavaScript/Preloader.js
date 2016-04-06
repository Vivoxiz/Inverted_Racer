topDownCarGame.Preloader = function (game) {
    this.preloadBar = null;
    this.titleText = null;
};

topDownCarGame.Preloader.prototype = {

    preload: function () {
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY + 220, 'preloaderBar');
	this.preloadBar.anchor.setTo(0.5, 0.5);
	this.load.setPreloadSprite(this.preloadBar);
        this.titleText = this.add.image(this.world.centerX, this.world.centerY, 'titleimage');
        this.titleText.anchor.setTo(0.5, 0.5);
        this.load.image('titlescreen', 'Assets/road-rash-ii-usa-europe-v1-2.png');
        this.load.bitmapFont('eightbitwonder', 'Assets/fonts/eightbitwonder.png', 'Assets/fonts/eightbitwonder.fnt');
        this.load.image('road', 'Assets/road5.gif');
        this.load.image('van', 'Assets/Candy_van.png');
        this.load.image('audi', 'Assets/Audi.png');
        this.load.image('explosion', 'Assets/explosion.jpg');
    },
    
    create: function () {
	this.preloadBar.cropEnabled = false; //force show the whole thing
        this.state.start('StartMenu');
	}
};
