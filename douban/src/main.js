// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.directive('scrolls',{
	bind:function(el,binding){
		window.onscroll=function(){
			var windowH=window.innerHeight;
			var scrollTop=window.scrollTop;
			var bodyH=document.body.offsetHeight;
			if(windowH+scrollTop>=bodyH-50){
				console.log(binding.value())
			}
		}
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
