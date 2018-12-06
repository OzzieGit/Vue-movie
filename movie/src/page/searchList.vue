<template>
  <div id="searchList">
  	<p class="msg">{{ msg }}</p>
  	<List :listData="list"></List>
  </div>
</template>

<script>
	import List from '@/components/list'
	import { Indicator, Toast } from 'mint-ui'
  export default {
    name: 'searchList',
    components:{
    	List
    },
    data(){
    	return{
    		msg:"",
    		list:[]
    	}
    },
    created(){
    	this.$store.state.showFoot = false;
    	this.$store.state.pageTitle = this.$route.query.key;
    	Indicator.open({
    		text: '搜索中...',
    		spinnerType: 'fading-circle'
    	})
    	this.$http.get('/api/movie/search?q='+this.$route.query.key).then(data=>{
    		this.msg = data.data.title;
    		this.list = data.data.subjects;
    		Indicator.close();
    	}).catch(err=>{
    		Indicator.close();
    		Toast({
    			message: '搜索失败',
          duration: 1000
    		})
    	})
    }
  }
</script>

<style scoped>
	.msg{ padding: 0.3rem; line-height: 1.6; font-size: 0.3rem; color: #666; }
</style>
