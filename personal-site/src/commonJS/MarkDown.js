
//类型验证 目标 类型 警告信息
function typeOf(aim,type,warn){
    //先写个string 暂时只用到这个
    if(type.toLowerCase() === 'string'){
        type = '[object String]'
    }
    try{
        if(Object.prototype.toString.call(aim) === type)
        {
          return true;
        }else{
           throw('typeError')
        }
    } catch(err){
        console.error(err,warn);
    }
}

function setTitle(string){
    return string;
}

class MD{
    constructor(string){
        if(typeOf(string,'string','input must be string')){
            this.string = string;
        }
        this.specialSymbol = [
        {leve:1,regex:/^(#)+.*/gm,Symbol:"#",start:["<h",">"],end:['</h','>'],fun:setTitle}
        ];
    }
    //重置string
    setString(string){
        if(typeOf(string,'string','input must be string')){
            this.string = string;
        }
    }
    toHTML(){
        var input = this.string
        //将所有换行替换为\n
        input =  input.replace(/(\r\n|\n|\r)/g, "\n");
        //将每行拆分为数组的形式
        this.specialSymbol.forEach(ele => {
            let arr = input.match(ele.regex),titleArr;
            titleArr = arr.map((e)=>{
               return ele.fun(e);
            });
            console.log(titleArr);
        });
        return "dd";
    }
}
export default MD;
