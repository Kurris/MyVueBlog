import vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter)

const introduction = () => import('../components/content/profile/introduction.vue')
const blog = () => import('../components/content/blog/blog.vue')
const blogDetail = () => import('../components/content/blog/blogDetail.vue')
const blogEditor = () => import('../components/content/blog/blogEditor.vue')
const blogHome = () => import('../views/bloghome.vue')
const login = () => import('../views/login.vue')
const notFound = () => import('../components/common/notfound.vue')
const profile = () => import('../components/content/profile/profile.vue')
const square = () => import('../components/content/square/square.vue')

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

const originalReplace = VueRouter.prototype.Replace
VueRouter.prototype.Replace = function Replace(location) {
	return originalReplace.call(this, location).catch(err => err)
}

const routes = [
	{
		path: '',
		redirect: '/Login',
	},
	{
		path: '/Login',
		component: login,
		meta: {
			title: '博客登录',
		},
	},
	{
		path: '/BlogHome',
		component: blogHome,
		meta: {
			title: '博客主页(*￣︶￣)',
		},
		children: [
			{
				path: 'Square',
				component: square,
				meta: {
					title: '广场',
				},
			},
			{
				path: 'Profile',
				component: profile,
				meta: {
					title: '个人信息',
				},
			},
			{
				path: 'Blog',
				component: blog,
				meta: {
					title: '博客',
				},
			},
			{
				path: 'BlogDetail',
				component: blogDetail,
				meta: {
					title: '浏览中',
				},
			},
			{
				path: 'BlogEditor',
				component: blogEditor,
				meta: {
					title: '编辑中',
				},
			},
			{
				path: 'Introduction',
				component: introduction,
				meta: {
					title: '个人介绍',
				},
			},
		],
	},
	{
		path: '/NotFound',
		component: notFound,
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
