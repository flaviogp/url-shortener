const characters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
]

const random = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const randomRoute = () => {
  let route = [];
  let length = random(5, 10);

  for (let i = 0; i <= length; i++) {
    const character = characters[random(0, characters.length - 1)]
    route.push(character)
  }

  return route.join('');

}


export default function shortenUrl() {
  const route = randomRoute();
  return route;
}
