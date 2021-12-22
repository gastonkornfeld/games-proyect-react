import data from "../../../data";
import ResetBall from "./ResetBall";


export default function AllBroken(bricks, player, canvas, ballObj) {
  let { brickObj, paddleProps } = data;
  //   if (bricks.length === 0) {
  //     return;
  //   }
  let total = 0;
  // check how many brick were collite
  for (let i = 0; i < bricks.length; i++) {
    if (bricks[i].broke === true) {
      total++;
    }
  // if the total of brick borken is equal to the amount of bricks change the level.
  }
  if (total === bricks.length) {
    player.level++;
    ResetBall(ballObj, canvas, paddleProps);
    brickObj.y = 50;
  }
}