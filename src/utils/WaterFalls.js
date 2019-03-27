export default class WaterFalls extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, config) {
    super(scene, x, y, config.key);

    this.scene = scene;
    this.state = {

    };
    this.setDepth(50);
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);
    this.body.allowGravity = false;
    this.body.setImmovable(true);
    this.body.setVelocity(0, 0);
    this.body.mass = 20;
    //this.setDepth(-1);
    this.alpha = 0.5;
  }

  // preUpdate(time, delta) {
  //   super.preUpdate(time, delta);
  // }

  animate(str) {
    this.anims.play(str, true);
  }
}
