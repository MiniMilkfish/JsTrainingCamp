/**
 * 接口
 * 
 * 重要性：
 *  1、大型项目提高代码的灵活度；
 *  2、松耦合
 *  3、团队开发的时候，有些时候在真正编码之前就可以写API（自己的类库），那么这些类库就可以事后再进行实现，开始的时候就可以对整个项目是否可行通过接口就可以模拟出来
 */
(function () {
  /**
   * 1、注解的方法
   * 最简单，但是功能也是最弱的
   * 他利用 interface 和 implement "文字"
   * 把他们用注解的方式显示的表现出来
   */
  /**
   *  用注释来定义一个接口
   *  interface PersonDao(){
   *     function add(obj){};
   *     function remove(obj){};
   *     function find(id){};
   *  }
   */
  //  用注释的方式来实现他
  /**
   * PersonDaoImpl implement interface
   */
  // var PersonDaoImpl = function () {
  //     //
  // }
  // PersonDaoImpl.prototype.add = function (obj) {
  //     //
  // }
  // PersonDaoImpl.prototype.remove = function (obj) {
  //     //
  // }
  // PersonDaoImpl.prototype.find = function (id) {
  //     //
  // }
  /**
   * 千万不要感觉他是没有任何意义的
   * 1、 大型的项目靠的就是规范和标准；
   * 2、 这样的写法会让你的程序员在没有写实现之前有充分的时间做代码的设计和架构；
   * 3、 缺点： 要人为的遵守
   */





  /**
  * 2、属性检验法
  */
  /**
    *  用注释来定义一个接口
    *  interface PersonDao(){
    *     function add(obj){};
    *     function remove(obj){};
    *     function find(id){};
    *  }
    */
  // //  用属性检验法的方式来实现他
  // var PersonDaoImpl = function () {
  //     this.implementInterface = ["PersonDao"];
  // }
  // PersonDaoImpl.prototype.add = function (obj) {
  //     console.log(obj);
  // }
  // PersonDaoImpl.prototype.remove = function (obj) {
  //     //
  // }
  // PersonDaoImpl.prototype.find = function (id) {
  //     //
  // }
  // function addObj(obj) {
  //     var PersonDao = new PersonDaoImpl();
  //     // 开始检查
  //     let catchImpl = impl(PersonDao, "PersonDao", "PersonDao123");
  //     if (!catchImpl[0]) {
  //         throw new Error("类PersonDaoImple 没有实现接口 " + catchImpl[1]);
  //     } else {
  //         PersonDao.add(obj);
  //     }
  // }
  // addObj("我是测试检验法");
  // // 检验的方法, 接受的是一个不定参数
  // function impl(Object) {
  //     // 遍历传入对象的属性
  //     for (var i = 1; i < arguments.length; i++) {
  //         var interfaceName = arguments[i];
  //         var interfaceFound = false;
  //         for (var j = 0; j < Object.implementInterface.length; j++) {
  //             if (Object.implementInterface[j] == interfaceName) {
  //                 interfaceFound = true;
  //                 break;
  //             }
  //         }
  //         if (!interfaceFound) {
  //             return [false, interfaceName];
  //         }
  //     }
  //     return [true];
  // }





  /**
  * 3、鸭式变形法
  * "像鸭子一样走路并且会嘎嘎叫的东西就是鸭子"，换言之，对象具有与接口定义的方法名字同名的方法，那么我们就认为你实现了接口
  */
  // 定义一个接口类
  var Interface = function (name, methods) {
    if (arguments.length !== 2) {
      console.log("接口必须有两个参数");
    }
    this.name = name;
    this.methods = [];  // 定义一个空数组来装载函数名
    for (let index = 0; index < methods.length; index++) {
      if (typeof methods[index] !== "string") {
        console.log("函数名必须是 String");
      } else {
        this.methods.push(methods[index])
      }
    }
  }
  // 定义接口的一个静态方法来实现接口与实现类的直接检验
  // 静态方法不要写成 Interface.prototype.* 因为这是写道接口原型链上的
  // 我们要把静态的函数写道类层次上
  Interface.ensureImplements = function (object) {
    if (arguments.length < 2) {
      console.log("这个函数必须最少是两个参数");
      return false;
    }

    for (let index = 1; index < arguments.length; index++) {
      var inter = arguments[index];
      // 如果你是接口就必须是 Interface 类型的
      if (inter.constructor != Interface) {
        throw new Error("如果是接口类的话必须是接口类型");
      }

      // 遍历函数集合并分析
      for (let j = 0; j < inter.methods.length; j++) {
        var method = inter.methods[j];
        // 实现类中必须有方法名字喝接口中所有的方法名项目
        if (!object[method] || typeof object[method] !== "function") {
          throw new Error("实现类并且没有完全实现接口中的所有方法")
        }
      }
    }
  }
  // 应用
  var GridManager = new Interface("GridManager", ["add", "remove", "list"]);
  var FormManager = new Interface("FormManager", ["save"]);

  function commonManager() {
    // 实现方法
    this.add = function () {
      console.log("ok");
    }
    this.remove = function () { }
    this.list = function () { }
    this.save = function () { }

    // 检验
    Interface.ensureImplements(this, GridManager, FormManager);
  }

  var c = new commonManager();
  c.add();


})();