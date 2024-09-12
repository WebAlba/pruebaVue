//este archivo es el que carga
//las librerías que leer'an el codigo vue

import { createApp } from 'vue'

//importa el archivo css
import './style.css'
//importa el archivo App.vue´
//que es donde pondremos todo el codigo
import App from './App.vue'
//toda la informacion que devuelva la ejecucion del codigo App.vue
//JS lo introducir'a dentro del <div id="app"></div>
createApp(App).mount('#app')
