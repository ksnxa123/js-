Page({
    data:{

    },
    onLoad(options){
        console.log(JSON.parse(options.content))
        let content = JSON.parse(options.content)
        this.setData({
            content
        })
    },
    onPreviewImage(event) {
        console.log(event)
        const ds = event.target.dataset
        wx.previewImage({
          urls: ds.imgs,
          current: ds.imgsrc,
        })
      },
})