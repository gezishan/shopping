const routers=[
    {
        path:'/list',
        meta:{
            title:'商品列表'
        },
        component: (resolve)=>require(['./views/list.vue'],resolve)
    },
    {
        path:'/detail/:id',
        meta:{
            title:'商品详情'
        },
        component:(resolve)=>require(['./views/detail.vue'],resolve)
    },
    {
        path:'/cart',
        meta:{
            title:'购物车'
        },
        component:(resolve)=>require(['./views/cart.vue'],resolve)
    },
    {
        path:'/login/:loginStatus',
        meta:{
            title:'登录注册'
        },
        component:(resolve)=>require(['./views/login.vue'],resolve)
    },
    {
        path:'*',
        redirect:'/login/login'
    }
];

export default routers;
