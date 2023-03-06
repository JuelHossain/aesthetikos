export default function random(min, max) {
  console.log(min)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
