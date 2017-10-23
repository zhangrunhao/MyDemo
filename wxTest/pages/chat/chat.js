const app = getApp()
import chatContent from '../../utils/chats-content'

const chatsLength = chatContent.length

Page({
  data: {
    // 页面中显示的聊天内容
    chatItems: [],
    // 滚动需要显示的目标
    chatTarget: '',
    // 用户点击的次数
    tapCont: 0,
    // 播放提示层高度:
    endDomeHeight: '0'
  },

  // 点击页面
  bindTapView(event) {
    // 判断是否点击到头了
    if (this.data.tapCont < chatsLength) {
      let tempChat = this.data.chatItems.concat(chatContent[this.data.tapCont])
      this.setData({
        chatItems: tempChat,
        chatTarget: 'chartItem' + this.data.tapCont
      })
    } else {
      this.setData({
        endDomeHeight: '200rpx'
      })
    }
    // 增加点击次数
    this.setData({
      tapCont: ++this.data.tapCont
    })
  },
})