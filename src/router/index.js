import vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter)

const introduction = () => import('../components/content/profile/introduction.vue')
const blog = () => import('../components/content/blog/blog.vue')

const routes = [
	{
		path: '',
		redirect: '/Blog',
	},
	{
		path: '/Introduction',
		component: introduction,
		meta: {
			title: '个人介绍',
		},
	},
	{
		path: '/Blog',
		component: blog,
		meta: {
			title: '博客浏览',
		},
	},
]

const router = new VueRouter({
	routes,
	mode: 'history',
})

router.beforeEach((to, from, next) => {
	document.title = to.matched[0].meta.title
	next()
})

export default router
