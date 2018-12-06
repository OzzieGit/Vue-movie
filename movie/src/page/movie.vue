<template>
  <div id="Movie">
    <mt-swipe :auto="3000">
		  <mt-swipe-item>
		  	<img src="../asset/images/banner.jpg" />
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<img src="../asset/images/banner.jpg" />
		  </mt-swipe-item>
		</mt-swipe>
		<dl>
			<dt>
				<router-link to="/MovieList?type=1">
					<span>正在上映</span>
					<img src="../asset/images/to.png" />
				</router-link>	
			</dt>
			<dd>
				<List :listData="inTheaters" :listType="1"></List>
			</dd>
			<dt>
				<router-link to="/MovieList?type=2">
					<span>即将上映</span>
					<img src="../asset/images/to.png" />
				</router-link>
			</dt>
			<dd>
				<List :listData="comingSoon" :listType="2"></List>
			</dd>
		</dl>
  </div>
</template>

<script>
	import List from '@/components/list'
	import { Indicator,Toast } from 'mint-ui';
  export default {
    name: 'Movie',
    components:{
    	List
    },
    data () {
      return {
        inTheaters:[],
        comingSoon:[]
      }
    },
    created(){
    	this.$store.state.showFoot = true;
    	this.$store.state.pageTitle = "首页";
    	Indicator.open({
			  text: '加载中...',
			  spinnerType: 'fading-circle'
			});
    	this.$http.get('/api/movie/in_theaters?count=5').then(data=>{
    		this.inTheaters = data.data.subjects;
    		Indicator.close();
    	}).catch(err=>{
    		Indicator.close();
    		Toast({
    			message: '加载失败',
    			duration: 1000
    		})
    	})
    	this.$http.get('/api/movie/coming_soon?count=5').then(data=>{
    		this.comingSoon = data.data.subjects;
    		Indicator.close();
    	}).catch(err=>{
    		Indicator.close();
    		Toast({
    			message: '加载失败',
    			duration: 1000
    		})
    	})
    }
  }
</script>

<style scoped>
	.mint-swipe, .mint-swipe img{ display: block; width: 100%; height: 4rem; }
	dt{ margin: 0.4rem 0; }
	dt a{ height: 0.46rem; color: #3075A9; display: flex;justify-content: space-between; align-content: center; align-items: center; }
	dt a span{ height: 0.46rem; line-height: 0.46rem; padding-left: 0.2rem; font-size: 0.4rem; border-left: 6px solid #3075A9; margin-left: 0.3rem; }
	dt a img{ width: 0.3rem; margin-right: 0.3rem; }
</style>
