/**
 * 基础部分
 */
(function Init(_params) {
    /**
     * 1、变量
     * 存储信息的容器
     * 规则
     *  a、敏感大小写
     *  b、变量名 字母、下划线开头
     * */

    /**
     * 2、数据类型和类型转换
     *  1) 基本数据类型 Number String Boolean Undefined Null Symbol
     *  2) 引用数据类型（复合类型） Object Function Date Array RegExp
     */

    //  数字
    // var num1 = 3.1415926;
    // var str1 = Number.toString(num1);
    // console.log(typeof str1 === "string");  //true

    // var num2 = num1.toFixed(2);
    // console.log(num2);

    // var num3 = num1.toPrecision(4);
    // console.log(num3);

    // var num4 = Math.round(4.7);
    // console.log(num4);

    // var num5 = Math.random();
    // console.log(num5);

    // var num6 = Math.floor(Math.random() * 11);
    // console.log(num6);

    // 字符串
    // 转义
    // 属性 length indexof substring charAt(Number)
    // var str2 = "USP.com";
    // var str3 = "3.14";
    // var number = Number(str3);
    // console.log(typeof number);
    // console.log(str2 - 0);  //NaN 非数值
    // console.log(str3 - 1);  //减法: 转换
    // console.log(str3 + 1);  //加法:拼接

    // 布尔类型 boolean
    // true | false
    // var s = ""; //
    // var o = {};
    // var l = [];
    // var n = null;   //
    // var f = false;   //
    // var u = undefined;  //
    // console.log(!s, !o, !l, !n, !f, !u);;

    // 2) 复合类型
    //  a\数组 
    //      有序集合array: 下标 从0开始
    //  b\函数对象 函数 function

    // 数组
    //  属性
    //      constructor 返回对创建此对象的数组的函数引用
    //      index input length
    //  方法
    //      concat 合并
    //      join 按固定格式变更为字符串
    //      push 追加
    //      pop 删除并返回最后一个元素
    //      sort toString shift

    // var arr = new Array();
    // arr.push(1);
    // arr.push(2);
    // arr.push(3);
    // arr.push(44);
    // arr.push(55);
    // arr.push(66);
    // console.log(arr.length);

    // var arr2 = [1, 2, 3, 4, 123, 44];
    // console.log(typeof arr2.join(':'));
    // console.log(arr.concat(arr2).toString());

    // for (let index = 0; index < arr.length; index++) {
    //     const element = arr[index];
    //     console.log(index, element);
    // }

    // // 原型扩展
    // Array.each = function(array, fn) {
    //     for (let index = 0; index < array.length; index++) {
    //         const element = array[index];
    //         fn(element, index);
    //     }
    // }


    // console.log("Array.each: ");
    // Array.each(arr2, function (item, index) {
    //     console.log(index, item);
    // })

    /**
     * 特殊值
     *  null 不是有效的对象\数组\字符串 有容器,但是值为空
     *  undefined 未定义,没有盒子
     */

    /**
     * 内置特殊对象
     * Data 对象
     * Error 错误对象
     * ReExp 对象
     * */



    // 运算符和表达式
    // var i= 10;
    // var j = 10;
    // console.log(i++);   //10
    // console.log(i);     //11
    // console.log(++j);   //11

    // 流程控制语句
    // 分支 if …… else if …… else
    // 三目运算 条件？成立：失败
    // switch(表达式或变量) case break default
    // var d = new Date();
    // var time = d.getHours();
    // if(time >= 18){
    //     console.log("晚上好");
    // }else {
    //     console.log(time);
    // }

    // 循环
    // for (变量赋值；条件判断； 变量赋值){}
    // while (条件判断)
    // for (变量 in 对象)


    // 其他常用语法
    // 异常捕获 try……catch
    // 定时器 setTimeout setInterval clearTimeout clearInterval

    // try {
    //     console.log(1, 2 / 0);
    // } catch (error) {
    //     console.log(2, error)
    // }


    // 函数
    // function 函数名（参数）{//return}    //函数
    // var fn = function(){}                //函数声明

    // add(1, 1);
    // function add(x, y) {
    //     console.log(x, y);
    // }
    // add(1, 2);

    // // add2(1, 1);
    // var add2 = function (x, y) {
    //     console.log(x, y);
    // }
    // add2(1, 2);

    // 回调函数
    // function add(x, y, fn) {
    //     this.x = x || 1;
    //     this.y = y || 1;

    //     if (fn) fn(this.x + this.y);
    // }
    // add(1, 2, function (v) {
    //     if (v > 0) console.log(v);
    // })

    // 函数传参
    // 参数传递的随意性: 缺少精确复写的特性
    // 技巧： 工具类函数传参 最好时对象
    // function add2(x, y, z) {
    //     this.x = x || 0;
    //     this.y = y || 0;
    //     this.z = z || 0;

    //     console.log(this.x + this.y + this.z);
    // }

    // add2(12, 3, 5);
    // add2(12, 3);

    // 传值 、传址
    // var i = 100;
    // var s = "one";

    // function add(i, s) {
    //     ++i;
    //     s += "--";
    // }

    // // 基础变量是传递数值的
    // console.log(i);
    // console.log(s);
    // add(i, s);          //中间调用
    // console.log(i);
    // console.log(s);

    // // 自定义的对象的传参是传址
    // var o = {name: "123"};
    // function change(o) {
    //     o["name"] = "234";
    // }
    // console.log(o);
    // change(o);          //中间调用
    // console.log(o);


    // 函数递归
    // 1-100 递归累加

    // /**
    //  * 累加
    //  * @param {number} max - 最大值
    //  * @param {number} num - 最小值
    //  * @param {number} count - 累加值
    //  */
    // function iteratorCount(max, min, count) {
    //     min = min || 0;
    //     count = count || 0;

    //     count += min;

    //     return min == max ? count : iteratorCount(max, ++min, count);
    // }

    // console.log(iteratorCount(100));

    // function add(start, end) {
    //     var num = 0;
    //     num += start;

    //     if (start < end) num += add(++start, end);

    //     return num;
    // }

    // console.log(add(1, 100));

    // 代理函数： 用程序来决定返回的新函数（函数工厂）
    // var person = {jim: "m", lili: "w"};

    // var test = function check(name) {
    //     if(person[name] === "m"){
    //         return function(nk, wk) {
    //             console.log(nk + " " + wk);
    //         }
    //     }else if(person[name] === "w"){
    //         return function (nk, wk, fk) {
    //             console.log(nk + " " + wk + " " + fk);
    //         }
    //     }
    // }

    // test("jim")("ok", "ok");
    // test("lili")("ok", "ok", "no");

    // eval 字符串解析成方法并调用
    // var str = "var show = function(){console.log(100)}()";
    // eval(str);


    /**
     * 对象（散列、散列表、字典、关联数组）
     * 
     * 基本数据类型
     *  是一种复合值：将很多值（原始值或其他对象）聚合在一起，可通过名字访问这些值。
     *  属性的无序集合，每个属性都是一个键/值对
     * 属性名是字符串，因此我们可以把对象堪称是从字符串到值的映射；
     * 除了保持自有的属性，JS对象还可以从一个称为原型的对象继承属性；
     */

    //  创建对象

    // 1、对象直接量
    var empty = {}; // 空对象
    var point = {x: 1, y: 213}; //两个属性的对象

    // 2、通过new 创建对象
    // new 运算符创建并初始化一个新的对象。
    // 关键字new 后跟随一个函数调用
    // 这里的函数称为构造函数 constructor，构造函数用于初始化一个新创建的对象

    var o = new Object();
    var a = new Array();

    // 3、原型
    // 每一个JS 对象（null 除外）都和另一个对象（原型）相关联， 每一个对象都是从原型继承属性；
    // 所有通过原型直接量创建的对象都具有同一个原型对象，并可以通过JS 代码 Object.prototype 获得对原型对象的引用



})();