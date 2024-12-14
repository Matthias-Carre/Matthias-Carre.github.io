export default class Level {
  constructor(obstacles, boost) {
    this.obstacles = obstacles;
    this.boost = boost;
  }

  draw(ctx) {
    this.obstacles.forEach(obstacle => {
      obstacle.draw(ctx);
    });
    this.boost.forEach(boost => {
      boost.draw(ctx);
    });
  }
}