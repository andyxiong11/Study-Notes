# linux性能监控

1. 添加到环境变量

> vim /etc/profile 

```shell
PATH=$PATH:/usr/local/nmon/nmon_x86_rhel75
export PATH
```

> source /etc/profile

2. 运行nmon

> ./nmon_x86_rhel75
> nmon_x86_rhel75

m 内存

3. 数据采集

为了实时监控系统在一段时间内的使用情况并将结果记录下来，我们可以通过运行以下命令实现：
> ./nmon -f -t -s3 -c10 -m /usr/local/nmon/nmonlog

参数说明：
-f：按标准格式输出文件：<hostname>_ywwYMMDD_HHMM.nmon；
-t：输出中包括占用率较高的进程；
-s30：每30秒进行一次数据采集
-c180：一共采集180次

输入命令回车后，将自动在当前目录生成一个hostname_timeseries.nmon的文件，nmon输出文件的命名方式是服务器名_日期时间.nmon

依次按c，m，a即可显示cpU，内存，磁盘等信息

4. 数据分析

nmonanal_0.1.3工具分析采集的文件

nmon analyser v51_2.xlsm分析

