/**
 *
 *
 * @param {*} ctx 画笔对象
 * @param {*} imgs 小鸟图像对象的集合（3张图片）
 * @param {*} x 小鸟的x坐标
 * @param {*} y 小鸟的y坐标
 */
function Bird(ctx, imgs, x, y) {
    this.ctx = ctx;
    this.imgs = imgs;
    this.x = x;
    this.y = y;
    this.idx = parseInt(Math.random() * imgs.length);
    // 小鸟运动的速度
    this.speed = 1;
    // 小鸟运动的方向
    this.direction = 'D';
}

// 渲染
Bird.prototype.render = function() {
    // 保持状态
    this.ctx.save();
    // 鸟在水平方向上不移动，垂直方向上是变化的，鸟涉及到旋转，鸟的旋转，不影响其他元素
    // 平移坐标系
    this.ctx.translate(this.x, this.y);
    // 小鸟的运动
    if (this.direction == 'D') {
        // 向下的自由落体
        this.y += Math.sqrt(this.speed);
        // console.log(this.y);
        // 角度的旋转
        this.ctx.rotate(this.speed * Math.PI / 180);
        // 下降的速度越来越快
        this.speed++;
    } else if (this.direction == 'U') {
        // 向上运动，当速度为0的时候，向下运动
        this.y -= Math.sqrt(this.speed);
        // console.log(this.y);
        // 角度的旋转
        this.ctx.rotate(-this.speed * Math.PI / 180);
        // 上升的速度越来越慢
        this.speed--;
        // 判断速度
        if (this.speed <= 0) {
            // 改变运动的方向
            this.direction = 'D';
        }

    }
    // 绘制鸟
    this.ctx.drawImage(imgs[this.idx], -imgs[this.idx].width/2, -imgs[this.idx].height/2);
    // 更改信号量,判断边界
    this.idx = ++this.idx > this.imgs.length - 1 ? 0: this.idx;
    
    
    // 恢复状态
    this.ctx.restore();
    
}

// 鼠标点击了
Bird.prototype.change = function() {
    // 改变小鸟的运动状态： 方向， 速度（一下子上去的）
    this.direction = 'U';
    // 速度
    this.speed = 15;
}