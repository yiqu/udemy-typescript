type WaterBottle = {
  color: string;
  volume: number;
  belongsTo: string;
}

function createWaterBottle(c: string, v: number, owner: string) {

  // Partial, which tells TS that the props could all be optional
  let res: Partial<WaterBottle> = {};
  res.color = "blue";
  res.volume = 12;
  res.belongsTo = owner;
  return res;
}

//console.log(createWaterBottle("blue", 12, "Kevin"));

// now i cant push nor pop
const readonlynames: Readonly<string[]> = ["K", "E"];