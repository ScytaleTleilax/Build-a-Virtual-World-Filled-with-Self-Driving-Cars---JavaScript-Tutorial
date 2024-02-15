class Point {
      constructor(x, y) {
            this.x = x;
            this.y = y;
      }

      equals(point) {
            return this.x == point.x && this.y == point.y;
      }

      // It's better to pass the arguments to the function in the form of a object 
      // This way it's not necessary to remember order of arguments
      // draw(ctx, size = 3, color = '#baafc3') {
      draw(ctx, {
            size = 10,
            color = 'orange',
            outline = false,
            fill = false
      } = {}) {
            const rad = size / 2;
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(this.x, this.y, rad, 0, Math.PI * 2);
            ctx.fill();
            if (outline) {
                  ctx.beginPath();
                  ctx.lineWidth = 2;
                  ctx.strokeStyle = 'black';
                  ctx.arc(this.x, this.y, rad * 0.6, 0, Math.PI * 2);
                  ctx.stroke();
            }
            if (fill) {
                  ctx.beginPath();
                  ctx.arc(this.x, this.y, rad * 5, 0, Math.PI * 2);
                  ctx.strokeStyle = 'pink';
                  ctx.stroke();
            }
      }
}