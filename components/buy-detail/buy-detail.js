/**
 * by use in page:buy-history
 */
import { STORAGE_KEY } from '../../utils/constants'

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        data: {
            type: Object,
            shopUrl: '',
            value: {
                id: 1,
                productDesc: '小香风蕾丝连衣裙女夏2018新款秋季中长款气质超仙无袖小个子裙子',
                favorable: '98',
                originPrice: 1234,
                salePrice: 248,
                imageUrl: 'https://img.alicdn.com/imgextra/i1/84714233/TB2XcWIsS3PL1JjSZFxXXcBBVXa_!!84714233-0-beehive-scenes.jpg_280x380xz.jpg',
                productImgs: [],
                productSizes: [],
                types:'',
                state:''
            },
            observer(newVal, oldVal) {
                this.changeData(newVal)
            }
        },
        state: {
            type: String,
            value: ''
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        item: {}
    },

    /**
     * 组件的方法列表
     */
    methods: {
        changeData(data) {
            this.setData({
              item: data
            })
            return data
          },
        onGoPath() {
            wx.setStorage({
                key: STORAGE_KEY.PRODUCT_DETAIL,
                data: this.data.item,
              })
              console.log('buy-detail',this.data.item)   
            this.triggerEvent('detail')
        }
    }
})  