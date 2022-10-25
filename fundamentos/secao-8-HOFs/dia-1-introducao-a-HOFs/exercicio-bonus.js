const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = (dragonStatus) => {
  const minDamage = 15;
  const maxDamage = Math.floor(Math.random() * dragonStatus.strength);
  dragonStatus.damage = minDamage < maxDamage ? maxDamage : minDamage;

  return dragonStatus.damage;
};

const warriorDamage = (warriorStatus) => {
  const minDamage = warriorStatus.strength;
  const maxDamage = Math.floor(
    Math.random() * minDamage * warriorStatus.weaponDmg
  );
  warriorStatus.damage =
    minDamage < maxDamage ? maxDamage : minDamage;

  return warriorStatus.damage;
};

const mageDamage = (mageStatus) => {
  const minDamage = mageStatus.intelligence;
  const maxDamage = Math.floor(Math.random() * minDamage * 2);

  if (mageStatus.mana < 15) return 'Não possui mana suficiente';

  const mageDamage = (mageStatus.damage =
    minDamage < maxDamage ? maxDamage : minDamage);
  mageStatus.mana -= 15;
  return {
    mageDamage,
    mageStatus: mageStatus.mana,
  };
};

const gameActions = {
  dragonTurn: (dragonDamage) => {
    mage.healthPoints -= dragonDamage(dragon);
    warrior.healthPoints -= dragonDamage(dragon);
  },
  warriorTurn: (warriorDamage) => {
    dragon.healthPoints -= warriorDamage(warrior);
  },
  mageTurn: (mageDamage) => {
    const damage = mageDamage(mage);
    dragon.healthPoints -= damage.mageDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);

console.log(gameActions.turnResults());
