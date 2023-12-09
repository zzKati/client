import Vue from 'vue'
import App from './App.vue'
import { Button,Input,Carousel, CarouselItem } from 'element-ui'
import './css/reset.css'
import VueRouter from 'vue-router'
import store  from './store/index'
import router from './router/index'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.component(Button.name,Button)
Vue.component(Input.name,Input)
Vue.component(Carousel.name,Carousel)
Vue.component(CarouselItem.name,CarouselItem)


new Vue({
  render: h => h(App),
  router:router,
  store,
}).$mount('#app')
