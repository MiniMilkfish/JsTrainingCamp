(function () {
    /**
     * Javascript 语法
     */

    /**
     * 2.1 准备工作
     *  - 普通的文本编辑器
     *  - WEB 浏览器
     * 
     * 程序设计语言分为解释性和编译型两大类
     * 
     * 编译器 compiler
     * 是一种程序，能够把用Java等高级语言编写出来的源代码翻译为直接在计算机上执行的文件
     */

    /**
     * 2.2 语法
     */

    /**
     * 2.2.1 语句 statement
     */

    /**
     * 2.2.2 注释 comment
     * 
     * 有效的帮你了解代码流程，扮演生活中便条的角色
     */

    // 行注释
    // 有注释是好事

    /* 块注释
    有注释是好事 */

    /**
     * 2.2.3 变量 variable
     * 
     * 赋值 assignment 把值存入变量的过程
     */

    // let mode = 'happy', age = 33;
    // alert(mode);
    // alert(age);

    /**
     * 2.2.4 数据类型
     *  - 字符串
     *  - 数值
     *  - 布尔值
     */
    // var height = "about 5'10\" tall";
    // console.log(height)

    /**
     * 2.2.5 数组
     * 用一个变量表示一个值的集合
     * 
     * 传统数组
     * 关联数组
     */

    // console.log(Array(4))
    // console.log(Array())
    // let arr = [];
    // arr[100] = 123;
    // console.log(arr, arr.length)

    // var beatles = Array("John", "Paul", "George", "Ringo");
    // beatles.push(123)
    // beatles.push(arr)
    // console.log(beatles, beatles.length)
    // arr.push(234)
    // console.log(beatles, beatles.length, beatles[5].length)

    // let lenmon = Array();
    // lenmon['name'] = 'John';
    // lenmon['year'] = 1940;
    // console.log(lenmon, lenmon.length, lenmon[0], lenmon['name'])

    /**
     * 2.2.6 对象
     * { propertyName: value, propertyName: value }
     */
    // let lenmon = { name: 'Jone', year: 1940, living: false };
    // console.log(lenmon)

    /**
     * 2.3 操作 operation
     *  - 算数操作符 arithmetic operator
     * 
     * 拼接 concatenation
     */
    // console.log('10' + 20, 10 + 20);

    /**
     * 2.4 条件语句 conditional statement
     * if(condition) { statement; }
     *  - 比较操作符
     *  - 逻辑操作符
     */
    // if(1 > 2) console.log("The world has gone mad!");
    // else console.log("All is Well with the world ~");

    // let a = false, b = "";
    // if(a == b) console.log("a equals b")

    // 逻辑比较 operand

    /**
     * 2.5 循环语句
     *  - while/ do……while 循环
     * while (condition) { statements; }
     * do {
     *  statements;
     * } while (condition);
     * 
     *  - for 循环
     */

    // let count = 1;
    // do {
    //     console.log(count);
    //     count ++;
    // } while(count < 11)

    /**
     * initialize;
     * while(condition) {
     *  statements;
     *  increment;
     * }
     * 
     * for (initial condition; test condition; alter condition) {
     *  statements;
     * }
     */

    // for (let index = 0; index < 11; index++) {
    //     console.log(index);
    // }

    /**
     * 2.6 函数 function（argument）
     * 事实上每个函数实际上是一个短小的脚本
     * 使用传入的不同数据完成预定的操作
     * 
     * function fName(arguments) {
     *  statements;
     * }
     */

    // 华氏温度转换为摄氏温度
    // function convertToCelsius(temp) {
    //     return (temp - 32) / 1.8;
    // }
    // console.log(convertToCelsius(95) + "℃");

    /**
     * 变量的作用域
     * 作用域 scope
     * 
     * 全局变量 global variable
     * 可以在脚本中的任何位置被引用（包括函数内部），作用域是整个脚本
     * 
     * 局部变量 local variable
     * 只存在于声明它的那个函数的内部，在那个函数的外部是午发引用它的，作用域仅限于某个特定的函数
     */
    // function square(num) {
    //     total = num * num;
    //     return total;
    // }

    // var total = 50;
    // var number = square(20);
    // console.log(total)

    /**
     * 2.7 对象 object
     * 对象是自包含的数据集合，包含在对象里的数据可以通过两种形式访问 
     *  属性（property）：隶属于某个特定对象的变量
     *  方法（method）：只有某个特定对象才能调用的函数
     * 
     * 对象就是一些属性和方法组合在一起而构成的一个数据实体
     * 在Javascript里，属性和方法都使用“点” 语法来访问
     * Object.property
     * Object.method()
     * 用户定义对象 user-defined object
     */

    // - 内建对象 native object
    // Jvascript 脚本预先定义好的对象
    // var beatles = new Array()
    // console.log(beatles, beatles.length);

    // var num = 7.561;
    // console.log(num, Math.round(num), parseInt(num));

    // var current_date = new Date()
    // console.log(current_date.getDate())

    // - 宿主对象 host object
    // 非Javascript 语言本身而是运行环境提供的对象
    // 宿主对象包括Form、Image、Element等
})();