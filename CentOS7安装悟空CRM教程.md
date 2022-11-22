### 一、环境安装

   **前置条件：准备一台4核16G及以上的服务器或者虚拟机** 
   #### 安装java环境
          yum -y install java-1.8.0-openjdk-devel;
   #### 安装redis环境并设置开机自启
          yum -y install epel-release;
          yum -y install redis;
          chkconfig redis on;
          #-- 修改redis密码为123456
          yum -y install vim;
          vim /etc/redis.conf;
          #-- 在文件最下面追加一行
          requirepass 123456
          #-- 或者输入 / 搜索 # requirepass foobared
          #-- 将前面的#删除，将foobared改为123456
          #-- 修改完成之后 :wq 保存并退出,重启redis
          service redis restart;
   #### 安装maven环境
      yum -y install maven;
   #### 安装mysql5.7数据库
      yum -y install wget;
      wget -i -c http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm;
      yum -y install mysql57-community-release-el7-10.noarch.rpm;
      yum -y install mysql-community-server;
      sudo systemctl start mysqld.service;
      sudo systemctl enable mysqld.service;

      #--查看安装的mysql默认密码,如下图所示

      grep "password" /var/log/mysqld.log
![查询mysql默认密码](https://images.gitee.com/uploads/images/2021/0207/143052_5000d9e4_8065912.jpeg "查询mysql默认密码")

      #--进入mysql 例：mysql -u root -p"GXOO%eiI/7o>"
      mysql -u root -p"此处为上一步的默认密码"

      #--修改mysql密码，如下图所示
      set global validate_password_policy=LOW;
      ALTER USER 'root'@'localhost' IDENTIFIED BY 'Root.wukong132';
![修改mysql默认密码](https://images.gitee.com/uploads/images/2021/0207/143854_76cd7719_8065912.jpeg "修改mysql默认密码")

      #--退出
      exit

      #--修改mysql配置
      vim /etc/my.cnf;

      #--输入 i 进入编辑模式，修改sql_mode设置，如下图所示，将下面sql_mode配置复制，到 [mysqld]下使用 shift+insert 粘贴
      sql_mode=STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION
![修改mysql配置](https://images.gitee.com/uploads/images/2021/0207/144304_d0d350b6_8065912.jpeg "修改mysql配置")   
 
      #--修改完毕，按esc按键，然后 :wq 保存并退出，重启mysql
      service mysqld restart;


  #### 安装elasticsearch
      #-- 在opt目录下安装
      cd /opt;

      #-- 下载elasticsearch6.8.6
      wget https://file.72crm.com/static/elasticsearch-6.8.6.zip;

      #-- 下载analysis-icu-6.8.6分词器插件
      wget https://file.72crm.com/static/analysis-icu-6.8.6.zip;

      #--下载unzip
      yum -y install unzip

      #--解压刚才下载的elasticsearch
      unzip elasticsearch-6.8.6.zip
      
      #--将分词器插件解压到elasticsearch/plugins目录下
      unzip analysis-icu-6.8.6.zip -d elasticsearch-6.8.6/plugins/analysis-icu-6.8.6;

      #--创建elasticsearch用户
      useradd elasticsearch;

      #--赋予用户目录权限
      chown -R elasticsearch:elasticsearch elasticsearch-6.8.6;

      #--切换至elasticsearch用户
      su elasticsearch

      #--启动
      cd elasticsearch-6.8.6/bin
      ./elasticsearch -d
      #--退出elasticsearch用户
      exit


  #### 下载其他依赖
      #--在opt目录下安装
      cd /opt;
      #--下载nacos
      wget https://file.72crm.com/static/nacos-server-1.2.1.zip;
      #--解压nacos到opt目录
      unzip nacos-server-1.2.1.zip -d /opt;

      #--下载seata
      wget https://file.72crm.com/static/seata-server-1.2.0.zip;
      #--解压seata到opt目录
      unzip seata-server-1.2.0.zip -d /opt;

      #--下载sentinel
      wget https://file.72crm.com/static/sentinel-dashboard-1.7.2.jar;
      #--将sentinel放到指定目录
      mkdir /opt/sentinel;
      mv sentinel-dashboard-1.7.2.jar /opt/sentinel/sentinel.jar;

      #--删除已解压的zip文件
      rm -rf nacos-server-1.2.1.zip;
      rm -rf seata-server-1.2.0.zip;

  #### 下载悟空CRM源码
      #--下载git
      yum -y install git;

      #--下载代码到/opt目录
      cd /opt;
      git clone https://gitee.com/wukongcrm/crm_pro.git;

      #-- 编译
      cd crm_pro;

      #--打包，第一次打包会比较慢，请耐心等待
      mvn clean -Dmaven.test.skip=true package;

      #-- 创建package文件夹
      mkdir /opt/package;

      #--将打包后代码复制到一个目录，方便统一管理
      cp admin/target/admin.zip /opt/package;
      cp authorization/target/authorization.zip /opt/package;
      cp crm/target/crm.zip /opt/package;
      cp gateway/target/gateway.zip /opt/package;
      cp bi/target/bi.zip /opt/package;
      cp examine/target/examine.zip /opt/package;
      cp oa/target/oa.zip /opt/package;
      cp work/target/work.zip /opt/package;
      cp job/target/job.zip /opt/package;
  
      #-- 解压对应文件
      cd /opt/package;
      unzip admin.zip -d admin;
      unzip authorization.zip -d authorization;
      unzip crm.zip -d crm;
      unzip gateway.zip  -d gateway;
      unzip bi.zip -d bi;
      unzip examine.zip -d examine;
      unzip oa.zip -d oa;
      unzip work.zip -d work;
      unzip job.zip -d job;

      #-- 导入数据库信息
      #-- 进入数据库
      mysql -uroot -pRoot.wukong132
     
  #### 修改配置信息 

      #-- 创建nacos数据库
      create database nacos character set utf8mb4 collate utf8mb4_general_ci;
      use nacos;
      source /opt/crm_pro/DB/nacos.sql;

      #-- 创建seata数据库
      create database seata character set utf8mb4 collate utf8mb4_general_ci;
      use seata;
      source /opt/crm_pro/DB/seata.sql;

      #-- 创建xxl_job数据库
      create database xxl_job character set utf8mb4 collate utf8mb4_general_ci;
      use xxl_job;
      source /opt/crm_pro/DB/xxl_job.sql;

      #-- 创建crm数据库
      create database wk_crm_single character set utf8mb4 collate utf8mb4_general_ci;
      use wk_crm_single ;
      source /opt/crm_pro/DB/wk_crm_single.sql;

      #-- 退出数据库
      exit;

      #-- 修改nacos持久化到DB

      cd /opt/nacos/conf;
      vim application.properties;
      #-- 按 i 进入编辑模式，将 以下配置文件取消注释，如下图所示
      #-- spring.datasource.platform  db.num  db.url.0    db.user    db.password
![输入图片说明](https://images.gitee.com/uploads/images/2021/0510/150022_fc5d41e5_8065912.png "edit_nacos.png")
######
      #-- 修改完成之后 :wq 保存并退出
      #-- 启动nacos
      cd /opt/nacos/bin
      sh startup.sh -m standalone
      
      #-- 配置seata持久化到nacos
      cd /opt/seata/conf/;
      vim registry.conf;
      #-- 按 i 进入编辑模块，将registry{} 和 config{}下的type="file" 改为 type="nacos"
      #-- 修改完成之后 :wq 保存并退出,然后启动seata服务
      cd /opt/seata/bin;
      nohup sh seata-server.sh > log.out 2>&1 &
    
      #-- 启动sentinel
      cd /opt/sentinel;
      nohup java -Xms128m -Xmx512m -Dserver.port=8079 -Dproject.name=sentinel-dashboard -jar sentinel.jar &
 
      #-- 下载xxl-job 2.1.2版本
      cd /opt
      git clone -b 2.1.2 https://gitee.com/xuxueli0323/xxl-job.git
      cd xxl-job;
      修改xxl-job的配置文件
      vim xxl-job-admin/src/main/resources/application.properties
      #-- 按 i 进入编辑模块，将server.port改为7070
      #-- 修改spring.datasource.url，spring.datasource.username,spring.datasource.password参数，如下图所示
![输入图片说明](https://images.gitee.com/uploads/images/2021/0510/162025_3ffb9cfb_8065912.png "edit_xxl_job.png")
      

      #-- 修改完成之后 :wq 保存并退出,执行打包流程
      mvn clean -Dmaven.test.skip=true package;
      #-- 启动xxl-job-admin
      mkdir /opt/xxl-job-admin;
      cp xxl-job-admin/target/xxl-job-admin-2.1.2.jar /opt/xxl-job-admin
      cd /opt/xxl-job-admin/
      nohup java -Xms128m -Xmx512m -jar xxl-job-admin-2.1.2.jar> log.out 2>&1 &
      
#### 启动项目
      
    
      cd /opt/package/admin/ && sh 72crm.sh start;
      cd /opt/package/authorization/ && sh 72crm.sh start;
      cd /opt/package/crm/ && sh 72crm.sh start;
      cd /opt/package/gateway/ && sh 72crm.sh start;
      cd /opt/package/bi/ && sh 72crm.sh start;
      cd /opt/package/examine/ && sh 72crm.sh start;
      cd /opt/package/oa/ && sh 72crm.sh start;
      cd /opt/package/work/ && sh 72crm.sh start;
      cd /opt/package/job/ && sh 72crm.sh start;

      #-- 项目启动完成

#### 注册账号
    访问: http://127.0.0.1:8443/index.html进入登录页面
    如果没有注册，会进入一个注册页面，在页面输入自己手机号，密码，序列号点击注册即可
    其中激活序列号：
    6EA74C261C4BA344BC716FCD68295694BABFE016F5B7FA4890E4E29B0F52A5D965EE4A1AF633633D4573A2559630986F976D8F2920D688686CB60967F6FFB9FDADE6AC6DFD39416DE175D0DE01699C816244C16EE4E533A959E3ED0653143A7363E5B98E62126A78CDC5578636F456D29FD2B063FCBED837D50B10450C6FFBF0290DB782C8D4525864A96A98C37C0106FB5D8392A7E828F0BEFA86B4CD28BEBE83628A59BB23F60B7799A22C8D7B2039ED30F05492E9D2A2E2A03D7AC0199EA2CE529D561AE622B3C0DECC50D8A223BC5DA03E3AFF1150F0F217B0BE0400835369329DB74454870D5314DBA7C24B98CCE5600CBDAF264A21974FA3C85E7EAF0A

**开放防火墙**
1. 查看3306端口状态
> firewall-cmd --query-port=8443/tcp
2. 开启3306
> firewall-cmd --zone=public --add-port=8443/tcp --permanent
3. 重新加载防火墙
> firewall-cmd --reload
    
#### 注意事项
     
     #-- 启动命令可以写成sh脚本，方便下次重启
     #-- 项目对应模块的解压，打包，运行可以搞成批处理脚本
     #-- 72crm项目启动失败，错误日志在/opt/package/对应模块/logs下面
     #-- 如更改前端文件，需替换前端文件，在前端打包完成后，将打包生成的dist文件夹放到gateway模块下，重命名为public
     #-- cd 前端文件目录 
     #-- rm -rf /opt/package/gateway/public
     #-- cp -R dist /opt/package/gateway/public




























