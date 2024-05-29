[微信支付报jsapi缺少参数：total_fee? | 微信开放社区](https://developers.weixin.qq.com/community/develop/doc/000aacf75dcb30d95e8a276b451400) 

 你好， 请按照以下四点检查：

1）package参数格式错误，package参数格式应该是这样： package:"prepay_id=wx201612032137789b201de80e0661234657"

2）package参数没有获取，返回null。

3）请检查预支付会话标识prepay_id是否已失效

4）请求的appid与下单接口的appid是否一致 

官方回答：[https://developers.weixin.qq.com/community/develop/doc/000eca8d8143a080bacbecfd351009?_at=1637566120517](https://developers.weixin.qq.com/community/develop/doc/000eca8d8143a080bacbecfd351009?_at=1637566120517)

这个我之前遇到过，是因为传递的参数和加密不对，base64 的 加密问题，注意参数的大小写和加密的 jar 包，太难排查了，这个问题。