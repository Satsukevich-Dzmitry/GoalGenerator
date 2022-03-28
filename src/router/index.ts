import { createRouter, createWebHistory } from 'vue-router'
import GoalsList from "../views/GoalsList.vue"

const routes = [
    {
        path: '/',
        name: 'GoalsList',
        component: GoalsList,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router