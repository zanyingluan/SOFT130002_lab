//1. 获取url中名为name的参数。在URL输入框输入url，点击同行submit按钮后，其中的参数名为name的参数值需要出现在Argument value输入框内。
//如果没有名为name的参数，那么可以在Argument value输入框出现任何值。
//请仅在showWindowHref函数内写代码。

//提示：url指代 （若干字符串）?（参数名1）=（参数1值）&（参数2）=（参数2值）...  这样的字符串。具体可以上网查找。例如：hjsdghgbj?name=666666&group=876。
//url、url_submit、url_result指代对应id的三个对象，其中url和url_result可以通过url.value或者url_result.value获得值。
//字符数组处理可以使用相关函数
let url = document.getElementById("url");
let url_submit = document.getElementById("url_submit");
let url_result = document.getElementById("url-result");
url_submit.addEventListener('click',showWindowHref);

function showWindowHref(){
    var str = url.value; //取这段url的文字,命名为str
    var str1 = str.substring(str.indexOf("name="),str.indexOf("&"));//截取str中“name=”到“&之间的部分”，把这部分命名为str1
    var str2 = str1.substring(str1.indexOf("=") + 1)//截取str1中下标为=号+1的剩余部分，这部分即为name的参数
    url_result.value = str2;
}

//2. 每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
//注意：你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
//与设置时间相关的函数可以上网查找。

//提示：mul为html中id为"mul"的元素对象，可直接通过mul.value获得其内的输入值。
let mul = document.getElementById("mul");
let interval = setInterval(timeTest,5000);
let start = new Date();//起始时间
let start_minute = start.getMinutes();
let count = 0;
if(mul.value === "")
    mul.value = 1;
function timeTest() {
   let current = new Date(); //当前时间
    if(current.getMinutes() !== start_minute || count >=10)//设置停止条件
    {
        clearInterval(interval);//停止
        return;
    }
    mul.value *= 2;
    count++;
}

//3. 判断输入框most里出现最多的字符，并统计出来。统计出是信息在most_result输入框内以"The most character is:" + index + " times:" + max的形式显示。
//如果多个出现数量一样则选择一个即可。
//请仅在arrSameStr函数内写代码。

//提示：most、result、most_submit的解释及其.value与上面类似。
let most = document.getElementById("most");
let result = document.getElementById("most-result");
let most_submit = document.getElementById("most_submit");
most_submit.addEventListener('click',arrSameStr);
function arrSameStr() {
    var str = most.value;
    var json = {};
    for(let i = 0; i < str.length; i++){
        //遍历json
        if(!json[str.charAt(i)]){
            json[str.charAt(i)] = 1;
        }else{
            json[str.charAt(i)]++;
        }
    };
    var max = 0;
    var Index = '';//初始化Index与max
    for(var j in json){
        if(json[j] > max){
            max = json[j];
            Index = j;//寻找json中出现最多的字符，即为Index，其值为max
        }
    }
    result.value = "The most character is " + Index + " Times:" + max;
}
