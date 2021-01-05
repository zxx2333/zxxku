/**
 *
 *
 * @param {*} ctx 画笔对象
 * @param {*} bird 小鸟对象
 * @param {*} land 陆地对象
 * @param {*} bg 背景对象
 * @param {*} pipe 管子对象
 */
function Game(ctx, bird, land, bg, pipe, canvas) {
    this.ctx = ctx;
    this.bird = bird;
    this.land = land;
    this.bg = bg;
    // 由于管子是多个，所以使用数组存储
    this.pipe = [pipe];
    this.canvas = canvas;
    this.timer = null;
}


Game.prototype.init = function() {
    // 备份this
    var me = this;
    // 周期执行
    this.timer = setInterval(function() {
        // 清屏
        me.ctx.clearRect(0, 0, 1000, 1000);
        // 检测
        if (me.check()) {
            // console.log('撞管子了');
            me.gameover();
            // 阻止后续代码执行
            return;
        }
        // 渲染背景
        me.bg.render(); 
        // 渲染陆地
        me.land.render();
        // console.log(me.ctx.globalCompositeOperation);
        // // 渲染管子
        me.renderPipe();
        // // 渲染鸟
        me.bird.render();
    }, 40)

    // 给canvas绑定一个鼠标按下事件
    canvas.onmousedown = function() {
        // console.log(1111);
        // 改变小鸟的运动状态
        me.bird.change();
    }

}

// 渲染管子
Game.prototype.renderPipe = function() {
    // 渲染管子
    this.pipe.forEach(function(pipe, index, arr) {
        // 屏幕最多出现两根管子
        pipe.render();
        // 判断第一根管子，是否运动到了指定的值, 添加管子
        if (index == 0 && pipe.x <= 60 && arr.length == 1) {
            arr.push(new Pipe(ctx,imgs[6], imgs[5], canvas.width, 0, 2, 150));
        }
        // 移除第一根管子
        if (index == 0 && pipe.x <= -pipe.pipe_down.width) {
            arr.shift();
        }
    })

}

// 游戏结束的检测
Game.prototype.check = function() {
    // 判断小鸟的y坐标
    if (this.bird.y <= 0 || this.bird.y >= 400) {
        return true;
    }
    // 保存状态
    this.ctx.save();
    // 管子
    this.renderPipe();
    // 设置融合方式
    this.ctx.globalCompositeOperation = 'source-in';
    // 绘制小鸟----小鸟的检测一定是在设置融合方式的后面，为什么要这样做？
    this.bird.render();
     // 恢复状态
     this.ctx.restore();
     // 检测
    // 获得像素值
    var imgData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
    // 遍历像素
    // console.log(imgData.data[0]);
    return imgData.data.some(function(value) {
        return value != 0;
    })
}

// 游戏结束
Game.prototype.gameover = function() {
    // 游戏结束的操作
    // 清除定时器
    clearInterval(this.timer);
    // 将游戏结束的图片绘制
    var img = new Image();
    // js中图片的路径需要相对于html文件书写
    img.src = './images/gameover.jpg';
    // 备份this
    var me = this;
    img.onload = function() {
        // console.log(img);
        me.ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
    }

}
