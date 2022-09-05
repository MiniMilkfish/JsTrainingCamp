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

    // console.log(location.href);

    //  location.reload();          // 重新加载页面
    // location.href = "http://www.baidu.com";  // 跳转到指定页面

    /**
     * 警告框
     * 
     * 警告框通常用于确保用户可以得到某些信息时，弹出警告框后，用户需要点击确定按钮才能继续进行操作；
     */
    // alert("你看到了嘛？");

    /**
     * 提示框
     * 提示框经常用于提示用户在进入页面前输入某个值
     * 当提示框出现后，用户需要输入某个值，然后点击确认或取消按钮才能继续操纵 
     * 如果用户点击确认，那么返回值为输入的值。如果用户点击取消，那么返回值为默认值，就是第二个参数，如果没有默认值那么返回null。
     */
    // prompt("请在下方输入","你的答案")


    /**
     * 确认框
     * 确认框用于使用户可以验证或者接受某些信息。 当确认框出现后，用户需要点击确定或者取消按钮才能继续进行操作。
     * 如果用户点击确认，那么返回值为 true。如果用户点击取消，那么返回值为 false。
     */
    // confirm("你确定吗？")

    /**
     * 计时相关属性
     * 
     * setTimeout()
     * 
     * setInterval()
     */




    /**
     * 1.2 DOM
     * 
     * DOM 是一套对文档的内容进行抽象和概念化的方法；
     * 
     * “世界对象模型”, 不仅可以用来描述客观存在的事物，还可以用来描述抽象概念。
     * 在现实世界里，正是因为大家对抽象的世界对象模型有着基本的共识，人们才能用非常简单的话表达出复杂的含义并得到对方的理解。
     * 
     */

    /**
     * 1.3 浏览器战争
     *  Netscape Navigator 4.0  1997.6 发布；
     *  IE 4.0                  1997.10 发布；
     * 
     * 实验性质的初级DOM，称为“第0级DOM”（DOM Level 0）
     */

    /**
     * 1.3.1 DHTML
     * DHTML "dynamic HTML" 描述HTML、CSS和Javascript 技术组合的术语。
     * 背后的定义：
     *  - 利用HTML 把网页标记为各种元素；
     *  - 利用CSS 设置元素样式和他们的显示位置；
     *  - 利用Javascript 实时的操控页面和改变样式；
     * 
     * NN4 和 IE4 浏览器使用了两种不兼容的DOM，虽然制造商的目标一样，但是解决DOM问题时采用的办法却完全不同；
     */

    /**
     * 1.3.2 浏览器之间的冲突
     */

    /**
     * 1.4 制定标准
     * 
     * W3C 推出的标准化DOM 可以让任何一种程序设计语言对使用任何一种标记语言编写出来的任何一份文档进行操控；
     */

    /**
     * 1.4.1 浏览器以外的考虑
     * DOM 是一种API （Application Programming Interface 应用编程接口）
     * 
     * API 是一组已经得到有关各方共同认可的基本约定。
     * 
     * W3C 对DOM的定义是：
     *  一个与系统平台和编程语言无关的接口，程序和脚本可以通过这个接口动态的访问和修改文档的内容、结构和样式。
     */

    /**
     * 1.4.2 浏览器战争的结局
     * 
     * WaSP "web标准计划" http://webstandards.org/
     */

    /**
     * 1.4.3 崭新的起点
     * 
     * 2003年 苹果公司发布 Safari 浏览器（基于WebKit），坚定不移的遵循DOM标准
     */

    /**
     * 1.5 小结
     * 
     * 在Javascript发展简史中，不同的浏览器采用了不同的办法来完成同样的任务。这一午发回避的事实不仅主宰着如何编写Javascript 脚本代码，还影响着Javascript 教科书的编写方法。
     * 多亏了标准话的DOM，不同浏览器在完成同样的任务时，将不再需要避开主题去探讨如何对付不同的浏览器
     */
})();