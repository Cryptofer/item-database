import Vue from 'vue'
import App from './App.vue'

import Paginate from 'vuejs-paginate'
import VTooltip from 'v-tooltip'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faTimes, faDice, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faChevronLeft, faTimes, faDice, faCog)

Vue.component('fa', FontAwesomeIcon)
Vue.component('paginate', Paginate)

Vue.use(VTooltip)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
