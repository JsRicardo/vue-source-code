import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue) // 实现_init方法   实现了created生命周期之前的数据处理 实现了数据的代理 响应式
stateMixin(Vue) // 实现了$set $watch $delete
eventsMixin(Vue) // 实现$on $once $off $emit等事件处理初始化
lifecycleMixin(Vue) // 生命周期相关  $forceUpdate $destroy _update(和虚拟dom的patch算法息息相关，)
renderMixin(Vue) // 实现实例中的 $nextTick _render方法(调用自定义的render方法)    在当前节点下挂载 父节点

export default Vue
