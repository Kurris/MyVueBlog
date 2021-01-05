<template>
	<div>
		<div id="footer">{{ getYear }} 粤ICP备2020126033号</div>
	</div>
</template>

<script>
export default {
	name: 'Footer',

	computed: {
		getYear() {
			return new Date().getFullYear().toString()
		},
	},
}
</script>

<style>
#footer {
	color: gray;
	background-color: white;
	position: fixed;
	text-align: center;
	bottom: 0px;
	left: 0px;
	right: 0px;
	height: 5%;
}
</style>
