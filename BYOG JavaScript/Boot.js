var topDownCarGame = {};

topDownCarGame.Boot = function (game) {};

topDownCarGame.Boot.prototype = {
    preload: function () {
        this.load.image('titleimage', INSERT TITLE TEXT HERE);
    },
  
    create: function () {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = false;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.minWidth = 343;
        this.scale.minHeight = 480;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.stage.forcePortrait = true;
		this.scale.setScreenSize(true);
        this.input.addPointer();
        this.stage.backgroundColor = '#171642';
        
        this.state.start('Preloader');
    }
};
