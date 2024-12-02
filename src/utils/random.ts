// create a function that returns a random number between provided min and max return only integer
export function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}
