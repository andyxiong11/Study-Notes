[微信小程序 — 常用的几种提示弹窗_icon: 'success',-CSDN博客](https://blog.csdn.net/u013987258/article/details/104538344) 

 1. 表示操作成功，文字上方会显示一个表示操作成功的图标。

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvMTQ2NDY4Ny8yMDE5MDkvMTQ2NDY4Ny0yMDE5MDkxODIzMTAxODMxMC00MzI1MTgzNTcucG5n?x-oss-process=image/format,png)

```null
wx.showToast({title: '操作成功！',  // 标题icon: 'success',   // 图标类型，默认successduration: 1500   // 提示窗停留时间，默认1500ms})
```

2.表示加载中，显示为加载中图标。

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvMTQ2NDY4Ny8yMDE5MDkvMTQ2NDY4Ny0yMDE5MDkxODIzMTExOTc2NC0xNDY0NjEyMDgucG5n?x-oss-process=image/format,png)

```null
wx.showToast({title: '加载中...',icon: 'loading',duration: 1500})
```

3.不显示图标，一般用作提示。

![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWcyMDE4LmNuYmxvZ3MuY29tL2Jsb2cvMTQ2NDY4Ny8yMDE5MDkvMTQ2NDY4Ny0yMDE5MDkxODIzMTIzMjk3NS0yMDQ2NTY0OTM2LnBuZw?x-oss-process=image/format,png)

```null
wx.showToast({title: '该功能未上线！',icon: 'none',duration: 1500})
```

以上3种弹窗均使用wx.showToast接口，调用后会根据设定的duration停留一定时间。

此外，表示加载中的弹窗还可以使用wx.showLoading接口，但调用该接口时弹窗并不会自动消失，而是需要手动调用wx.hideLoading接口使弹窗消失。

```null
// 开始加载数据wx.showLoading({title: '加载中',})// 数据加载中... // 数据加载中...// 数据加载完成，隐藏弹窗wx.hideLoading()// 或 设置定时器来隐藏弹框setTimeout(function(){   wx.hideToast()},2000)
```

还有一个 可以点击“确定”，也可以点击“取消的”弹出框

![](https://img-blog.csdn.net/20180602215659684)

```null
   wx.showModal({title: '提示',content: '这是一个模态窗口',success:function(res){if(res.confirm){console.log('弹框后点取消')          }else{console.log('弹框后点取消')          }      }   })
```

如果此文对你有帮助请点赞或者打赏哦 ^-^