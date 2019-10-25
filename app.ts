import {Deputy, Faction} from './model'

const Vasya = new Deputy(96, 179, 'Pupkin', 'Vasya', 45, true, 55000);
const Dima = new Deputy(75, 180, 'Hodunov', 'Dima', 23, false, 0);
const Luda = new Deputy(55, 179, 'Kukina', 'Luda', 34, true, 100100);
const Kostya = new Deputy(90, 190, 'Sokolov', 'Kostya', 29, false, 0);
const Katya = new Deputy(65, 170, 'Romanchuk', 'Katya', 35, true, 60000);
const Nata = new Deputy(55, 175, 'Bublei', 'Nata', 21, true, 89000);
const Lola = new Deputy(50, 168, 'Huk', 'Lola', 28, true, 56000);
const Luba = new Deputy(70, 175, 'Malonchuk', 'Luba', 28, false, 0);


const faction1 = new Faction([]);
faction1.addDeputy(Vasya);
faction1.addDeputy(Dima);
faction1.addDeputy(Luda);

const faction2 = new Faction([]);
faction2.addDeputy(Kostya);
faction2.addDeputy(Katya);
faction2.addDeputy(Nata);

const faction3 = new Faction([]);
faction3.addDeputy(Lola);
faction3.addDeputy(Luba);

