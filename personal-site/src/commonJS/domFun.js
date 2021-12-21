//获取元素到顶部的距离
function getEletoTop (ele)  {
    if(ele.offsetParent){
        return getEletoTop(ele.offsetParent) + ele.offsetTop;
    }
    return ele.offsetTop;
}


//将滚动跳沿Y移动到某个位置
function ToScrollTop  (obj,callback){
    let aimEle;
    if(obj&&obj.aimEle){
        aimEle = obj.aimEle;
    }else{ 
        aimEle =  document.documentElement;
    }
    const aim = obj.aim;
    const nowScroll = aimEle.scrollTop;
    const length = aim - nowScroll;
    if(length === 0) return;
    const step = 50;
    //单位完成时间 0.05s  700毫秒完成，时间步长为700 / 50 
    let moveTimes = 200/step;
    const beMove = Math.ceil(length / moveTimes );

    const timer =setInterval(()=>{
        aimEle.scrollTop += beMove;
        moveTimes--;
        if(moveTimes == 0){
            clearInterval(timer);
            if(callback) callback();
        }
    },step)
}

export  {
         getEletoTop,
         ToScrollTop,
         
        };

