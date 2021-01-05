<template>
	<div id="app">
		<Header />
		<!-- <Profile /> -->
		<!-- <router-view /> -->

		<div id="content">asdsadsa</div>
		<Footer />
	</div>
</template>

<script>
import Header from './components/common/header'
import Footer from './components/common/footer'
import Profile from './views/profile'
import router from './router/index'

export default {
	router,
	name: 'App',
	components: {
		Header,
		Profile,
		Footer,
	},
}
</script>

<style>
@import './assets/css/base.css';

#app {
	text-align: center;
}

#content {
	text-align: center;
	position: fixed;
	top: 15%;
	left: 25%;
	right: 25%;
	background-color: red;
}
</style>
