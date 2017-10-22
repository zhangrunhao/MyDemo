const app = getApp()

Page({
  data: {
    iconUrl: 'http://oy3ywgz62.bkt.clouddn.com/jige/open-eye_03.png',
    everyDayImages: [
      'http://img1.imgtn.bdimg.com/it/u=735777041,1005463406&fm=27&gp=0.jpg',
      'http://img3.imgtn.bdimg.com/it/u=1161269879,1499625874&fm=27&gp=0.jpg',
      'http://img0.imgtn.bdimg.com/it/u=2949757311,587718453&fm=27&gp=0.jpg',
      'http://img4.imgtn.bdimg.com/it/u=1922157828,824239438&fm=27&gp=0.jpg'
    ]
  },
  goChatPage() {
    wx.navigateTo({
      url: '../chat/chat'
    })
  }
})