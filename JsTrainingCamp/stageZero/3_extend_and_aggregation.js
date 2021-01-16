/**
 * 通过原型链实现继承和聚合
 * 
 * 聚合满足单继承带来的不便
 */
(function () {
    // function Person(name) {
    //     this.name = name;
    // }

    // function Teacher(name, books) {
    //     // call 方法可以将一个函数的对象上下文从初始化变为由 this 来决定
    //     Person.call(this, name);
    //     this.books = books;
    // }

    // Teacher.prototype == new Person();
    // Teacher.prototype.constructor = Teacher;
    // Teacher.prototype.getBook = function () { console.log(this.name + " " + this.books); }

    // var JimT = new Teacher("JIM_Teacher", "《Javascript 语言精粹》");
    // JimT.getBook();

    // /**
    //  * 创建 Extend 函数 模拟继承操作
    //  */

    // function extend(subClass, superClass) {
    //     //  1. 原型类属性等于父类的原型属性
    //     // 初始化一个中间空对象，为了转换主副类关系
    //     var F = function () { };
    //     F.prototype = superClass.prototype;
    //     // 2. 让子类继承F
    //     subClass.prototype = new F();
    //     subClass.prototype.constructor = subClass;
    //     // 3. 为子类增加属性 superClass
    //     subClass.superClass = superClass.prototype;
    //     // 4. 增加一个保险， 就算你的原型类是超类 Object， 那么也要把你的构造函数级别降下来
    //     if (superClass.prototype.constructor == Object.prototype.constructor) {
    //         superClass.prototype.constructor = superClass;
    //     }
    // }

    // // 测试
    // function Author(name, books) {
    //     // Person.call(this, name);    // 继承Person 类
    //     Author.superClass.constructor.call(this, name);
    //     this.books = books;
    //     this.getBook = function () { console.log(this.name + " " + this.books); }
    // }
    // // 继承
    // extend(Author, Person);
    // var perter = new Author("Piter", "JJJ books");
    // perter.getBook();





    // /***
    //  * 掺元类
    //  * 有的时候不需要严格的继承，我们真正需要一个类（几个）类中的一些函数
    //  */
    // // 实例1
    // var JSON = {};
    // JSON.prototype = {
    //     toJSONString: function () {
    //         var output = [];
    //         for (key in this) {
    //             output.push(key + " --》 " + this[key]);
    //         }
    //         return output;
    //     }
    // }
    // // 制作聚合函数
    // function mixin(receivingClass, givingClass) {
    //     for (const methodName in givingClass.prototype) {
    //         // 本类中没有这个函数的情况下聚合, 否则跳过
    //         if (!receivingClass.prototype[methodName]) {
    //             receivingClass.prototype[methodName] = givingClass.prototype[methodName];
    //         }
    //     }
    // }

    // var o = function () {
    //     this.name = "o";
    //     this.age = 23;
    // }
    // mixin(o, JSON);
    // var a = new o();
    // console.log(a.toJSONString())

    // 实例2
    var JSON = {
        toJSONString: function () {
            var output = [];
            for (key in this) {
                output.push(key + " --》 " + this[key]);
            }
            return output;
        }
    };

    // 制作聚合函数
    function mixin(receivingClass, givingClass) {
        for (const methodName in givingClass) {
            // 本类中没有这个函数的情况下聚合, 否则跳过
            if (!receivingClass.__proto__[methodName]) {
                receivingClass.__proto__[methodName] = givingClass[methodName];
            }
        }
    }

    var o = { "name": "Jim", "age": 123 };
    mixin(o, JSON);
    console.log(o.toJSONString())


})()