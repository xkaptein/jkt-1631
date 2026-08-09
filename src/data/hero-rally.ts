import * as hero from "@/assets/img/heroes";
type Hero = {
  name: string;
  avatar: string;
};
const rallyInitiatorHeroes: Hero[] = [
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

const rallyJoiners: Hero[] = [
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

export { rallyInitiatorHeroes, rallyJoiners };
