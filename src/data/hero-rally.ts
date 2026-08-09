import * as hero from "@/assets/img/heroes";
export type Hero = {
  name: string;
  avatar: string;
};
export const rallyInitiatorHeroes: Hero[] = [
  {
    name: "Jabel",
    avatar: hero.jabel,
  },
  {
    name: "Amadeus",
    avatar: hero.amadeus,
  },
  {
    name: "Petra",
    avatar: hero.petra,
  },
  {
    name: "Marlin",
    avatar: hero.marlin,
  },
];

export const rallyJoiners: Hero[] = [
  {
    name: "Chenko",
    avatar: hero.chenko,
  },
  {
    name: "Amadeus",
    avatar: hero.amadeus,
  },
  {
    name: "Yeonwoo",
    avatar: hero.yeonwoo,
  },
  {
    name: "Amane",
    avatar: hero.amane,
  },
  {
    name: "Hilde",
    avatar: hero.hilde,
  },
];

export const rallyAttackInitiatorGarrison: Hero[] = [
  { name: "Petra", avatar: hero.petra },
  { name: "Amadeus", avatar: hero.amadeus },
  { name: "Marlin", avatar: hero.marlin },
  { name: "Jabel", avatar: hero.jabel },
];
export const rallyAttackJoinerGarrison: Hero[] = [
  { name: "Amadeus", avatar: hero.amadeus },
  { name: "Chenko", avatar: hero.chenko },
];
export const defenseGarrisonLead: Hero[] = [
  { name: "Eric", avatar: hero.eric },
  { name: "Hilde", avatar: hero.hilde },
  { name: "Amadues", avatar: hero.amadeus },
  { name: "Howard", avatar: hero.howard },
  { name: "Zoe", avatar: hero.zoe },
  { name: "Jabel", avatar: hero.jabel },
];
export const defenseJoiner: Hero[] = [
  { name: "Hilde", avatar: hero.hilde },
  { name: "Saul", avatar: hero.saul },
  { name: "Gordon", avatar: hero.gordon },
];
