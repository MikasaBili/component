import NotofocatonConstructor from './notification.vue'
let instance // 新建一个实例
let instances = [] // 新建一个数组来记录有几个弹出
let seed = 1
const typeMap = ['success', 'warning', 'info', 'error'] // type类型
const install = (Vue) => {
  let NotifyMain = Vue.extend(NotofocatonConstructor)
  //  函数判断
  let Notofocaton = (options) => {
    // 下面是对参数的定义
    options = options || {}
    let id = seed++
    if (typeof options === 'string') {
      //  如果用户只传一个string
      options = {
        content: options  // 内容就是options
      }
    }
    if (options.time === undefined) {
      options.time = 3000   //  初始化时间1000
    }
    // 下面是对实例的定义
    options.closeFun = Notification.close
    instance = new NotifyMain({
      data: options
    })
    instance.id = id
    instance.vm = instance.$mount() // 手动挂载实例
    instance.visible = true
    document.body.appendChild(instance.vm.$el)
    let topDist = 0
    for (let i = 0, len = instances.length; i < len; i++) {
      topDist += instances[i].$el.offsetHeight + 16
    }
    topDist += 16
    instance.top = topDist
    instances.push(instance)
    return instance.vm
  }
  // 定义notofocation的4中type的方法
  typeMap.forEach((type) => {
    Notofocaton[type] = (options) => {
      if (typeof options === 'string') {
        //  如果用户只传一个string
        options = {
          content: options  // 内容就是options
        }
      }
      options.type = type
      return Notofocaton(options)
    }
  })
  Notification.close = (id) => {
    let index
    let removedHeight
    for (var i = 0, len = instances.length; i < len; i++) {
      if (id === instances[i].id) {
        index = i
        removedHeight = instances[i].vm.$el.offsetHeight
        instances.splice(i, 1)
        break
      }
    }
    if (len > 0) {
      for (i = index; i < len - 1; i++) {
        instances[i].vm.$el.style.top = parseInt(instances[i].vm.$el.style.top) - removedHeight - 16 + 'px'
      }
    }
  }
  Vue.prototype.$notify = Notofocaton
}
export default install
