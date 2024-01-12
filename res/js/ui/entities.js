const enemy = {
  hp: 100,
  name: "enemy1",
  dmg: 12,
};
export class Enemy {
  constructor(name, hp, dmg, type, x, y) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.img = new Image();
    this.setType(type);
    this.img.src = this.path;
    this.position = {
      x: x,
      y: y,
    };
    this.ratio = 1;
    this.size = {
      width: 200 * this.ratio,
      height: 200 * this.ratio,
    };
    this.velocity = {
      x: 2,
      y: 0,
    }
  }
  draw(ctx) {
    ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }

  setType(type) {
    const paths = [
      "./res/img/enemies/battle_bus.png",
      "./res/img/enemies/BOSS.png",
      "./res/img/enemies/fnkid.png",
      "./res/img/enemies/kevin.png",
      "./res/img/enemies/mecha.png",
    ];
    this.path = paths[type];
  }

  update() {
    this.move();

  }

  move() {
    this.position.x +=this.velocity.x;
    if(this.position.x >= 400){
      this.velocity.x *= -1
    }
    if (this.position.x <= 0) {
      this.velocity.x *= -1
    }
  }
}

/*// OOP
// vlastnosti objektu - atributy
const enemy = {
  hp: 100,
  name: "enemy1",
  dmg: 12,
};
// šablona - třída (class)
// třída (class) má vždy první písmeno velké
export class Enemy {
  //constructor - metoda ktera se vola pri vytvoreni objektu
  constructor(name, hp, dmg, type) {
    //this - ukazuje na vniklou instanci - kopii od tridy
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.img = new Image();
    this.setType(type);
    this.img.src = this.path;
    this.position = {
      x: 50,
      y: 300,
    };
    this.size = {
      width: 200,
      height: 100,
    };
  }
  draw(ctx) {
    ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height,
    );
  }

  setType(type) {
    const paths = [
      "./res/img/enemies/battle_bus.png",
      "./res/img/enemies/BOSS.png",
      "./res/img/enemies/fnkid.png",
      "./res/img/enemies/kevin.png",
      "./res/img/enemies/mecha.png",
    ];
    this.path = paths[type];
  }

}
//const myEnemy = new Enemy("Enemy 1", 100, 12); //vytvoreni kopie od sablony - objekt (instance)

*/
