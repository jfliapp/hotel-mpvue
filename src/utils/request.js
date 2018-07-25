
class Nexwork {
  constructor() {
    this.SERVER_URL = 'http://sfs/sf.com'
  }
  // 这里设置头部 token
  getHeader() {
    const token = wx.getStorageSync('token')
    return {vp_token: `${token}`}
  }
  // c处理请求失败的数据 
  failFilter(data) {
    if(data.code !== 401) {
      wx.showToast({
        icon: 'none',
        title: data.mes
      })
    }
  }
  request(url, data, method='GET') {
    return new Promise((resolve, reject) => {
      wx.request({
        url: `${this.SERVER_URL}${url}`,
        method: method,
        header: this.getHeader(),
        data,
        success: function(res) {
          const data = res.data
          if(data.issuccess) {
            return resolve(res.data)
          }else {
            reject(this.failFilter())
          }
        },
        fail: function(err) {
          throw new Error(err)
        }
      })
    })
  }
  // get
  get(url, data) {
    return this.request(url,data,'GET')
  }
  // post
  post(url, data) {
    return this.request(url,data,'POST')
  }
}

const network = new Nexwork()
export default network

export const get = url => {
  return sendData => network.get(url, sendData)
}
