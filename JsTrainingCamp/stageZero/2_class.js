(function () {
    // js 中利用function 来定义类

    // function Shape(){
    //     // 类内部使用 var 定义私有变量
    //     var x = 1;
    //     var y = 2;
    // }

    // // new 关键字 示例化一个类
    // var aShape = new Shape();

    // function ShapeB() {
    //     // 类内部使用 this 定义共有变量
    //     this.x = 1;
    //     this.y = 2;
    // }

    // var bShape = new ShapeB();

    // console.log(aShape.x);

    // console.log(bShape.x);

    // // 除了定义私有变量， 还可以用 var 定义私有函数
    // function ShapeC() {
    //     var draw = function () {
    //         // 私有函数
    //     }

    //     this.draw2 = function () {
    //         // 外界可见的共有函数
    //     }
    // }

    // var cShape = new ShapeC();
    // console.log(cShape.draw);
    // console.log(cShape.draw2);

    // 用js 模仿 OOP编程
    // function ShapeD(ax, ay) {
    //     var x = 0;
    //     var y = 0;

    //     var init = function () {
    //         x = ax;
    //         y = ay;
    //     }

    //     init();

    //     this.getX = function () {
    //         return x;
    //     }
    // }

    // var dShape = new ShapeD(2, 4);
    // console.log(dShape.getX());






    // 模仿OOP 编程的构造函数， 现在来写静态属性和静态方法
    // JS中静态方法是作用到类身上的 而非是对象
    // function Person() {
    //     this.name = "gaga";
    // }
    // // 静态属性方法中可直接使用函数名当作对象名
    // // 静态属性
    // Person.age = 0;
    // // 静态方法
    // Person.showName = function (obj) {
    //     console.log(obj.name);
    // }

    // Person.showName(new Person())


    // // 公有属性和公有方法
    // function User(name, age) {
    //     this.name = name;
    //     this.age = age;

    //     this.getAge = function () {
    //         return this.age;
    //     }
    // }

    // User.prototype.getName = function name() {
    //     return this.name;
    // }

    // var user = new User("gaga", 23);
    // console.log(user.getName());
    // console.log(user.getAge());


    // // 私有属性和私有方法
    // function User(name, age) {
    //     var name = name;
    //     var age = age;

    //     function consoleAge() {
    //         console.log(age);
    //     }

    //     consoleAge();
    // }

    // var user = new User("agaga", 25);


    // // 静态属性和静态方法（无需实例化就可以调用的方法）
    // function User() { }
    // User.age = 26;
    // User.myName = "agag";
    // User.getName = function () {
    //     return this.myName;
    // }

    // console.log(User.getName());
    // console.log(User.myName);


    // // 特权方法
    // function User(name, age) {
    //     var name = name;
    //     var age = age;

    //     this.getName = function () {
    //         return name;
    //     }
    // }

    // var user = new User("gaga", 123);
    // console.log(user.getName());    // 公有方法调用 私有属性



    // 静态类
    // 对于静态属性和静态方法，我们可以使用字面量的方式来创建
    // var user = {
    //     init: function (name, age) {
    //         this.name = name;
    //         this.age = age;
    //     }
    // }











    // // 静态属性方法常驻内存，对象运行后不销毁
    // // 定义一个man 构造器
    // function man() {
    //     man.s ++;
    // }

    // // 添加一个静态属性
    // man.s = 0;

    // // 添加一个静态方法
    // man.f = function () {
    //     console.log(man.s);
    // }

    // var m1 = new man();
    // var m2 = new man();

    // man.f();




    // const Person = function (name, age) {
    //     this.name = name;   //实例属性（公有属性），可以通过 对象.属性 访问的属性叫实例属性
    //     this.age = age;
    // }

    // Person.info = "nice";   //静态属性，挂在在构造函数上的属性

    // // 实例方法，挂在在原型链，生成的对象可直接点方法的方式调用
    // Person.prototype.say = function () {
    //     console.log("实例方法");
    // }

    // // 静态方法
    // Person.show = function () {
    //     console.log("静态方法")
    // }

    // const p1 = new Person('steven', 20);
    // console.log(p1.name);   // 实例属性获取方式
    // p1.say();               // 实例方法调用方式

    // console.log(Person.info + '-----'); // 静态属性调用方法
    // Person.show();                      // 静态方法调用方式


    // -----------------------------------------------------------------------------------------
    /**
     * OPP 编程思想
     * 
     * OPP（Object Oriented Programming）面相对象编程，又称为面向对象程序设计，是一种计算机编程架构
     * 
     * 基本原则： 计算机程序是由单个能够起到 子程序 作用的单元或对象组合而成；
     * 
     * 核心： 封装、继承、多态
     * 
     * 定义：面向对象程序设计是程序结构的一种实现方法， 在这种方法下，程序由互相协作的对象组成，这些对象是某个类的实例，而这些类又是通过继承关系组成的类的分级结构的成员。
     * 
     * 要素：
     *  1、对象 Object： 包含一定的数据结构和状态的实体；
     *  2、操作 Operation：作用于对象的行为，如访问和处理对象的状态；
     *  3、封装 Encapsulation: 定义对象和操作，只提供抽象的接口，并隐藏他们的具体实现；
     *      
     *  4、继承 Inheritance： 通过继承现有类型的性质，创建新的数据类型，而不影响原有的数据类型；
     *  5、多态性 Polymorphism：判定数据类型集合中各类型的区别，使程序可以按照他们的共同特性来书写；
     * 
     * 理解：
     *  对象是由数据和容许的操作组成的封装体，与客观实体有直接对应关系，一个对象类定义了具有相似性质的一组对象；
     *  继承性是对具有层次关系的类的属性和操作进行共享的一种方式；
     *  所谓面向对象就是基于对象概念，以对象为中心，以类和继承为构造机制，来认识、理解、刻画客观世界和设计、构建相应的软件系统；
     * 
     * 基本思想： 把组件的实现和接口分开，并且让组件具有多态性；
     */
    // -----------------------------------------------------------------------------------------


    // // 类模仿Map 对象
    // function jMap() {
    //     var arr = {};   //私有变量
    //     // 增加
    //     this.put = function (key, value) {
    //         arr[key] = value;
    //     }
    //     // 查询
    //     this.get = function (key) {
    //         if (arr[key]) {
    //             return arr[key];
    //         } else {
    //             return null;
    //         }
    //     }
    //     // 删除
    //     this.remove = function (key) {
    //         delete arr[key];
    //     }
    //     // 遍历
    //     this.eachMap = function (fn) {
    //         for (var key in arr) {
    //             fn(key, arr[key])
    //         }
    //     }
    // }

    // var country = new jMap();
    // country.put("01", "ZG");
    // country.put("02", "HG");
    // country.put("03", "JP");

    // console.log(country.get("01"));
    // country.remove("01");
    // console.log(country.get("01")); 

    // country.eachMap(function (key, value) {
    //     console.log(key, value);
    // })




    // 类的原型模式 prototype
    // 原型是一个对象，其他对象可以通过它实现属性的继承
    // 所有的对象在默认的情况下都有一个原型，因为原型的本身也是对象，所以一个类的真正原型是被类的内部的【Prototype】属性所持有
    // 对象： 任何的无序的键值对的集合，如果他不是一个主数据类型(undefined、null、Boolean、number、string) 秋天的统统叫做对象

    // JavaScript 中的原型和函数

    // function person() { }    // 定义一个空对象
    // person.prototype.name = "gagag";
    // person.prototype.showName = function () {
    //     console.log(this.name);
    // }

    // new person().showName();


})();