Page({
  data:{
    blog:[{
      avatarUrl:'../../images/1.jpg',
      nickName:'xa',
      _createTime:1998,
      content:"akhkdasdk两岸三地拉风开发的了会的身份绿kadskhlasjlfjas;mflkams哈利和第三方拉萨的第三轮nlnfdlk",
      img:[
        '../../images/2.jpg',
        '../../images/2.jpg',
        '../../images/2.jpg',
        '../../images/2.jpg',
        '../../images/2.jpg',
        '../../images/2.jpg',
        '../../images/2.jpg',
        '../../images/2.jpg',
        '../../images/2.jpg',
        '../../images/2.jpg',
        '../../images/2.jpg',
        '../../images/2.jpg',
        '../../images/2.jpg',
        '../../images/2.jpg',
        '../../images/2.jpg',
        '../../images/2.jpg',
        '../../images/2.jpg',
        '../../images/2.jpg',
      ]
    },{
      avatarUrl:'../../images/1.jpg',
      nickName:'xa',
      _createTime:1998,
      content:"akhkdasdk两岸三地拉风开发的了会的身份绿",
      img:[
        '../../images/2.jpg',
        '../../images/2.jpg',
        '../../images/2.jpg',
        '../../images/2.jpg',
        '../../images/2.jpg',
        '../../images/2.jpg',
        '../../images/2.jpg',
        '../../images/2.jpg',
      ]
    }]
  },
  onLoad(){

  },

  onPreviewImage(event) {
    console.log(event)
    const ds = event.target.dataset
    wx.previewImage({
      urls: ds.imgs,
      current: ds.imgsrc,
    })
  },

  goComment(e){
    console.log(e)
    let content = JSON.stringify(e.currentTarget.dataset.content)
    wx.navigateTo({
      url: '/pages/index4/index4?content=' + content,
    })
  }
})