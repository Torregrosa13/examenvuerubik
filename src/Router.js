import {createRouter, createWebHistory} from "vue-router"
import HomeComponent from "./components/HomeComponent.vue"
import DetailComponent from "./components/DetailComponent.vue"
import MarcaComponent from "./components/MarcaComponent.vue"
import LoginComponent from "./components/LoginComponent.vue"
import RegisterComponent from "./components/RegisterComponent.vue"
import PerfilComponent from "./components/PerfilComponent.vue"
import ComprasComponent from "./components/ComprasComponent.vue"
import PedidoComponent from "./components/PedidoComponent.vue"

const myRoutes = [
    {
        path: "/", component: HomeComponent
    },
    {
        path:"/detail/:id", component: DetailComponent
    },
    {
        path:"/selected/:marca", component: MarcaComponent
    },
    {
        path:"/login", component: LoginComponent
    },
    {
        path:"/register", component: RegisterComponent
    },
    {
        path:"/perfil", component: PerfilComponent
    },
    {
        path:"/compras", component: ComprasComponent
    },
    {
        path:"/pedidos", component: PedidoComponent
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router
