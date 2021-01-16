/**
 * 闭包
 * 
 * 信息的隐藏是最终的目的，封装只不过是隐藏的一种方法
 * 好处：
 *   1、保护内部的数据完整性时封装的一大作用
 *   2、对象的重构变得很轻松（如果没有封装，你敢动正在使用的代码嘛?）
 *   3、弱化模块之间的耦合
 * 
 * 弊端：
 *      1、 私有的方法他会变得很难进行单元测试
 *      2、 使用封装就意味着与复杂的代码打交道
 *      3、 最大的问题是封装在 JS 中很难实现的
 * 
*/
(function () {
    /**
     * 定义类的方式
     * 1、门户大开类型
     * 2、用命名规范区别私有和公有的方式；
     * 3、闭包
     * */

    // //  1、门户大开类型
    // function Person(age, name) {
    //     this.name = name;
    //     if (!this.checkAge(age)) {
    //         throw new Error("年龄必须在 0 -150 之间");
    //     }
    //     this.age = age;
    // }
    // // var p = new Person("JIM", -10);
    // // console.log(p.age);
    // // 解决上面年龄负数的问题
    // Person.prototype = {
    //     checkAge: function (age) {
    //         return age > 0 && age < 150;
    //     },
    //     getName: function () {
    //         return this.name || "JJJJJ";
    //     }
    // }
    // var p = new Person(27, "JIM");
    // var p2 = new Person(27);
    // console.log(p.age);
    // console.log(p2.getName());





    // /**
    //  * 2、用命名规范区别私有和公有的方式；
    //  */
    // function Person(name, age, email) {
    //     // 定义私有变量
    //     this._name;
    //     this._age;

    //     this.setName(name);
    //     this.setAge(age);

    //     // 定义公有变量
    //     this.email = email;
    // }
    // Person.prototype = {
    //     setName: function (name) {
    //         this._name = name;
    //     },
    //     setAge: function (age) {
    //         if (age > 0 && age < 150) {
    //             this._age = age;
    //         } else {
    //             throw new Error("年龄必须在 0 -150 之间");
    //         }
    //     }
    // }

    // var p = new Person("JIM", -1, "123@123.com");





    // /**
    //  * 闭包实现封装
    //  */
    // function Person(name, age, email, sex) {
    //     this.email = email;  // 共有变量

    //     // get
    //     this.getName = function () { return this.name }
    //     this.getAge = function () { return this.age }

    //     // set
    //     this.setName = function (name) { this.name = name; }
    //     this.setAge = function (age) {
    //         if (age > 0 && age < 150) {
    //             this.age = age;
    //         } else {
    //             throw new Error("年龄必须在 0 -150 之间");
    //         }
    //     }

    //     var _sex = "M"; // 私有变量的编写方式
    //     this.getSex = function () { return _sex }
    //     this.setSex = function () { _sex = sex }

    //     this.init = function () {
    //         this.setName(name);
    //         this.setAge(age);
    //     }
    //     this.init();
    // }
    // // 测试
    // var p = new Person("JIM", -1, "123@123.com");





    /**
     * 普通的属性和函数是作用在对象上的
     * 而静态的函数时定义到类上的
     */
    function Person(name, age) {
        this.name = name;
        this.showName = function () {
            console.log(this.name)
        }
    }

    var p = new Person("JIM", 123);
    p.showName();

    // 第一种静态函数的写法
    Person.add = function (x, y) { return x + y }
    console.log(Person.add(10, 20));

    // 第二种方式
    // 用 类中类 的方式完成每一个对象全拥有相同的属性和函数
    var cat = (function () {
        // 定义私有静态属性
        var AGE = 10;

        // 私有函数
        function add(x, y) {
            return x + y;
        }

        return function () {
            this.AGE = AGE;
            this.add = function (x, y) {
                return add(x, y);
            };
            this.setAge = function (age) {
                AGE = age;
            }
        }
    })();

    new cat().setAge(123);
    console.log(new cat().add(1, 2) + "  " + new cat().AGE)
    console.log(new cat().AGE)
    console.log(new cat().AGE)






})();