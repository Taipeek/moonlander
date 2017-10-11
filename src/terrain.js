export default class Terrain {
    constructor(width, height) {
        var x = 0;
        var y = Math.random() * height / 2 + height / 2 - 10;
        this.path = [];
        var dist = Math.random() * 10;
        while (x < width) {
            var height = y;
            var probability = Math.random();
            if (probability < 0.45) {
                height -= Math.random() * 50;
            }
            else if (probability < 0.90) {
                height += Math.random() * 50;
            }
            this.path.push({x: x + dist, y: height});
            x += dist;
            height = y;
            dist = Math.random() * 10;
        }
        this.render = this.render.bind(this);
    }


    render(ctx) {
        ctx.save();
        ctx.strokeStyle = "white";
        ctx.beginPath();
        ctx.moveTo(this.path[0].x, this.path[0].y);
        this.path.forEach((dot) => {
            ctx.lineTo(dot.x, dot.y);
        });
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }
}