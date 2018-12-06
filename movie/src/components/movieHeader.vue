<template>
  <div id="movieHeader">
  	<span class="back" @click="back" v-if="$store.state.pageTitle != '首页' "><img src="../asset/images/back.png" /></span>
  	<h1>{{ this.$store.state.pageTitle }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'movieHeader',
    data(){
      return{}
    },
    methods:{
      back(){
        window.history.go(-1)
      }
    }
  }
</script>

<style scoped>
	#movieHeader{ width: 100%; max-width: 7.5rem; height: 0.88rem; box-sizing: border-box; padding: 0 0.3rem; background-color:#3075A9; position: fixed; top: 0; left: 0; z-index: 1; }
	#movieHeader .back{ position: absolute; left: 0; top: 0; width: 0.5rem; height: 100%; padding-left: 0.3rem; display: flex; align-items: center; }
	#movieHeader .back img{ width: 0.17rem; height: 0.3rem; }
	#movieHeader h1{ width: 50%; line-height: 0.88rem; margin: 0 auto; text-align: center; color: #fff; font-size: 0.32rem; font-weight: 100; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
</style>
