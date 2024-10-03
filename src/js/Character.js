export class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error("Error! The character's name should be a string and contain from 2 to 10 symbols!");
    }
    if (['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'].includes(type) !== true) {
      throw new Error("Error! Such character does not exist!")
    }
    
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}