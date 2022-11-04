## 一、关键术语和协议码
### 1、关键术语
最大传输单元（Maximum Transmission Unit，MTU）
最大报文段长度（Maximum Segment Size，MSS）
循环冗余校验（Cyclic Redundancy Check，CRC）
帧检验序列（Frame Check Sequence，FCS)
### 2、协议码
ICMP：1
IGMP：2
TCP：6
UDP：17
EIGRP：88
OSPF：89
## 二、报文分析
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1120372/1589166780629-4e6296b0-706d-4056-b05a-c4bceb36fa98.png#align=left&display=inline&height=238&margin=%5Bobject%20Object%5D&name=image.png&originHeight=476&originWidth=1063&size=439092&status=done&style=none&width=531.5)

- 前同步码：第一个字段是7个字节的前同步码，1和0交替，作用是用来使接收端的适配器在接收MAC帧时能够迅速调整时钟频率，使它和发送端的频率相同。
- 帧开始定界符：第二个字段是1个字节的帧开始定界符，前六位1和0交替，最后的两个连续1表示告诉接收端适配器：“帧信息要来了，你准备接收把。
- MAC 目的地址：第三个字段是6字节（如：FF,FF,FF,FF,FF），发送方的网卡（MAC）地址，用处是当网卡接收到一个数据帧时，首先会检查该帧的目的地址，是否与当前适配器的物理地址相同，如果相同则会进一步处理，不同则直接丢弃。
- 源MAC地址：发送端的MAC地址同样占6个字节。
- 类型：该字段在网络协议栈分解中及其重要，考虑当PDU（协议数据单元）来到某一层时，它需要将PDU交付给上层，而上层协议众多，所以在处理数据的时候，必须要一个字段标识我这个交付给谁。
- 数据：数据也叫有效载荷，除过当前层协议需要使用的字段外，即需要交付给上层的数据，以太网帧数据长度规定最小为46字节，最大为1500字节，如果有不到46字节时，会用填充字节填充到最小长度。
- 帧检验序列FCS（使用CRC校验法）：检测该帧是否出现差错。
## 三、MTU
根据 [RFC894] 的说明，以太网封装IP数据包的最大长度是1500字节，最小长度是46字节，再加上各层封装和校验码（CRC校验计算得到的FCS），总字节应该为 72~1526 字节。

- 最大字节= 前导同步码（7字节） + 帧开始定界符（1字节） + 目的MAC（6字节） + 源MAC（6字节） + 帧类型（2字节） + 数据（46~1500） + FCS（4字节）= 72~1526 字节

按照上述，最大帧应该是 1526 字节，但是实际上我们抓包得到的最大帧是 1514 字节，为什么呢？

原因是当数据帧到达网卡时，在物理层上网卡要先去掉前导同步码和帧开始定界符，然后对帧进行CRC检验，如果帧校验和出错，就丢弃此帧。如果校验和正确，就判断帧的目的硬件地址是否符合自己的接收条件（目的地址是自己的物理硬件地址、广播地址、可接收的多播硬件地址等），如果符合，就将帧交给“设备驱动程序”做进一步处理。这时我们抓包的软件才能抓到数据，因此，抓包wireshark软件抓到的是去掉前导同步码、帧开始分界符、FCS之外的数据。

- 数据帧字节 = 目的MAC（6字节） + 源MAC（6字节） + 帧类型（2字节） + 数据（46~1500） + FCS（4字节）

计算最大帧 = 1518，wireshark抓取最大帧 = 1514
计算最小帧 = 64，wireshark抓取最小帧 = 60

## 四、wireshark抓包分析
采取最简单且有效的方式——ping，简单有效控制报文长度。ping 是基于 IP 协议的 ICMP 报文格式。
### 1、ICMP报文格式
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1120372/1589166882516-97dbd5a5-9be4-434d-8030-5be128926593.png#align=left&display=inline&height=417&margin=%5Bobject%20Object%5D&name=image.png&originHeight=834&originWidth=1009&size=142152&status=done&style=none&width=504.5)
### 2、ping 命令
目的MAC（6字节）、 源MAC（6字节）、帧类型（2字节）、 FCS（4字节）、IP 首部（20字节）、ICMP 首部（8字节） ，这里就占了 46 字节。
最小帧为 64 字节，抓包就为 60
最大帧为 1518 字节，抓包就为 1514

### 3、wireshark抓包分析
```
v Frame 2: 60 bytes on wire (480 bits), 60 bytes captured (480 bits) on interface 0
    v Interface id: 0 (\Device\NPF_{258BB613-5DA9-4E92-923E-8CDBC68345B0})
        Interface name: \Device\NPF_{258BB613-5DA9-4E92-923E-8CDBC68345B0}
        Interface description: WLAN
    Encapsulation type: Ethernet (1)
    Arrival Time: Dec  7, 2019 19:32:00.332245000 中国标准时间
    [Time shift for this packet: 0.000000000 seconds]
    Epoch Time: 1575718320.332245000 seconds
    [Time delta from previous captured frame: 0.044843000 seconds]
    [Time delta from previous displayed frame: 0.044843000 seconds]
    [Time since reference or first frame: 0.044843000 seconds]
    Frame Number: 2
    Frame Length: 60 bytes (480 bits)
    Capture Length: 60 bytes (480 bits)
    [Frame is marked: False]
    [Frame is ignored: False]
    [Protocols in frame: eth:ethertype:ip:icmp:data]
    [Coloring Rule Name: ICMP]
    [Coloring Rule String: icmp || icmpv6]
v Ethernet II, Src: RuijieNe_5f:b2:32 (58:69:6c:5f:b2:32), Dst: Cybertan_83:22:81 (60:14:b3:83:22:81)
    v Destination: Cybertan_83:22:81 (60:14:b3:83:22:81)			#目的地 MAC 地址，6字节
        Address: Cybertan_83:22:81 (60:14:b3:83:22:81)
        .... ..0. .... .... .... .... = LG bit: Globally unique address (factory default)
        .... ...0 .... .... .... .... = IG bit: Individual address (unicast)
    v Source: RuijieNe_5f:b2:32 (58:69:6c:5f:b2:32)					#源 MAC 地址，6字节
        Address: RuijieNe_5f:b2:32 (58:69:6c:5f:b2:32)
        .... ..0. .... .... .... .... = LG bit: Globally unique address (factory default)
        .... ...0 .... .... .... .... = IG bit: Individual address (unicast)
    Type: IPv4 (0x0800)												#类型，2字节
    Padding: 002198530000380130a0246ed5								#填充数据，13字节
v Internet Protocol Version 4, Src: 36.110.213.45, Dst: 10.16.80.85
    0100 .... = Version: 4											#版本号，4比特 = 1/2字节
    .... 0101 = Header Length: 20 bytes (5)							#首部长度，4比特 = 1/2字节
    v Differentiated Services Field: 0x00 (DSCP: CS0, ECN: Not-ECT) #服务类型，1字节
        0000 00.. = Differentiated Services Codepoint: Default (0)
        .... ..00 = Explicit Congestion Notification: Not ECN-Capable Transport (0)
    Total Length: 33												#数据总长度，2字节
    Identification: 0x9853 (38995)									#识别码，2字节
    v Flags: 0x0000													#偏移量，2字节
        0... .... .... .... = Reserved bit: Not set
        .0.. .... .... .... = Don't fragment: Not set
        ..0. .... .... .... = More fragments: Not set
		...0 0000 0000 0000 = Fragment offset: 0
    Time to live: 54												#TTL，1字节
    Protocol: ICMP (1)												#类型码，1字节
    Header checksum: 0x9888 [validation disabled]					#首部校验和，只是检验数据，2字节
    [Header checksum status: Unverified]
    Source: 36.110.213.45											#源IP，4字节
    Destination: 10.16.80.85										#目的地IP，4字节
v Internet Control Message Protocol
    Type: 0 (Echo (ping) reply)										#类型，1字节
    Code: 0															#符号，1字节
    Checksum: 0xd2e7 [correct]										#ICMP校验和，2字节
    [Checksum Status: Good]
    Identifier (BE): 1 (0x0001)										#ID，2字节
    Identifier (LE): 256 (0x0100)
    Sequence number (BE): 848 (0x0350)								#序号，2字节
    Sequence number (LE): 20483 (0x5003)
    [Request frame: 1]												#响应分组 1
    [Response time: 44.843 ms]
    v Data (5 bytes)												#5个数据，16进制
        Data: 6162636465
        [Length: 5]

```
参考[CSDN](https://blog.csdn.net/weixin_42109012/java/article/details/103438322)
