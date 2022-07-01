import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* add icons to the library */
library.add(faGithub)

Vue.config.productionTip = false;

// ! THIS MUST BE CHANGED THAT IT WOULD INTAKE faGithub ICON
const CUSTOM_ICONS = {
    button: { // used for the nav-icon by vuetify
        component: FontAwesomeIcon,
        props: {
            icon: ['fab', 'github']
        }
    }
};

export {
    CUSTOM_ICONS
}