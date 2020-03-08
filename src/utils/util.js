import wepy from 'wepy'
export const createRondomSrc = (num) => {
  let urlString = '';
  let strArr = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','s','y','z']
  for (let i = 0; i < num; i++) {
    urlString += strArr[Math.floor(Math.random() * 36)]
  }
  return 'hsh/' + urlString
}

// 手机验证
export const checkPhone = (phone) => {
    if(!(/^1[3456789]\d{9}$/.test(phone))){
        wepy.showLoading({
            title: '手机格式不对',
            duration: 1000,
            icon: 'warn'
        })
        return false;
    }
    return true
}
// 邮箱验证

export const checkEmail = (email) => {
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if(reg.test(email)){
      return true
    }else{
        wepy.showLoading({
            title: '邮箱格式不对',
            duration: 1000,
            icon: 'warn'
        })
        return false;
    }
}
