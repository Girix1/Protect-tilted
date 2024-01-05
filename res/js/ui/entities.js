// OOP
// vlastnosti objektu - atributy
const enemy = {
    hp: 100,
    name: "enemy1",
    dmg: 12
}
// šablona - třída (class)
// třída (class) má vždy první písmeno velké
export class Enemy {
    //constructor - metoda ktera se vola pri vytvoreni objektu
    constructor(name, hp, dmg) {
      //this - ukazuje na vniklou instanci - kopii od tridy
      this.name = name;
      this.hp = hp;
      this.dmg = dmg;
    }
  }
  //const myEnemy = new Enemy("Enemy 1", 100, 12); //vytvoreni kopie od sablony - objekt (instance)