基本上所有接口都支持GET/POST两种方式

接口授权方式为，使用用户名密码请求登录接口，从响应中获取到Admin-Token，请求其他接口时将Admin-Token添加到请求头中，格式为：Admin-Token=…

CRM常见概念

CRM： 客户关系管理平台，用于收集潜在客户线索，发现商机，跟进客户，促成成交等

线索：收集到的原始客户信息，待核实确认

客户：有潜在购买需求的公司或单位

联系人：客户单位的联系人

商机：客户或潜在客户的某次购买意愿和倾向

线上接口地址: base_url=https://www.72crm.com
通用接口
# 登录
请求方法：POST/GET

接口地址：/api/login

内容类型：application/x-www-form-urlencoded

示例请求


username=***&password=***

| 参数名 | 解释|

| — | — |

|username |用户名 |

|password |密码 |

示例响应


{

"code": 0,

"Admin-Token": "f16efb1b6a1c471c920760e838a37397",

"user": {

"deptName": "全公司",

"img": null,

"createTime": "2020-10-09 14:21:04",

"lastLoginTime": "2020-10-09 16:32:00",

"companyId": "1314450786960412672",

"num": null,

"sex": null,

"companyName": "临渊",

"mobile": "18010181267",

"realname": "admin",

"parentName": null,

"post": "标准岗位",

"userId": 28510,

"parentId": null,

"lastLoginIp": "111.194.126.253",

"deptId": 28856,

"oldUserId": null,

"email": null,

"username": "18010181267",

"status": 1

},

"auth": {

...

},

"isAdmin": true,

"cardAuth": false,

"emailId": null,

"isReadNotice": 1,

"firstModel": null,

"call": 0

}

# 获取字段选项
获取表单相关字段选项，如线索来源等

请求方法：POST/GET

接口地址：/api/field/queryField

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


label=1

| 参数名 | 解释|

| — | — |

|label |类型1.线索 2.客户 3.联系人 4.产品 5.商机|

示例响应


{

"code": 0,

"data": [

...

{

"fieldId": 2398372,

"formType": "select",

"authLevel": 3,

"isNull": 0,

"isUnique": 0,

"inputTips": null,

"defaultValue": "",

"label": 1,

"type": 3,

"fieldName": "线索来源",

"setting": [

"促销",

"搜索引擎",

"广告",

"转介绍",

"线上注册",

"线上询价",

"预约上门",

"陌拜",

"电话咨询",

"邮件咨询"

],

"name": "线索来源",

"options": "促销,搜索引擎,广告,转介绍,线上注册,线上询价,预约上门,陌拜,电话咨询,邮件咨询",

"value": "",

"fieldType": 2

},

...

]

}

# 获取筛选场景
获取线索/客户/商机等列表筛选场景

请求方法：POST/GET

接口地址：/api/scene/queryScene

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


type=1

| 参数名 | 解释|

| — | — |

|type |类型1.线索 2.客户 3.联系人 4.产品 5.商机|

示例响应


{

"code": 0,

"data": [

{

"isSystem": 1,

"bydata": null,

"data": "{\"is_transform\":{\"condition\":\"is\",\"name\":\"is_transform\",\"value\":0}}",

"sceneId": 434349,

"name": "全部线索",

"isDefault": 0

},

...

]

}

# 添加筛选场景
获取线索/客户/商机等列表筛选场景

请求方法：POST/GET

接口地址：/api/scene/addScene

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


type=2&isDefault=0&name=成交客户&data={"deal_status":{"condition":"is","value":1,"formType":"dealStatus","name":"deal_status"}}

1
2
3
| 参数名 | 解释|

| — | — |

|type |类型1.线索 2.客户 3.联系人 4.产品 5.商机|

|isDefault |是否默认场景|

|name |场景名称|

|data |具体筛选参数|

示例响应


{

"code": 0

}

# 跟进
跟进线索/客户/商机

请求方法：POST/GET

接口地址：/api/CrmLeads/addOrUpdate

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


activityType=1&activityTypeId=927662&content=跟进线索1&category=打电话&businessIds=&contactsIds=&nextTime=2020-10-16 00:00:00&isEvent=0

| 参数名 | 解释|

| — | — |

|activityType |活动类型1.线索 2.客户 3.联系人 4.产品 5.商机|

|content |跟进内容|

|category |跟进类型|

|businessIds |关联商机id|

|contactsIds |关联联系id|

|nextTime |下次联系时间|

|isEvent ||

示例响应


{

"code": 0

}

# 线索
线索新增/修改
请求方法：POST/GET

接口地址：/api/CrmLeads/addOrUpdate

内容类型：application/json

授权方法：请求头中携带Admin-Token

示例请求


{

"entity": {

"leads_name": "线索3",

"mobile": "18010181267",

"telephone": "",

"email": "",

"address": "",

"next_time": "",

"remark": ""

}

}

| 参数名 | 解释|

| — | — |

|leadsId |线索id，包含线索id时为修改，不包含时为新增 |

|leads_name |线索名称 |

|mobile |手机 |

|email |邮件 |

|address |地址 |

|next_time |下次联系时间 |

|remark |备注 |

示例响应


{

"code": 0

}

## 线索列表
无参时返回默认列表，支持按场景筛选和高级筛选

请求方法：POST/GET

接口地址：/api/CrmLeads/queryPageList

内容类型：application/json

授权方法：请求头中携带Admin-Token

示例请求


{"page":1,"limit":15,"search":"","type":1,"sceneId":434350,"data":{"mobile":{"condition":"contains","value":"18010181267","formType":"mobile","name":"mobile"}}}

| 参数名 | 解释|

| — | — |

|page |页码 |

|limit |每页条数 |

|search |搜索关键字 |

|type |类型 1.线索 2.客户 3.联系人 4.产品 5.商机 |

|sceneId |筛选场景id |

|data |高级筛选条件 |

示例响应


{

"code": 0,

"data": {

"totalRow": 7,

"list": [

{

"ownerUserName": "admin",

"createUserName": "admin",

"batchId": "7b1110923eab47e58b0e0bad45685553",

"remark": "",

"客户行业": null,

"线索来源": null,

"isTransform": 0,

"leadsId": 927847,

"updateTime": "2020-10-10 11:30:52",

"nextTime": null,

"lastTime": null,

"leadsName": "线索3",

"email": null,

"客户级别": null,

"createUserId": 28510,

"address": "",

"createTime": "2020-10-10 11:30:52",

"companyId": "1314450786960412672",

"star": 0,

"ownerUserId": 28510,

"mobile": "18010181267",

"telephone": "",

"fieldBatchId": "7b1110923eab47e58b0e0bad45685553",

"lastContent": null,

"followup": null,

"oldLeadsId": null,

"customerId": null

},

...

]

}

}

## 线索详情
请求方法：POST/GET

接口地址：/api/CrmLeads/queryById

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


leadsId=927847

1
2
3
| 参数名 | 解释|

| — | — |

|leadsId |线索id|

示例响应


{

"code": 0,

"data": {

"createUserId": 28510,

"address": "",

"createTime": "2020-10-10 11:30:52",

"companyId": "1314450786960412672",

"star": 0,

"ownerUserId": 28510,

"batchId": "7b1110923eab47e58b0e0bad45685553",

"mobile": "18010181267",

"telephone": "",

"remark": "",

"isTransform": 0,

"lastContent": null,

"followup": null,

"leadsId": 927847,

"updateTime": "2020-10-10 11:30:52",

"oldLeadsId": null,

"nextTime": null,

"lastTime": null,

"name": "线索3",

"ownerUserName": "admin",

"leadsName": "线索3",

"customerId": null,

"email": null

}

}

## 线索转移
转移给其他人负责

请求方法：POST/GET

接口地址：/api/CrmLeads/changeOwnerUser

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


leadsIds=927847,927846

newOwnerUserId: 28517

| 参数名 | 解释|

| — | — |

|leadsIds |线索id,多个以英文逗号分开|

|newOwnerUserId |新负责人用户id|

示例响应


{"code":0}

## 线索转化为客户
请求方法：POST/GET

接口地址：/api/CrmLeads/transfer

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


leadsIds=927847,927846

| 参数名 | 解释|

| — | — |

|leadsIds |线索id,多个以英文逗号分开|

示例响应


{"code":0}

{"code": 500,"msg": "已转化线索不能再次转化"}

{"code":500,"msg":"客户名称已存在"}

## 线索批量删除
批量删除线索

请求方法：POST/GET

接口地址：/api/CrmLeads/deleteByIds

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


leadsIds=927847,927846

| 参数名 | 解释|

| — | — |

|leadsIds |线索id,多个以英文逗号分开|

示例响应


{

"code": 0

}

## 线索导入
通过Excel批量导入线索

请求方法：POST/GET

接口地址：/api/CrmLeads/uploadExcel

内容类型：multipart/form-data

授权方法：请求头中携带Admin-Token

示例请求


| 参数名 | 解释|

| — | — |

|repeatHandling |重复处理 1.覆盖|

|ownerUserId |所属用户id|

|file |上传的xls文件|

示例响应


{

"code": 0,

"data": 191383

}

## 线索批量导出
批量导出线索为Excel

请求方法：POST/GET

接口地址：/api/CrmLeads/batchExportExcel

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


leadsIds=927847,927846

| 参数名 | 解释|

| — | — |

|leadsIds |线索id,多个以英文逗号分开|

示例响应

xls二进制文件流

## 线索全部导出
批量导出线索为Excel

请求方法：POST/GET

接口地址：/api/CrmLeads/allExportExcel

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


search=

| 参数名 | 解释|

| — | — |

|search ||

示例响应

xls二进制文件流

客户
客户新增/修改
请求方法：POST/GET

接口地址：/api/CrmCustomer/addOrUpdate

内容类型：application/json

授权方法：请求头中携带Admin-Token

示例请求


{

"entity": {

"customer_name": "韩志超2",

"mobile": "18010181267",

"telephone": "",

"website": "",

"email": "",

"next_time": "2020-10-31 00:00:00",

"remark": "",

"address": "北京市,北京城区,东城区",

"detailAddress": "朝阳门",

"location": "",

"lng": "",

"lat": ""

}

}

| 参数名 | 解释|

| — | — |

|customerId |客户id，包含客户id时为修改，不包含时为新增 |

|customer_name |客户名称 |

|telephone |电话 |

|email |邮件 |

|address |地址 |

|detailAddress |详细地址 |

|next_time |下次联系时间 |

|location |位置 |

|lng |经度 |

|lat |维度 |

|remark |备注 |

示例响应


{

"code": 0

}

# 客户列表
无参时返回默认列表，支持按场景筛选和高级筛选

请求方法：POST/GET

接口地址：/api/CrmCustomer/queryPageList

内容类型：application/json

授权方法：请求头中携带Admin-Token

示例请求


{"page":1,"limit":15,"search":"","type":2,"data":{"mobile":{"condition":"contains","value":"18010181267","formType":"mobile","name":"mobile"}}}

| 参数名 | 解释|

| — | — |

|page |页码 |

|limit |每页条数 |

|search |搜索关键字 |

|type |类型 1.线索 2.客户 3.联系人 4.产品 5.商机 |

|sceneId |筛选场景id |

|data |高级筛选条件 |

示例响应


{

"code": 0,

"data": {

"totalRow": 4,

"list": [

{

"ownerUserName": "admin",

"createUserName": "admin",

"batchId": "1acb1f8e230d435ca21b0b5b37857030",

"客户来源": "促销",

"contactsName": "韩志超",

"dealTime": null,

"remark": "",

"客户行业": "",

"contactsMobile": "18010181267",

"updateTime": "2020-10-09 15:06:46",

"poolDay": 7,

"nextTime": "2020-10-16 00:00:00",

"lastTime": null,

"businessCount": 3,

"rwUserId": ",",

"email": null,

"lat": "",

"客户级别": "A（重点客户）",

"dealStatus": 0,

"createUserId": 28510,

"isReceive": null,

"website": "",

"address": "",

"lng": "",

"createTime": "2020-10-09 15:06:46",

"companyId": "1314450786960412672",

"star": 0,

"ownerUserId": 28510,

"roUserId": ",",

"detailAddress": "",

"mobile": "18010181267",

"receiveTime": "2020-10-09 15:06:46",

"telephone": "",

"oldCustomerId": null,

"contactsAddress": "",

"preOwnerUserId": null,

"fieldBatchId": "1acb1f8e230d435ca21b0b5b37857030",

"lastContent": null,

"followup": null,

"poolTime": null,

"isLock": 0,

"contactsId": 409447,

"location": "",

"customerName": "线索1",

"customerId": 4156588,

"status": 1

},

...

]

}

}

## 客户详情
请求方法：POST/GET

接口地址：/api/CrmCustomer/queryById

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


customerId=4156484

| 参数名 | 解释|

| — | — |

|customerId |客户id|

示例响应


{

"code":0,

"data":{

"batchId":"a5107b6ffa00490eb8236c63b6b074ca",

"客户来源":"促销",

"dealTime":null,

"remark":"",

"isPool":0,

"客户行业":"IT",

"updateTime":"2020-10-09 14:37:54",

"nextTime":"2020-10-31 00:00:00",

"lastTime":"2020-10-09 14:37:54",

"ownerUserName":"admin",

"rwUserId":",",

"email":null,

"lat":"",

"客户级别":"A（重点客户）",

"dealStatus":0,

"createUserId":28510,

"isReceive":null,

"website":"",

"address":"北京市,北京城区,东城区",

"lng":"",

"createTime":"2020-10-09 14:37:54",

"companyId":"1314450786960412672",

"star":0,

"ownerUserId":28510,

"roUserId":",",

"detailAddress":"朝阳门",

"mobile":"18010181267",

"receiveTime":"2020-10-09 14:37:54",

"telephone":"",

"oldCustomerId":null,

"preOwnerUserId":null,

"lastContent":null,

"followup":null,

"poolTime":null,

"isLock":0,

"contactsId":null,

"location":"",

"customerName":"韩志超2",

"customerId":4156484,

"status":1

}

}

## 客户批量修改成交状态
转移给其他人负责

请求方法：POST/GET

接口地址：/api/CrmCustomer/setDealStatus

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


dealStatus=1&ids=4156484

| 参数名 | 解释|

| — | — |

|dealStatus |成交状态 0.未成交 1.成交|

|ids |客户id,多个以英文逗号隔开|

示例响应


{"code":0}

## 客户批量转移
请求方法：POST/GET

接口地址：/api/CrmCustomer/transfer

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


newOwnerUserId: 28517

transferType: 1

customerIds: 4156484,4156480

changeType: 1

| 参数名 | 解释|

| — | — |

|newOwnerUserId |新用户id|

|transferType |转移类型|

|customerIds |客户id,多个以逗号隔开|

|changeType |变更类型|

示例响应


{"code":0}

## 客户放入公海
请求方法：POST/GET

接口地址：/api/CrmCustomer/updateCustomerByIds

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


ids: 4156484

poolId: 46155

| 参数名 | 解释|

| — | — |

|ids |客户id,多个以逗号隔开|

|poolId |公海id|

示例响应


{"code":0}

## 客户批量删除
批量删除客户

请求方法：POST/GET

接口地址：/api/CrmCustomer/deleteByIds

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


customerIds=4158571,4156588

| 参数名 | 解释|

| — | — |

|customerIds |客户id,多个以英文逗号分开|

示例响应


{

"code": 0

}

## 客户批量锁定/解锁
请求方法：POST/GET

接口地址：/api/CrmCustomer/lock

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


status: 2

ids: 4156480

| 参数名 | 解释|

| — | — |

|ids |客户id,多个以英文逗号分开|

|status |状态 1.解锁 2.锁定|

示例响应


{

"code": 0

}

## 客户导入
通过Excel批量导入客户

请求方法：POST/GET

接口地址：/api/CrmCustomer/uploadExcel

内容类型：multipart/form-data

授权方法：请求头中携带Admin-Token

示例请求


| 参数名 | 解释|

| — | — |

|repeatHandling |重复处理 1.覆盖|

|ownerUserId |所属用户id|

|file |上传的xls文件|

示例响应


{

"code": 0,

"data": 191383

}

## 客户批量导出
批量导出客户为Excel

请求方法：POST/GET

接口地址：/api/CrmCustomer/batchExportExcel

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


ids: 4156480

| 参数名 | 解释|

| — | — |

|ids |客户id,多个以英文逗号分开|

示例响应

xls二进制文件流

## 客户全部导出
批量导出客户为Excel

请求方法：POST/GET

接口地址：/api/CrmCustomer/allExportExcel

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


search=

| 参数名 | 解释|

| — | — |

|search |搜索关键词|

示例响应

xls二进制文件流

# 联系人
联系人新增/修改
请求方法：POST/GET

接口地址：/api/CrmContacts/addOrUpdate

内容类型：application/json

授权方法：请求头中携带Admin-Token

示例请求


{

"entity":{

"name":"寒池",

"customer_id":4156480,

"mobile":"18010181267",

"telephone":"",

"email":"",

"post":"采购经理",

"address":"",

"next_time":"",

"remark":""

}

}

| 参数名 | 解释|

| — | — |

|contactsId |联系人id，包含联系人id时为修改，不包含时为新增 |

|name |联系人名称 |

|customer_id |客户id |

|telephone |电话 |

|email |邮件 |

|address |地址 |

|next_time |下次联系时间 |

|post |职位 |

|remark |备注 |

示例响应


{

"code": 0

}

## 联系人列表
无参时返回默认列表，支持按场景筛选和高级筛选

请求方法：POST/GET

接口地址：/api/CrmContacts/queryPageList

内容类型：application/json

授权方法：请求头中携带Admin-Token

示例请求


{"page":1,"limit":15,"search":"","type":2,"data":{"mobile":{"condition":"contains","value":"18010181267","formType":"mobile","name":"mobile"}}}

| 参数名 | 解释|

| — | — |

|page |页码 |

|limit |每页条数 |

|search |搜索关键字 |

|type |类型 1.线索 2.联系人 3.联系人 4.产品 5.商机 |

|sceneId |筛选场景id |

|data |高级筛选条件 |

示例响应


{

"code":0,

"data":{

"totalRow":3,

"list":[

{

"ownerUserName":"admin",

"createUserName":"admin",

"batchId":"641ddcb772bc458e8248e930bcb9535b",

"是否关键决策人":"是",

"remark":"",

"updateTime":"2020-10-10 14:58:48",

"nextTime":null,

"post":"采购经理",

"lastTime":null,

"email":null,

"createUserId":28510,

"address":"",

"oldContactsId":null,

"createTime":"2020-10-10 14:56:35",

"companyId":"1314450786960412672",

"star":0,

"ownerUserId":28510,

"mobile":"18010181267",

"telephone":"111",

"fieldBatchId":"641ddcb772bc458e8248e930bcb9535b",

"性别":"",

"name":"寒池",

"contactsId":409650,

"customerName":"韩志超2",

"customerId":4156480

},

...

]

}

}

## 联系人详情
请求方法：POST/GET

接口地址：/api/CrmCustomer/queryById

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


contactsId=409650

| 参数名 | 解释|

| — | — |

|contactsId |联系人id|

示例响应


{

"code":0,

"data":{

"createUserId":28510,

"address":"",

"oldContactsId":null,

"createTime":"2020-10-10 14:56:35",

"companyId":"1314450786960412672",

"star":0,

"ownerUserId":28510,

"batchId":"641ddcb772bc458e8248e930bcb9535b",

"是否关键决策人":"是",

"mobile":"18010181267",

"telephone":"111",

"remark":"",

"性别":"",

"updateTime":"2020-10-10 14:58:48",

"nextTime":null,

"post":"采购经理",

"lastTime":null,

"name":"寒池",

"contactsId":409650,

"customerName":"韩志超2",

"customerId":4156480,

"email":null

}

}

## 联系人批量修改成交状态
转移给其他人负责

请求方法：POST/GET

接口地址：/api/CrmCustomer/setDealStatus

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


dealStatus=1&ids=4156484

| 参数名 | 解释|

| — | — |

|dealStatus |成交状态 0.未成交 1.成交|

|ids |联系人id,多个以英文逗号隔开|

示例响应


{"code":0}

## 联系人批量转移
请求方法：POST/GET

接口地址：/api/CrmContacts/transfer

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


newOwnerUserId: 28517

contactsIds: 409448

| 参数名 | 解释|

| — | — |

|newOwnerUserId |新用户id|

|contactsIds |联系人id,多个以逗号隔开|

示例响应


{"code":0}

## 联系人批量删除
批量删除联系人

请求方法：POST/GET

接口地址：//api/CrmContacts/deleteByIds

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


contactsIds=409650

| 参数名 | 解释|

| — | — |

|contactsIds |联系人id,多个以英文逗号分开|

示例响应


{

"code": 0

}

## 联系人导入
通过Excel批量导入联系人

请求方法：POST/GET

接口地址：/api/CrmContacts/uploadExcel

内容类型：multipart/form-data

授权方法：请求头中携带Admin-Token

示例请求


| 参数名 | 解释|

| — | — |

|repeatHandling |重复处理 1.覆盖|

|ownerUserId |所属用户id|

|file |上传的xls文件|

示例响应


{

"code": 0,

"data": 191383

}

## 联系人批量导出
批量导出联系人为Excel

请求方法：POST/GET

接口地址：/api/CrmContacts/batchExportExcel

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


ids: 4156480

| 参数名 | 解释|

| — | — |

|ids |联系人id,多个以英文逗号分开|

示例响应

xls二进制文件流

## 联系人全部导出
批量导出联系人为Excel

请求方法：POST/GET

接口地址：/api/CrmContacts/allExportExcel

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


search=

| 参数名 | 解释|

| — | — |

|search |搜索关键词|

示例响应

xls二进制文件流

# 商机
商机新增/修改
请求方法：POST/GET

接口地址：/api/CrmBusiness/addOrUpdate

内容类型：application/json

授权方法：请求头中携带Admin-Token

示例请求


{

"entity":{

"business_name":"hello",

"customer_id":4156480,

"money":"",

"deal_date":"2020-10-05 00:00:00",

"type_id":23934,

"status_id":83318,

"remark":"",

"totalPrice":0,

"discountRate":0

},

"field":[

],

"product":[

]

}

| 参数名 | 解释|

| — | — |

|contactsId |商机id，包含商机id时为修改，不包含时为新增 |

|business_name |商机名称 |

|customer_id |客户id |

|money |电话 |

|deal_date |预计成交日期 |

|type_id |商机状态组 |

|status_id |商机阶段 |

|totalPrice |总价 |

|discountRate |折扣 |

|remark |备注 |

示例响应


{

"code": 0

}

## 商机列表
无参时返回默认列表，支持按场景筛选和高级筛选

请求方法：POST/GET

接口地址：https://www.72crm.com/api/CrmBusiness/queryPageList

内容类型：application/json

授权方法：请求头中携带Admin-Token

示例请求


{"page":1,"limit":15,"search":"","type":5}

| 参数名 | 解释|

| — | — |

|page |页码 |

|limit |每页条数 |

|search |搜索关键字 |

|type |类型 1.线索 2.商机 3.商机 4.产品 5.商机 |

|sceneId |筛选场景id |

|data |高级筛选条件 |

示例响应


{

"code":0,

"data":{

"totalRow":4,

"money":{

"businessSumMoney":"60.00"

},

"list":[

{

"ownerUserName":"admin",

"typeName":"销售流程商机组",

"createUserName":"admin",

"batchId":"26f51422baf641a080d284bbc1b7c783",

"remark":"",

"discountRate":"0.00",

"updateTime":"2020-10-10 15:47:01",

"statusId":83318,

"nextTime":null,

"rate":"20",

"lastTime":null,

"progressBar":"1/4",

"rwUserId":",",

"statusRemark":"",

"businessName":"hello",

"createUserId":28510,

"dealDate":"2020-10-05 00:00:00",

"totalPrice":"0.00",

"createTime":"2020-10-10 15:47:01",

"companyId":"1314450786960412672",

"star":0,

"ownerUserId":28510,

"typeId":23934,

"roUserId":",",

"statusName":"验证客户",

"isEnd":0,

"fieldBatchId":"26f51422baf641a080d284bbc1b7c783",

"money":null,

"oldBusinessId":null,

"contactsId":null,

"customerName":"韩志超2",

"customerId":4156480,

"businessId":19751,

"status":1

},

...

]

}

}

## 商机详情
请求方法：POST/GET

接口地址：/api/CrmBusiness/queryById

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


businessId=19751

| 参数名 | 解释|

| — | — |

|businessId |商机id|

示例响应


{

"code":0,

"data":{

"typeName":"销售流程商机组",

"ownerUserName":"admin",

"createUserName":"admin",

"batchId":"26f51422baf641a080d284bbc1b7c783",

"remark":"",

"discountRate":"0.00",

"updateTime":"2020-10-10 15:47:01",

"statusId":83318,

"nextTime":null,

"lastTime":null,

"rwUserId":",",

"statusRemark":"",

"businessName":"hello",

"createUserId":28510,

"dealDate":"2020-10-05 00:00:00",

"totalPrice":"0.00",

"createTime":"2020-10-10 15:47:01",

"companyId":"1314450786960412672",

"star":0,

"ownerUserId":28510,

"typeId":23934,

"roUserId":",",

"statusName":"验证客户",

"isEnd":0,

"money":null,

"oldBusinessId":null,

"contactsId":null,

"customerName":"韩志超2",

"customerId":4156480,

"businessId":19751,

"status":1

}

}

## 商机批量转移
请求方法：POST/GET

接口地址：/api/CrmBusiness/transfer

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


newOwnerUserId: 28517

transferType: 1

businessIds: 19751

| 参数名 | 解释|

| — | — |

|newOwnerUserId |新用户id|

|businessIds |商机id,多个以逗号隔开|

|transferType |转移类型 1: 转出|

示例响应


{"code":0}

## 商机批量删除
批量删除商机

请求方法：POST/GET

接口地址：/api/CrmBusiness/deleteByIds

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


businessIds=19751

| 参数名 | 解释|

| — | — |

|businessIds |商机id,多个以英文逗号分开|

示例响应


{

"code": 0

}

## 商机导入
通过Excel批量导入商机

请求方法：POST/GET

接口地址：/api/CrmBusiness/uploadExcel

内容类型：multipart/form-data

授权方法：请求头中携带Admin-Token

示例请求


| 参数名 | 解释|

| — | — |

|repeatHandling |重复处理 1.覆盖|

|ownerUserId |所属用户id|

|file |上传的xls文件|

示例响应


{

"code": 0,

"data": 191383

}

## 商机批量导出
批量导出商机为Excel

请求方法：POST/GET

接口地址：/api/CrmBusiness/batchExportExcel

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


ids: 4156480

| 参数名 | 解释|

| — | — |

|ids |商机id,多个以英文逗号分开|

示例响应

xls二进制文件流

## 商机全部导出
批量导出商机为Excel

请求方法：POST/GET

接口地址：/api/CrmBusiness/allExportExcel

内容类型：application/x-www-form-urlencoded

授权方法：请求头中携带Admin-Token

示例请求


search=

| 参数名 | 解释|

| — | — |

|search |搜索关键词|

示例响应

xls二进制文件流