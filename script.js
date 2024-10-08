document.getElementById('candle').addEventListener('click', function() {
    // 播放生日快乐歌
    const birthdaySong = document.getElementById('birthdaySong');
    birthdaySong.play();

    // 蜡烛熄灭效果
    this.classList.add('extinguished');
});

document.getElementById('cake').addEventListener('click', function() {
    // 播放生日快乐歌
    const birthdaySong = document.getElementById('birthdaySong');
    birthdaySong.play();

    // 生成跳动的猪猪侠
    const pigContainer = document.getElementById('pigContainer');
    pigContainer.classList.remove('hidden');

    // 生成气球
    for (let i = 0; i < 8; i++) {
        const balloon = document.createElement('img');
        balloon.src = 'images/balloon.png'; // 气球的图片路径
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + 'vw'; // 随机位置
        balloon.style.top = Math.random() * 100 + 'vh'; // 随机位置
        document.body.appendChild(balloon);
    }

    // 计算猪猪侠围绕蛋糕的位置
    const cake = document.getElementById('cake');
    const radius = 100; // 猪猪侠围绕蛋糕的半径
    const numberOfPigs = 8; // 猪猪侠数量

    for (let i = 0; i < numberOfPigs; i++) {
        const pig = document.createElement('img');
        pig.src = 'images/pig.png'; // 猪猪侠的图片路径
        pig.className = 'pig';

        // 计算猪猪侠的位置
        const angle = (2 * Math.PI / numberOfPigs) * i; // 平均分布在圆周上
        const left = cake.offsetLeft + cake.offsetWidth / 2 + radius * Math.cos(angle) - 25; // 25为猪猪侠的一半宽度
        const top = cake.offsetTop + cake.offsetHeight / 2 + radius * Math.sin(angle) - 25; // 25为猪猪侠的一半高度

        pig.style.left = left + 'px';
        pig.style.top = top + 'px';
        pigContainer.appendChild(pig);
        
        // 添加交互性：点击猪猪侠时让其跳动
        pig.addEventListener('click', function() {
            this.style.animation = 'jump 0.5s ease-in-out infinite alternate';
            setTimeout(() => {
                this.style.animation = ''; // 取消动画
            }, 1000);
        });
    }

    // 添加交互性：点击气球时让其飞到上面
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
        balloon.addEventListener('click', function() {
            this.style.transition = 'transform 0.5s';
            this.style.transform = 'translateY(-100vh)'; // 气球飞到上面
            setTimeout(() => {
                this.remove(); // 移除气球
            }, 500); // 0.5秒后移除
        });
    });
});