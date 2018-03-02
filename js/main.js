/**
 * Created by Jerome Renaux (jerome.renaux@gmail.com) on 25-02-18.
 */
var config = {
    type: Phaser.AUTO,
    width: 20*32,
    height: 20*32,
    parent: 'game',
    scene: [Game]
};

var game = new Phaser.Game(config);
