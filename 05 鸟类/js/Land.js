/**
 *
 *
 * @param {*} ctx 画笔对象
 * @param {*} img 图片对象
 * @param {*} x 绘制在canvas的起始点的x坐标
 * @param {*} y 绘制在canvas的起始点的y坐标
 * @param {*} speed 背景的运动速度
 */
function Land(ctx, img, x, y, speed) {
    this.ctx = ctx;
    this.img = img;
    this.x = x;
    this.y = y;
    this.speed = speed;
}

// 渲染陆地
Land.prototype.render = function() {
    if (this.x <= -this.img.width) {
        this.x = 0;
    }
    // 将图片绘制到canvas上: 3张图
    this.ctx.drawImage(this.img, this.x, this.y);
    this.ctx.drawImage(this.img, this.x + this.img.width, this.y);
    this.ctx.drawImage(this.img, this.x + this.img.width * 2, this.y);
    // 移动
    this.x -= this.speed;
}