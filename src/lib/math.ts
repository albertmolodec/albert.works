export const MyMath = {
  randomFloatInRange: (min: number, max: number) => Number((Math.random() * (max - min) + min).toFixed(2)),
}
