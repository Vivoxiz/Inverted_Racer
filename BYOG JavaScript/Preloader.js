topDownCarGame.Preloader = function (game) {
    this.titleText = null;
}

topDownCarGame.Preloader.prototype = {

    preload: function () {
        this.titleText = this.add.image(this.world.centerX, this.world.centerY, 'titleimage');
		    this.titleText.anchor.setTo(0.5, 0.5);
		    this.load.image('titlescreen',  TITLE SCREEN PIC);
		    this.load.bitmapfont(ENTER FONT);
		    this.load.image('road', ROAD PIC);
        this.load.image('van', CANDY_VAN PIC);
        this.load.image('audi', AUDI PIC);
        this.load.image('explosion', EXPLOSION PIC);
    }
    
    create: function () {
  		  this.state.start('StartMenu');
	  }
}
