(function () {
    /**
     * 1.1、JavaScript 的起源
     * 
     * Javascript是 netScape 公司 与 Sun公司合作开发，最开始的名字是LiveScript
     * JS出现之前，web浏览器只不过是一种能够显示超文本文档的简单的软件；
     * Javascript 1.0 版本，出现在1995年推出的 Netscape Navigator2 浏览器中；
     * 微软 IE3 发布 VBScript 语言，以JScript 为名发布了 JavaScript 的一个版本，与 Netscape 同步化；
     * 面对微软公司的竞争，Netscape 和 Sun 公司联合 SCMA（欧洲计算机制造协会）对JavaScript 语言进行了标准化，即 ECMAScript 语言；
     * 
     * 1996年，JavaScript、ECMAScript、JScript~随便怎么称呼， 已经稳稳站住脚跟 Orz
     * 
     * JavaScript 是一种脚本语言，通常只能通过Web 浏览器去完成一些操作而不能像普通意义上的程序那样独立运行；
     * 因为需要由 web 浏览器进行解释和执行，所以不像编译型程序设计语言那样用途广泛；
     */

    //  BOM （Browser Object Model）浏览器对象模型

    /**
     * window 对象
     * 
     * web客户端 Javascript 最高层对象之一， 由于 window 对象是其它大部分对象的共同祖先， 全局变量是window 对象的属性， 全局函数是window 对象的方法；
     * 在调用 window 对象的方法和属性时，可以省略 window 对象的引用
     *      例如： window.document.write（） 可以简写为 document.write()
     */

    //  常用属性和方法
    // console.log(window.innerHeight);    // 浏览器窗口的内部高度
    // console.log(window.innerWidth);     // 浏览器窗口的内部宽度

    // window.open();                      // 浏览器打开新的窗口
    // window.close();                     //浏览器关闭当前窗口




    /**
     * navigator 对象
     * 浏览器对象，通过这个对象可以判断用户所使用的浏览器，包含了浏览器的相关信息
     */

    //  常用属性即方法
    // console.log(navigator.appName);             //浏览器全程
    // console.log(navigator.appVersion);             //浏览器厂商和版本的详细字符串
    // console.log(navigator.userAgent);               //客户端绝大部分信息
    // console.log(navigator.platform);             //浏览器运行所在的操作系统


    /**
     * screen 对象
     * 屏幕对象，不常用
     */

    //  常用属性和方法
    // console.log(screen.availWidth);     //可用的屏幕宽度
    // console.log(screen.availHeight);     //可用的屏幕高度



    /**
     * history 对象
     * 
     * window.hisotry 包含浏览器的历史
     */
    // 常用属性和方法
    // history.forward();      //  前进一页
    // history.back();         // 后退一页


    /**
     * location 对象
     * 
     * 用于获取当前页面的地址 URL，并八浏览器重定向到新的页面
     */

    console.log(location.href);

    //  location.reload();          // 重新加载页面
    // location.href = "http://www.baidu.com";  // 跳转到指定页面

    /**
     * 警告框
     * 
     * 警告框通常用于确保用户可以得到某些信息时，弹出警告框后，用户需要点击确定按钮才能继续进行操作；
     */
    alert("你看到了嘛？");

    /**
     * 提示框
     * 提示框经常用于提示用户在进入页面前输入某个值
     * 当提示框出现后，用户需要输入某个值，然后点击确认或取消按钮才能继续操纵
     * 如果用户点击确认，那么返回值为输入的值。如果用户点击取消，那么返回值为默认值，就是第二个参数，如果没有默认值那么返回null。
     */
    prompt("请在下方输入","你的答案")


    /**
     * 确认框
     * 确认框用于使用户可以验证或者接受某些信息。 当确认框出现后，用户需要点击确定或者取消按钮才能继续进行操作。
     * 如果用户点击确认，那么返回值为 true。如果用户点击取消，那么返回值为 false。
     */
    confirm("你确定吗？")

    /**
     * 计时相关属性
     * 
     * setTimeout()
     * 
     * setInterval()
     */


})();