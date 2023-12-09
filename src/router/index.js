import VueRouter from "vue-router"
import Context from '../page/Context'
import ItemMusic from '../page/ItemMusic'
import SearchList from '../page/SearchList'

export default new VueRouter({
    mode:'hash',
    routes:[
        {
            path:'/',
            component:Context,
        },
        {
            path:'/itemMusic',
            name:'ItemMusic',
            component:ItemMusic,
            props(route){
                return {
                    id:route.query.id
                }
            }
        },
        {
            path:'/searchList',
            name:'SearchList',
            component:SearchList,
            props(route){
                return{
                    keywords:route.query.keyWords
                }
            }
        }

    ]
})