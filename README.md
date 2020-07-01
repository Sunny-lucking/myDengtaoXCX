# 功能展示
##  首页界面总体展示

![](https://imgkr.cn-bj.ufileos.com/4f66d14d-444d-401f-b865-8abc3c642b42.png)

![](https://imgkr.cn-bj.ufileos.com/97dc4628-9a62-4ad9-a419-27e2bda1d46e.png)

### 轮播图
利用的是小程序文档给出的swiper组件。
### 搜索框
利用vant-weapp的输入框组件van-search。实现了根据关键词展示搜索出来的商品列表。
### 商品分类
**利用flex布局 实现弹性布局**，方便简单。点击进入相应类别的商品列表展示。
### 推荐商品列表
对于每个商品卡片内部的布局也是采用**flex布局**。
卡片较难实现的是对于价格是显示区间还是显示单价

```
<view class="product-price" wx:if="{{item.retailPrice !== item.maxRetailPrice}}">￥{{item.retailPrice}}- {{item.maxRetailPrice}}
```
其中商品列表的显示实现了**下拉加载**的功能，避免一次性加载过多数据而导致卡顿

## 分类页展示

![](https://imgkr.cn-bj.ufileos.com/362b14f0-6d00-4c21-b8d7-ea26aae66e58.png)

### 搜索框
虽然界面跟首页的有点不一样，实际上是一样的功能
### 分类菜单栏
采用flex布局，左边菜单栏固定宽度，右边列表自适应`flex：1`


## 商品详情页

![](https://imgkr.cn-bj.ufileos.com/a0976924-f7dc-4f28-babf-0d7171f08fa1.png)
### 轮播图
展示商品图片，点击图片可进入大图预览模式

```js
previewImg(index){
    var that = this
    wx.previewImage({
        current: that.productImg[index],     //当前图片地址
        urls: that.productImg,               //所有要预览的图片的地址集合 数组形式
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
    })
},
```
### 分享按钮
点击可分享给微信好友或群聊

```
 <button open-type='share'></button>
```
将button按钮覆盖在图标上面，然后透明化按钮
### 收藏按钮
点击可将该商品收藏，就会添加到我的收藏页面，再次点击可取消收藏
### 查看规格
可以看看不同规格不同价位，如图所示

![](https://imgkr.cn-bj.ufileos.com/621e6184-bd66-4578-b937-b4c75583fa17.png)
### 智能配灯按钮
点击按钮可进入智能配灯页面
## 智能配灯页面

![](https://imgkr.cn-bj.ufileos.com/c830ddb7-664b-4fe0-9ba9-538dd732e60e.png)
可移动相应商品的图片，进行拖拽和拉伸
可选择更换系统提供的背景图片，或者拍照当背景，保存当前摆设的图片，以及返回详情页。

## 以图搜灯页展示

![](https://imgkr.cn-bj.ufileos.com/f69ee583-2439-463b-a002-15af793e9a40.png)
主要的功能就是拍照或者从相册里选择一张图片上传后，返回跟照片商品相似的列表。

## 会员中心页展示

![](https://imgkr.cn-bj.ufileos.com/22cd72fe-58ba-4f9c-8cf7-25aa39bba343.png)
点击账户管理可更改个人信息
### 发现页
点击相应的选项卡进入相应的页面


## 我的收藏页
可删除对应的收藏记录
![](https://imgkr.cn-bj.ufileos.com/fd394641-b9f3-41ca-8c15-af05e4c06cf7.png)

## 我的足迹页
可查找对应的记录，以及删除记录
![](https://imgkr.cn-bj.ufileos.com/746be827-6ca0-462e-b750-4d5cd0cf00c2.png)

### 商品分类页
根据首页商品分类点击进来或者搜索框关键词搜索进来的界面。
![](https://imgkr.cn-bj.ufileos.com/f611e15e-7d8d-443f-b41f-b2278e4a2664.png)

![](https://imgkr.cn-bj.ufileos.com/9b033531-29a9-44a7-b143-5a30a232a508.png)

#### 点击分类出现新的菜单栏列表

![](https://imgkr.cn-bj.ufileos.com/7372ee91-93d7-4791-a941-96366e1cb058.png)

#### 点击价格可以筛选对应价格区间的商品

![](https://imgkr.cn-bj.ufileos.com/7ad8ee0c-e737-4b89-9f57-d6b4757bd1e7.png)





