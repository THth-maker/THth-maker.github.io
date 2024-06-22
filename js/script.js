// 定义一个变量存储当前轮播的方向，true表示正向，false表示反向
let _direction = true;

// 定义轮播移动函数
let _move = () => {
    // 获取所有的轮播项
    let lists = document.querySelectorAll('.item');

    // 根据当前方向进行轮播项的移动
    if (_direction) {
        // 如果是正向，将第一个轮播项移动到列表的最后
        document.querySelector('#slide').appendChild(lists[0]);
    } else {
        // 如果是反向，将最后一个轮播项移动到列表的最前面
        document.querySelector('#slide').prepend(lists[lists.length - 1]);
    }
}

// 设置定时器，每隔2500毫秒调用一次_move函数，实现轮播
let timer = setInterval(_move, 2500);

// 监听鼠标悬停事件，当鼠标悬停在轮播图上时，清除定时器，暂停轮播
document.querySelector('#content').addEventListener('mouseover', () => {
    clearInterval(timer);
});

// 监听鼠标离开事件，当鼠标离开轮播图时，重新设置定时器，恢复轮播
document.querySelector('#content').addEventListener('mouseout', () => {
    timer = setInterval(_move, 2500);
});

// 给正向切换按钮添加点击事件监听器，点击时设置方向为正向并触发移动
document.querySelectorAll('.s_button')[1].onclick = () => {
    _direction = true;
    _move();
}

// 给反向切换按钮添加点击事件监听器，点击时设置方向为反向并触发移动
document.querySelectorAll('.s_button')[0].onclick = () => {
    _direction = false;
    _move();
}