<template>
  <div id="movieHeader">
  	<router-link to="/" exact>
  		<img src="../asset/images/foot1.png" />
  		<img class="active_img" src="../asset/images/foot_active1.png" />
  		<span>首页</span>
  	</router-link>
  	<router-link to="/MovieList" :class="{'router-link-active':this.$store.state.pageTitle == 'TOP250'||this.$store.state.pageTitle == '正在上映'||this.$store.state.pageTitle == '即将上映'}" exact>
  		<img src="../asset/images/foot2.png" />
  		<img class="active_img" src="../asset/images/foot_active2.png" />
  		<span>电影</span>
  	</router-link>
  	<router-link to="/Search" exact>
  		<img src="../asset/images/foot3.png" />
  		<img class="active_img" src="../asset/images/foot_active3.png" />
  		<span>搜索</span>
  	</router-link>
  </div>
</template>

<script>
  export default {
    name: 'movieHeader'
  }
</script>

<style scoped>
	#movieHeader{ width: 100%; max-width: 7.5rem; height: 1rem; border-top: 1px solid #ddd; background-color: #fff; position: fixed; left: 0; bottom: 0; display: flex; justify-content: center; }
	#movieHeader a{ width: 2.5rem; height: 100%; color: #999; display: flex; justify-content: center; flex-wrap: wrap; align-items: center; align-content: center; }
	#movieHeader a span{ width: 100%; text-align: center; font-size: 0.2rem; margin-top: 0.1rem; }
	#movieHeader img{ width: 0.4rem; height: 0.4rem; }
	#movieHeader img.active_img{ width: 0; height: 0; }
	#movieHeader a.router-link-active{ color: #3075A9; }
	#movieHeader a.router-link-active img{ width: 0; height: 0; }
	#movieHeader a.router-link-active img.active_img{ width: 0.4rem; height: 0.4rem; }
</style>
