import {
  request
} from './request'
// 请求详情页商品数据
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
// 请求详情页推荐数据
export function getRecommend() {
  return request({
    url: 'recommend'
  })
}

// 详情页顶部商品数据
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.desc = itemInfo.desc
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}
// 详情页店铺数据
export class shopInfo {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.title = shopInfo.name
    this.sells = shopInfo.cSells
    this.goodsCount = shopInfo.cGoods
    this.score = shopInfo.score
  }
}
// 详情页商品配置信息
export class goodsParams {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set
    this.rule = rule.tables
  }
}
