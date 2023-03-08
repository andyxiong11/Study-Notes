# APP测试
### UI业务功能测试
	黑盒测试
### 自动化测试
	appium
		原理
			三个组件
		安装
			5个安装
		定位
			两个工具三种方式
		操作
			应用操作
			特殊操作
			触摸操作
		等待
			三种等待
### 接口测试
	用例设计
		单个接口功能测试
			1.根据需求说明书和接口设计文档
2.对于每一个接口的输入参数进行测试设计
3.采用的方法等价类划分，边界值分析，尤其是边界值分析需要对参数边界值外的情况进行测试
		业务场景测试
			对于业务场景使用场景法覆盖
	性能测试
		编写接口的脚本
			请求
			参数化
			断言
			关联
		执行脚本
			1.在线程组设置线程数
2.设置在一定时间内将线程数全部启动
3.设置运行时间
		监控
			系统资源的监控
				cpu、内存、磁盘io、网络io
			性能指标的监控
				响应时间（平均响应时间，90%响应时间），tps，事务的成功率，压力机的网络io
	安全测试
		请求中的敏感数据是否加密
		对于已经过期的session是否还能进行认证
		再单位时间内访问接口的次数是否进行限制，超过限制是否会加入黑名单
		授权，普通账号对于访问管理员权限功能是否能进行访问
### 专项测试
	网络测试
		2G，3G，4G,Wifi,移动，联通，电信，弱网，强网不同网络下能正常工作，网络中断，连接，切换
	安装、卸载、升级
		升级方式
			灰度升级
				某一个地方升级，其他地方不升级
			跨单个版本的升级
			跨多个版本的升级
		升级类别
			强制升级
				不能取消升级，如果不升级app不可用
			静默升级
				当打开app使用，在无感知的情况下后台进行升级，再次启动的时候完成新版本的安装和替换
			可选升级
				可以取消升级，使用当前版本
					在做回归测试的时候对于可选的版本进行回归测试
	兼容性测试
		设备的兼容
			1.根据业务特点进行分析，找到目标用户主要使用的机型
			2.根据行业报告进行分析找到分辨率、机型、操作系统排名前10的数据
			3.借助云测平台进行测试
				分辨率适配
				系统适配
				机型适配
		版本的兼容
			上下版本的兼容
				app新版本和原后台是否兼容
				新的后台和app原版本是否兼容
				app新版本的内容（如二维码）更新，app原版本未更新，是否和新版本兼容
	干扰测试
		使用app时，收到电话、短信、通知栏消息、提示框弹出、警告框弹出等其他应用打断，切换到该应用或者忽略该应用被测APP能继续之前的操作，不发生anr或crash
	用户体验测试
		易用性、和原型是否一致、图片控件文字布局是否合理
	内存不足的情况
		使用高内存的处理(App对于读取大量图片、视频等进行高内存占用操作的处理能力）
	授权测试
### adb命令
	monkey测试
		ANR：application not responding应用程序不响应，包括输入事件5s内、广播接收器10s内未执行完毕，发生anr异常，可以定位日志文件中记录进行排查。adb monkey命令>路径.txt
	adb操作
## Appium
### 移动应用类型
1. NativeApp
	是为特定移动设备或平台开发的应用程序。例如，iphone应用程序是用swift写的，android应用程序是用java写的。原生应用的可靠性极高，因为它们使用的是底层系统架构和设备的内置功能
2. Mobile Web App
	是通过移动浏览器访问的应用程序，可以通过内置浏览器轻松访问。例如，lOS上的safari，android上的chrome。它们主要使用HTML5,JavaScript等技术开发，可以提供定制功能。Moblie WebApp基本来自服务器，并且不能在设备的任何地方离线存储。
3. Hybrid App
	HybridApp主要使用网络技术开发，但嵌入在App中运行，从而感觉它像是原生应用程序。对于拥有网页的公司来说，混合应用最受青睐。这些公司通常将混合应用作为封装构建网页，混合应用可以通过各自的应用程序商店下载

### appium的架构
	appium基于客户端/服务器架构。服务器执行顺序的动作：
		1.从客户端接受连接并启动会话
        2.侦听发出的命令
        3.执行这些命令
        4.返回命令执行状态
	客户端
		appium client支持多种语言/框架，它针对主流的编程语言分别开发了相应的appium测试库，我们可以选择自己熟悉的语言或框架来编写appium测试脚本；测试库https://github.com/appium/python-client
	appium server
		在pc上启动一个server，监听客户端自动化测试运行，并将请求发送到对应的移动设备或模拟器中运行
	移动设备
		真机或模拟器

### appium工作原理
1.Appium server将监听到的4723端口的指令，转发给中间件Bootstrapjar，Bootstrap.jar是用Java编写的，安装在Android手机上；
2.Bootstrap监听4724端口并接收Appium server的指令；
3.Bootstrap再通过调用Ulautomator的命令来实现具体的command操作。
4.最后Bootstrap将执行的结果返回给Appium server
		
脚本请求—->4723端口appium server——>解析参数给PC端4724端口——>发送给设备4724端口——>通过设备4724端口发给bootstrap.jar——>Bootstrap.jar把命令发给

### appium安装
1.android-sdk
2.模拟器
3.appium-desktop
4.jdk
5.pip install Appium-Python-Clien
设置环境变量
    android-sdk
        D:\Program Files\android-sdk\tools
        D:\Program Files\android-sdk\platform-tools
        D:\Program Files\android-sdk\build-tools
    模拟器
        D:\Program Files\Nox\bin
    appium-desktop
        D:\Program Files\Appium-windows-1.21.0
    jdk
        %JAVA_HOME%\bin\
adb替换
	将android-sdk中的adb.exe替换到模拟器中

### appium API
	Desired Capbilites
		deviceName：启动的设备、真机或模拟器
		automationName：使用的自动化引擎
		platformName：使用的移动平台
		platformVersion：指定平台的系统版本
		appPackage：被测试App的Package名
		appActivity：被测试App的Activity名
		noReset：在会话前重置应用状态
		'deviceName':'Android Emulator',
        'automationName':'appium',
        'platformName':'Android',
        'platformVersion':'7.1.2',
        ‘appPackage':'com.kakarote.crm10',
        appActivity':'.ScienceFragment'
	如何获取appPackage和appActivity
		方式一、运行adb logcat>D:\log.txt；运行当前app，ctrl+c中止 。查找displayed
		方式二、通过aapt（在sdk的build-tools目录下）查看信息；aapt dump badging 目录.apk
	定位
		工具
			UI Automator Viewer
            .\tools下uiatutomatorviewer.bat
            点击Device Screenshot
		ID定位
			resource-id 定位
				driver.find_element_by id("com.android.calculator2:id/formula")
		Class Name定位
			class 定位
				driver.find_elements_by_class_name("android.widget.Button")
		xpath定位
			driver.find_element_by_xpath("//android.view.ViewGroup/android.widget.Button")

			属性相同的情况下通过控件的属性进一步区分
            driver.find_element_by_xpath("//android.view.ViewGroup/android.widget.Button[contains(@text,'7)]“)
            driver.find_element_by_xpath("//android.view.ViewGroup/android.widget.Button[contains(@content-desc,'times)]")
		Accessibility id定位
			核心是找到contentDescription属性
				driver.find_element_by_accessibility id("plus")
	操作
		应用操作
			安装应用
				driver.install_app(apk包的路径)
			卸载应用
				driver.remove_app(app包名)
			关闭应用
				driver.close_app
			启动应用
				driver.lanuch_app()
			检查应用是否安装
				is_app_installed()
		键盘操作
			输入字符串send_keys()
				driver.find_element_by_name("Name").send_keys("jack")
			模拟按键keyevent()
				driver.keyevent(36)H
                driver.keyevent(33)E
                driver.keyevent(40)L
                driver.keyevent(40)L
                driver.keyevent(43)O
		触摸操作
			单击控件
				tap()
					from appium.webdriver.com.touch_action import TouchAction
                    e1= driver.find_element_by_name("Name")
                    TouchAction(driver).tap(e1).release().perform)
                    TouchAction(driver).tap(x=0,y=300).perform()
                    TouchAction(driver).tap(e1,count=2).perform()
			长按控件
				long_press
					from appium.webdriver.com.touch_action import TouchAction
                    e1= driver.find_element_by_name("Name")
                    TouchAction(driver).long_press(e1).perform()
                    TouchAction(driver).long_press(x=0,y=300).perform()
                    TouchAction(driver).long_press(e1,duration=2000).perform()
			移动
				move_to()
					from appium.webdriver.common.touch_action import TouchAction
                    e1= driver.find_element_by_name("Name")
                    TouchAction(driver).move_to(e1).perform()
                    TouchAction(driver).move_to(x=0,y=300).perform)
			暂停
				wait()
					TouchAction(driver).wait(1000).perform()
		特有操作
			息屏
				driver.lock(seconds=3)
			获取当前package
				driver.current_package
			获取当前activity
				driver.current_activity
			获取屏幕宽高
				driver.get_window_size()
			拉取文件
				driver.pull_file()
			推送文件
				driver.push_file()

### adb命令
	adb，是一种可以用来操作手机设备或模拟器的命令行工具
		adb version 查看版本
		adb devices   查看当前连接设备
		adb-s 设备号 shell wm size
		adb logcat   --查看日志
		adb install xxx.apk   --安装apk包
		adb install-r xxx.apk    --覆盖安装apk包
		adb uninstall xxx.app    --卸载app
		adb push 文件名/路径     --发送到手机端
		adb pull文件名/路径      --从手机端拉取文件
		adb shell monkey-p<packagename>-v 500       --monkey测试
		adb shell screencap/sdcard/screen.png      --截图

### 等待
	强制等待
		sleep
	显式等待
		WebDriverWait(browser,5,0.5).until(lambda x:x.ind_element_by_link_text(u"客户"))
	隐式等待
		driver.implicitly_wait(10)
## Selenium Webdriver
### 原理
	组成
		selenium client
		webdriver
		浏览器
			chrome、firefox、IE
	过程
		通过python语言编写代码，将代码转化为http请求，通过json wire protocol协议发送到httpserver
		httpserver处理客户端发来的请求，发送指令操作浏览器
		浏览完成操作，完成操作后将操作的结果返回给httpserver，经httpserver在返回给client
### 定位
	简单定位
		根据属性来定位
			id
			name
			class
			tag
			link
				text内容不是属性
			partial link
		根据路径来定位
			绝对路径
			相对路径
				和属性相结合使用
	复杂定位
		内嵌的frame
			switch_to.frame("")
		新开的开窗口window
			switch_to.window("")
		警告
			switch_to.alert()
		定位一组元素
			driver.find_elements_by_xx
				通过for循环来遍历获得list，对list内的值进行判断
### 操作
	浏览器操作
		对浏览器大小的控制
		对访问地址的前进forward
		对访问地址的后退back
		对浏览器滚动条操作
	测试对象操作
		clear()
			对定位到输入框的内容进行清楚
		click（）
		text
		size
		get_attribute
		send_keys
			键盘输入
	鼠标事件
		引入一个actionchains包
ActionChains(driver).鼠标操作.perform()
			右键点击
				context_click()
			拖拽
				drag_and_drop()
			长按
				click_and_hold()
			悬停
				move_to_element()
			双击
				double_click()
	键盘事件
		引入keys包
send_keys(Keys.键盘事件)
			单个按键
				send_keys(Keys.键盘事件)
			组合按键
				send_keys(Keys.键盘事件, "a")
### 等待
	强制等待
		sleep()
	隐式等待
		driver,impli.wait(10)
			全局等待
				对所有定位的语句产生作用
			如果能定位到就会执行下一条语句，如果定位不到会一直等待，直到超时，效率比较低
	显示等待
		WebDriverWait(driver,10,0.5).until(lambda x:x.find_element_by_id(""))
			针对单个元素
### 模块化
	在一个.py文件中定义单个测试用例的方法def方法名()，然后调用这个方法
	在一个.py文件中定义一类测试用例class类名()，然后实例化化类后调用里面的方法
### unittest框架
	使用方法
		1.import unittest
		2.测试类要继承（unittest.TestCase）
		3.定义测试用例要以test_开头：def test_用例(self)：
	组件
		suite
			直接添加类里面的方法
			引入模块后通过suite添加类里面的方法
		runneer
			unittest.main()
			runner(suite)
		test_case
		fixture
			方法级别
				setup(self)
				teardown(self)
					每个方法运行一次
			类级别
				@classmethod
				setup(cls)
				@classmethod
				teardownClass(cls)
					每隔类运行一次
			模块
				setuoModule()
				teardownModule()
					在一个模块运行一次
	其他功能
		断言
			assertEqual(a,b)
			assertln(a,b)
		跳过用例
### 测试报告
	from Hwhmlreport import HTMLReport
    nowtime=time.strftime('%Y-%m-%d %H.%M.%S')
     filepath = 'F:\\软件\\'+nowtime+'.html'
    with open(filepath, "wb") as fp:
        runner = HTMLTestReport(
            stream=fp,
            title='CRM测试报告',
            description='用例执行情况',
            verbosity=2	
        )
        runner.run(suite)
### 测试框架