import Vue from 'vue'
import App from './App.vue'
import vueCompositionApi from '@vue/composition-api'
// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'bootstrap-vue/dist/bootstrap.css'

// Vue.use(BootstrapVue);
/* import the fontawesome core */
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBars)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(vueCompositionApi);

Vue.config.productionTip = false

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
