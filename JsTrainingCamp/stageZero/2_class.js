(function () {
    /**
     * 解答以下问题：（答案在末尾）
     *  1 什么是原型和原型链，原型链的顶端是什么？
     *  2 原型链和作用域链有何区别？
     *  3 构造函数与普通函数的区别？
     *  4 能否判断当前函数是普通调用或new 构造调用？
     *  5 prototype 与 __proto__ 是什么？
     *  6 怎么判断对象是否包含某条属性？
     *  7 怎么判断某条属性是否为对象自身属性而非原型属性？
     *  8 constructor 与 instanceof 有何区别？
     *  9 能不能手动实现 new 方法？
     *  10 能够创建严格意义上的空对象？
     */

    /**
     * 原型链
     * 
     * 1、理解
     *  每个对象都可以有一个原型 __proto__, 这个原型还可以有他自己的原型, 以此类推形成一个原型链；
     *  查找特定属性的时候，我们先去这个对象里去找，如果没有的话就去他的原型对象里面去，如果还没有的话再去原型对象的原型对象里去找……这个操作被委托在整个原型链上；
     *  
     * 
     * 2、原型指针
     *  prototype
     *      函数所独有的， 它是从一个函数指向一个对象。
     *      它的含义是函数的原型对象，也就是这个函数（其实所有函数都可以作为构造函数）所创建的实例的原型对象；
     *      这个属性是一个指针，指向一个对象，这个对象的用途就是包含所有实例共享的属性和方法（我们把这个对象叫做原型对象）
     * 
     *  __proto__
     *      对象所独有的，是指向构造函数的原型对象；
     *      原型链查询中实际用到的，它总是指向 prototype， 换句话就是指向构造函数的原型对象；
     * 
     * 3、构造器指针
     *  construtor
     * 
     * 总结： 
     *  实例对象的 __proto__ 指向构造函数的原型  prototype
     *  构造函数原型对象下面的  constructor 指向创建自己的构造函数
     */

    // function Foo(y) {
    //     this.y = y;

    //     var x = 10;
    //     var calculate = function () { }
    // }

    // var b = new Foo(20);
    // console.log(b.y);

    // var c = new Foo(30);
    // console.log(c.y);

    // console.log(b.__proto__, c.__proto__);          // Foo {}
    // console.log(b.prototype, c.prototype);          // undefined, b、c 是实例对象，不是函数
    // console.log(b.constructor, c.constructor);      // [Function: Foo]

    // console.log(Foo.prototype);                     // Foo {}
    // console.log(Foo.prototype.constructor);         // [Function: Foo]
    // console.log(Foo.constructor);                   // [Function: Function]




    /**
     * instanceof 运算符 用于监测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
     * 
     * 语法：
     *  Object(某个实例对象) instanceof constructor（某个构造函数）
     * 描述：
     *  instanceof 运算符用来监测 constructor.prototype 
     */

    // demo1
    // function Car(make, model, year) {
    //     this.make = make;
    //     this.model = model;
    //     this.year = year;
    // }
    // const auto = new Car("Honda", "Accord", 1998);
    // console.log(auto instanceof Car);
    // console.log(auto instanceof Object);

    // demo2
    // function C() { }
    // function D() { }

    // var o = new C();

    // console.log(o instanceof C);    // true Object.getPrototypeOf(o) === C.prototype

    // console.log(Object.getPrototypeOf(o));
    // console.log(C.prototype);
    // console.log(Object.getPrototypeOf(o) === C.prototype);

    // console.log(o instanceof D);    // false D.prototype 不在 o 的原型链上

    // console.log(o instanceof Object);   // true
    // console.log(Object.prototype.isPrototypeOf(o))





    /**
     * 构造函数
     * 
     * 与Java 基于类不同， Javascript 是一门基于原型 prototype 的脚本语言，至少在ES6 之前 Javascript 并无类的概念，但却有类的模拟实现，也就是我们常说的构造函数；
     * 构造函数其实就是一个普通函数，只是为了区分普通函数，通常建议构造函数的 name 首字母大写；
     * 
     * ES5 构造函数没有区别于普通函数；
     * ES6 class (类) 仅支持new 调用，普通调用会报错： Class constructor [Function_name] cannot be invoked without "new"；
     * 
     * 每一个函数都属于原始构造函数 Function 的实例，而每一个函数又能作为构造函数生产属于自己的实例；
     */
    // //ES5
    // function Parent() { console.log("我想变秃头")}   // 这是一个构造函数

    // // 这也是一个构造函数
    // function parent() {
    //     this.name = "不秃头";
    // }
    // let child = new parent();
    // console.log(child.name);    // parent {name: "不秃头"}

    // Parent();       // 构造函数也能普通调用

    // class P {
    //     sayName(){
    //         console.log("秃驴")
    //     }
    // }

    // // ES6
    // var c = new P();
    // c.sayName();    // 秃驴
    // // P(); //TypeError: Class constructor P cannot be invoked without 'new'

    // // es5 demo1
    // function CupCustom(diameter, height){
    //     this.diameter = diameter;
    //     this.height = height;
    // }

    // CupCustom.prototype.color = "blue";
    // var cup1 = new CupCustom(8, 15);
    // var cup2 = new CupCustom(5, 10);

    // console.log(cup1.height, cup2.height, cup2.color);
    // console.dir(CupCustom);

    // // es6 demo
    // class CupCustom{
    //     constructor(diameter, height){
    //         this.diameter = diameter;
    //         this.height = height;
    //     }
    // }

    // CupCustom.prototype.color = 'red';

    // var cup1 = new CupCustom(10, 15);
    // var cup2 = new CupCustom(5, 12);

    // console.log(cup1.height, cup2.height, cup2.color);
    // console.dir(CupCustom);





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




    /**
     * String Number Boolean 属于包装对象，包装对象是一种声明周期只有一瞬的对象，创建与销毁都由底层实现；
    */
    // var foo = "bar";
    // var foo1 = undefined;

    // // 创建String实例，将实例赋予变量 string
    // let string = new String("bar");
    // // 在实例上调用指定的方法
    // foo1 = string.valueOf();
    // // 销毁这个实例
    // string = null;

    // console.log(foo, foo1);





    /**
     *  在不修改构造函数 prototype 前提下，所有实例 __proto__ 属性中的 constructor 属性都指向创建自己的构造函数；
     */
    // // 模拟代码，并不能真正执行
    // // 原始构造函数
    // function Function() { };
    // Function.prototype = {
    //     call: function () { },
    //     apply: function () { },
    //     bind: function () { },
    // };

    // //由原始构造函数得到实例构造函数CupCustom
    // var CupCustom = new Function();
    // CupCustom.prototype = {
    //     color: 'blue'
    // };
    // // 由构造函数CupCustom最终得到实例
    // var cup1 = new CupCustom();
    /**
     * 结论
     *  原始构造函数 Function() 扮演着创世主女娲的角色， 她创造了 Object()、Number()、String()、Date()、function fn(){} 等 第一批人类（也就是构造函数），而人类具备了繁衍的能力（使用new 操作符）
     *  于是 Number() 繁衍出了数据类型数据， String() 诞生了字符串， function fn(){} 作为构造函数也诞生了各式各样的对象后代
     */
    // // 所有函数对象的__proto__都指向Function.prototype，包括Function本身
    // Number.__proto__ === Function.prototype //true
    // Number.constructor === Function //true

    // String.__proto__ === Function.prototype //true
    // String.constructor === Function //true

    // Object.__proto__ === Function.prototype //true
    // Object.constructor === Function //true

    // Array.__proto__ === Function.prototype //true
    // Array.constructor === Function //true

    // Function.__proto__ === Function.prototype //true
    // Function.constructor === Function //true
    /**
     * 在不修改构造函数原型的前提下，实例的 __proto__ 与构造函数的 prototype 是对等关系
     */
    // function Parent(){}
    // var son = new Parent();
    // son.__proto__ === Parent.prototype




    /**
     * new 一个构造函数，得到的实例继承了构造器的构造属性以及原型上的属性
     * 
     * new 一个构造器的原理：
     *      1、以构造器的prototype 属性为原型， 创建新对象；
     *      2、将 this 和调用参数传给构造器，执行；
     *      3、如果构造器没有手动返回对象，则返回第一步创建的新对象，如果有，则舍弃掉第一步创建的新对象，返回手动return 的对象；
     */
    // // ES5 构造函数
    // let Parent = function (name, age){
    //     // 1 创建一个空对象，赋予 this， 这一步是隐性的
    //     let _this = {};
    //     // 2 给 this 指向的对象赋予构造属性
    //     _this.name = name;
    //     _this.age = age;
    //     // 3 如果没有手动返回对象，则默认返回 this 指向的这个对象，也是隐性的
    //     return _this;
    // }
    // const child = new Parent("zhazha", 26);
    // console.log(child.name)

    // /**
    //  * 实现一个简单的new 方法
    //  * */
    // // 构造器函数
    // let Parent = function (name, age) {
    //     this.name = name;
    //     this.age = age;
    // };
    // Parent.prototype.sayName = function () {
    //     console.log(this.name);
    // };
    // // 自定义的new 方法
    // let newMethod = function (Parent, ...rest) {
    //     // 1 以构造器的 prototype 属性为原型 创建新对象
    //     let child = Object.create(Parent.prototype);
    //     // 2 将this 和调用参数传给构造器执行
    //     let result = Parent.apply(child, rest);
    //     // 3 如果构造器没有手动返回对象，则返回第一步的对象
    //     return typeof result === "object" ? result : child;
    // }

    // // 创建实例，将构造函数 Parent 与形参作为参数传入
    // const child = newMethod(Parent, "echo", 26);
    // child.sayName();

    // // 最后校验，与使用new 效果相同
    // console.log(child instanceof Parent);
    // console.log(child.hasOwnProperty('name'))
    // console.log(child.hasOwnProperty('age'))
    // console.log(child.hasOwnProperty('sayName'))
    // console.log(child.__proto__ === newMethod.prototype)





    /**
     * 1 什么是原型和原型链，原型链的顶端是什么？
     *  Javascript 中万物皆对象，且对象皆可通过 __proto__ 属性访问创建自己构造函数的原型对象，直白点说，原型就是一个包含了诸多属性方法的对象，原型对象的 __proto__ 指向构造函数 Object() 的原型；
     *  当一个对象访问某个属性时，它会先查找自己有没有，如果没有就顺着 __proto__ 网上查找创建自己构造函数的原型有没有，这个过程就是原型链；
     *  原型链的顶端是 null;
     * 
     *  
     * 2 原型链和作用域链有何区别？
     *  在当前作用域查找某个变量时，如果没有就追溯到上层作用域，如果还没有则一只找到全局作用域，这个过程就是作用域链；
     *  区别就是原型链的顶端是 null，作用域链的顶端是全局对象，原型链没找到某个属性返回 undefined， 而作用域链没找到会直接报错，告诉你未声明；
     * 
     * 
     * 3 构造函数与普通函数的区别？
     *  没有区别；
     *  函数都可以被普通调用和new 调用，所以可以说函数就是构造函数，但是从ES6 推出Class类，构造函数才有了一个真的名分；
     * 
     * 
     * 4 能否判断当前函数是普通调用或new 构造调用？
     *  方法一：
     *      普通调用，this 绑定属于默认绑定，一定指向全局 window (非严格模式);
     *      new 调用，指向构造函数内创建的实例；
     *  方法二：
     *      new.target 字段判断，如果是new 调用则指向函数本身；
     * 
     * 
     * 5 prototype 与 __proto__ 是什么？
     *  prototype 是原型对象， __proto__ 是访问器属性;
     * 
     * 
     * 6 怎么判断对象是否包含某条属性？
     *  使用 in 关键字判断，格式： "属性名 in 对象名"
     * 
     * 
     * 7 怎么判断某条属性是否为对象自身属性而非原型属性？
     *  使用 hasOwnProperty 方法判断，格式： "对象名.hasOwnProperty(属性名)"
     * 
     * 
     * 8 constructor 与 instanceof 有何区别？
     *  constructor 是原型对象中的一个属性，调用返回的是创建实例的构造函数，是一个方法，只能寻找到原型链的上一层；
     *  instanceOf 是一个运算符，返回的是一个布尔值，可以判断是否属于原型链的任意一层；
     *  在修改过构造函数原型时， instanceOf 比 constructor 更准确；
     * 
     * 
     * 9 能不能手动实现 new 方法？
     *  能
     * 
     * 
     * 10 能够创建严格意义上的空对象？
     *  方法1： Object.create(null);
     *  方法2： Object.setPropertyOf({}, null);
     */
})();

/**
 * 参考：
 * https://www.cnblogs.com/echolun/p/12321869.html
 */