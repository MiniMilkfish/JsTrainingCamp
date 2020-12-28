(function(){
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

    // 定义一个man 构造器
    function man() {
        man.s ++;
    }

    // 添加一个静态属性
    man.s = 0;

    // 添加一个静态方法
    man.f = function () {
        console.log(man.s);
    }

    var m1 = new man();
    var m2 = new man();

    man.f();



})();