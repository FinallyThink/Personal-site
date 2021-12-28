//canvas 粒子特效

class canvasEffect{
    constructor(effDom){
        this.Dom = effDom;
        this.Dom.width = this.Dom.offsetParent.clientWidth;
        this.Dom.height = this.Dom.offsetParent.clientHeight;
        this.heart_x = this.Dom.width/2;
        this.heart_y = this.Dom.height/2;
        this.lightArr = [];

    }
    main(){
        if(this.Dom.getContext){
            const ctx = this.Dom.getContext('2d');

            ctx.strokeStyle = "#FFF";
            ctx.fillStyle =  "#FFF";
            ctx.lineWidth = 1;
            this.initArr();
            setInterval(() => {
                this.draw(ctx); 
            }, 10);

        } else{
            console.log("不支持canvas");
        }
    }

    initArr(){
        const boom = 100;
        for(let i = boom;i > 0;i--){
            this.lightArr.push({
                x:this.heart_x,
                y:this.heart_y,
                times:0,
                r:2,
                cos:Math.PI/(boom/2) * i
            });
        }

    }

    draw(ctx){

        ctx.clearRect(0,0,this.Dom.width,this.Dom.height);
        this.lightArr.forEach(( ele ,i ,Arr)=>{
        ctx.beginPath();
        ctx.arc(Math.floor(ele.x),Math.floor(ele.y),ele.r,0,2*Math.PI,false);
        ctx.fill();
        ctx.stroke();
        Arr[i].x +=Math.cos(ele.cos);
        Arr[i].y +=Math.sin(ele.cos);
        Arr[i].times++;
        if(ele.x>this.Dom.width || ele.x<0 ){
            Arr[i].cos = Math.PI - Arr[i].cos; 
        }
        if(ele.y>this.Dom.height || ele.y<0 ){
            Arr[i].cos = 2*Math.PI - Arr[i].cos; 
        }
        // if(ele.x>this.Dom.width || ele.x<0 || ele.y <0 ||ele.y>this.Dom.height){
        //     Arr[i]={
        //         x:this.heart_x,
        //         y:this.heart_y,
        //         times:0,
        //         r:2,
        //         cos:ele.cos
        //     }
        // }
        })

    }

}

module.exports = canvasEffect;