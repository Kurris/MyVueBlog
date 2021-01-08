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
  position: fixed;
  color: gray;
  bottom: 0px;
  width: 100%;
  height: 15px;
  background-color: white;
  text-align: center;
  z-index: 9;
}
</style>
