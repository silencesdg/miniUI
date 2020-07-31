// components/dots/index.js
/*
  swiper组件自定义的指示器
*/
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: {
      type:Number,
      value:0
    },
    current: {
      type:Number,
      value:-1,
      observer:function(val) {
        this.init(val)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    classes:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    init(val) {
      let arr = []
        for (let i = 0; i < this.data.count; i++) {
          if(i == val) {
            arr[i] = 'animate-range active'
          }
          else if (Math.abs(i - val) == 1) {
            arr[i] = 'animate-range active-next'
          } else if (Math.abs(i - val) == 2) {
            arr[i] = 'animate-range active-next-next'
          }

        }
        this.setData({
          classes:arr
        })
    }
  }
})
