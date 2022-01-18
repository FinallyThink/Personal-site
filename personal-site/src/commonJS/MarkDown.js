


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

// 转换md的#
function setTitle(string,obj,i){
    let str = string,
        index_s = str.indexOf(" ");
    str = str.substr(index_s).trim();
    return obj.start[0] + index_s + " id=\"title"+ ++i + "\"" + obj.start[1] + str + obj.end[0] +index_s + obj.end[1];
}

function* codeYield(){
    while(1){
        yield "";
        yield "/";
    }
}

var codeYieldValue = codeYield();


//转换md的```
function setCode(string,obj){
    let status = codeYieldValue.next().value;
    return obj.start[0] + status + obj.start[1];
}

//转换img
function setImg(string,obj){
    let str = string.match(/(?<=\().*(?=\))/);
    return obj.start[0] + str + obj.start[1];
}
//段落分段
function subsection(string,obj){
    
    return obj.start[0] + obj.start[1] + string + obj.end[0] + obj.end[1];
}
function reArr(arr){

    function re(arr,leve){
        let leveArr = [],beArr = 0,status = false;
        arr.forEach((ele)=>{
            if(ele.leve === leve){
                leveArr[beArr] = new Array();
                beArr++;
            }
            leveArr[beArr-1].push(ele);
        })
        leveArr.forEach((arr)=>{
           if(arr.some((ele)=>{
               return ele.leve !== 1 + leve;
            })){
                status = true;
            }
        });
        if(status){
            return leveArr.map((ele)=>{
                let first = ele.shift()
                first.children = re(ele,leve + 1);
                return first;
            })
        }else{
        return leveArr;}
    }
    return re(arr,1);
}

class MD{
    constructor(string){
        if(typeOf(string,'string','input must be string')){
            this.string = string;
        }
        this.specialSymbol = [
        {leve:1,regex:/^((#)+\s).*/,Symbol:"#",start:["<h",">"],end:['</h','>'],fun:setTitle},
        {leve:2,regex:/^```/,Symbol:"```",start:["<","code>"],end:['',''],fun:setCode},
        {leve:3,regex:/^(!\[.+\]\().+\)/,symbol:"![Image text]",start:["<img src=\"","\">"],end:["",""],fun:setImg},
        {leve:99,regex:/^(?!<).*/,symbol:"\n",start:["<p",">"],end:["</p",">"],fun:subsection}
    ];  this.titleSpecial = {symbol:'#' ,regex:/^((#)+\s+).*/gm,href:"#title",class:"leve"}
    }
    //重置string
    setString(string){
        if(typeOf(string,'string','input must be string')){
            this.string = string;
            codeYieldValue = codeYield();
        }
    }
    toHTML(){
        var input = this.string
        //将所有换行替换为\n
        input =  input.replace(/(\r\n|\n|\r)/g, "\n");
        //将每行拆分为数组的形式
        this.specialSymbol.forEach(ele => {
            let arr = input.match(new RegExp(ele.regex,'gm')),replace;
            if(arr){
                 replace = arr.map((e,i)=>{
                    return ele.fun(e,ele,i);
                 });
                 replace.forEach((arrEle)=>{
                     input = input.replace(new RegExp(ele.regex,'m'),arrEle);
                 })
            }
        });
        return input;
    }
    getTitle(){
        var input = this.string,titleArr = [],resultArr=[];
        input =  input.replace(/(\r\n|\n|\r)/g, "\n");
        titleArr = input.match(this.titleSpecial.regex);
        titleArr = titleArr.map((ele,i)=>{
            let result =  ele.match(/(?<=(#+))\s.*/);
            return {
               title:result[0].trim(),
               leve:result.index,
               href:this.titleSpecial.href+(i+1),
               class :this.titleSpecial.class+result.index,
               childen:[]
            }
        });
        resultArr = reArr(titleArr)
        return resultArr;
    }

}
export default MD;
