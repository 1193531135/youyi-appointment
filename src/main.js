import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import qs from 'querystring'
import './assets/all.css'
import { DropdownMenu, DropdownItem ,Search,Tag, Tab, Tabs, Tabbar, TabbarItem , Sticky ,Field ,Toast } from 'vant';
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Search)
Vue.use(Tag)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Sticky)
Vue.use(Field)
Vue.prototype.$Toast = Toast
Vue.config.productionTip = false
Vue.prototype.$qs = qs
Vue.prototype.$deepCopy = $deepCopy
function $deepCopy(data) {
  if (!data && (data != false) && (data != 0)) { throw `数据为空 => ${data}` }
  let container = null;
  if (data.constructor === Array) {
    container = []
    data.some((item, index) => {
      if (typeof item === 'object') {
        container[index] = $deepCopy(item)
      } else {
        container[index] = item
      }
    })
  }
  if (data.constructor === Object) {
    container = {}
    Object.keys(data).some((item) => {
      if (typeof data[item] === 'object' && data[item] != null) {
        container[item] = $deepCopy(data[item])
      } else {
        container[item] = data[item]
      }
    })
  }
  if (data.constructor != Object && data.constructor != Array) {
    container = data
  }
  return container
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
