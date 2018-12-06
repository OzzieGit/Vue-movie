<template>
  <div id="search">
  	<div class="search">
  		<input type="text" v-model="key" placeholder="请输入搜索内容" />
	  	<img src="../asset/images/search.png" />
	  	<span @click="search">搜索</span>
  	</div>
  	<div class="hot" v-if="hot.length > 0">
  		<strong>热门搜索</strong>
  		<p>
  			<span v-for="(item, index) in hot" :key="index" @click="to(item.id)">{{ item.title }}</span>
  		</p>
  	</div>
  </div>
</template>

<script>
	import { Toast } from 'mint-ui'
  export default {
    name: 'Search',
    data(){
    	return{
    		key:'',
    		hot:[]
    	}
    },
    methods:{
    	search(){
    		if(this.key == ""){
    			Toast({
    				message:'请输入搜索内容',
    				duration: 1000
    			})
    		}else{
    			this.$router.push({path:'/SearchList',query:{key:this.key}})
    		}
    	},
    	to(id){
    		this.$router.push({path:'/Details',query:{id:id}})
    	}
    },
    created(){
    	this.$store.state.showFoot = true;
    	this.$store.state.pageTitle = "搜索"
    	this.$http.get('/api/movie/in_theaters?count=8').then(data=>{
    		this.hot = data.data.subjects;
    	})
    }
  }
</script>

<style scoped>
	.search{ width: 6.9rem; height: 0.78rem; background-color: #fff; margin: 0.4rem auto; position: relative; border-radius: 0.12rem; overflow: hidden; box-shadow: 0 0 20px 1px rgba(0,0,0,0.1); }
	.search input{ display: block; width: 100%; height: 100%; line-height: 0.78rem; border: none; outline: none; text-indent: 0.7rem; color: #666; }
	.search img{ width: 0.32rem; height: 0.32rem; position: absolute; top: 50%; left: 0.2rem; margin-top: -0.16rem; }
	.search span{ position: absolute; right: 0; top: 0; width: 1.2rem; line-height: 0.78rem; color: #fff; background-color: #3075A9; text-align: center; }
	.hot{ padding: 0.2rem 0.3rem; }
	.hot strong{ display: block; color: #3075A9; font-size: 0.32rem; margin-bottom: 0.2rem; }
	.hot p{ overflow: hidden; }
	.hot span{ float: left; color: #999; margin-right: 0.3rem; line-height: 1.8; font-size: 0.3rem; }
</style>
