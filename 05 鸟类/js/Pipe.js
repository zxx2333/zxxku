
/**
 *
 *
 * @param {*} ctx 画笔对象
 * @param {*} pipe_down 向下的管子对象
 * @param {*} pipe_up 向上的管子对象
 * @param {*} x 上管子的x坐标
 * @param {*} y 上管子的y坐标
 * @param {*} speed 管子运行的速度
 * @param {*} h 两个管子之间的间距
 * @param {*} height 上管子的高度
 */
function Pipe(ctx, pipe_down, pipe_up, x, y, speed, h) {
    this.ctx = ctx;
    this.pipe_down = pipe_down;
    this.pipe_up = pipe_up;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.h = h;
    this.minHeight = 30;
    this.height = this.minHeight + parseInt(Math.random() * (400 - this.h - this.minHeight * 2));
}

// 渲染管子
Pipe.prototype.render = function() {
    // 绘制上管子
    this.ctx.drawImage(this.pipe_down, 0, this.pipe_down.height - this.height, this.pipe_down.width, this.height, this.x, this.y,  this.pipe_down.width, this.height);
    // 绘制下管子
    this.ctx.drawImage(this.pipe_up, 0, 0, this.pipe_up.width, 400 - this.h - this.height, this.x, this.height + this.h, this.pipe_up.width, 400 - this.h - this.height);
    // 移动
    this.x -= this.speed;
}