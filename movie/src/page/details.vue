<template>
  <div id="details">
  	<div class="msg">
  		<p>
  			<strong>{{ detailContent.title }}</strong>
  			<span>评分:<i>{{ detailContent.rating.average }}</i></span>
  			<span>国家:<b>{{ detailContent.countries[0] }}</b></span>
  			<span>导演:<b v-for="(item, index) in detailContent.directors" :key="index">{{ item.name }}</b></span>
  			<span>类型:<b v-for="(item, index) in detailContent.genres" :key="index">{{ item }}</b></span>
  		</p>
  		<img :src="detailContent.images.medium" />
  	</div>
  	<div class="info">
  		<strong>{{ detailContent.title }}的剧情简介</strong>
  		<p>{{ detailContent.summary == "" ? "暂无"+detailContent.title+"的剧情简介": detailContent.summary | replace }}</p>
  	</div>
  	<div class="actor" v-if="detailContent.casts[0].avatars">
  		<ul :style="'width:'+ ((detailContent.casts.length * 110) - 10) +'px'">
  			<li v-for="(item, index) in detailContent.casts" :key="index">
  				<img :src="item.avatars.small ? item.avatars.small : ''" />
  				<span>{{ item.name }}</span>
  			</li>
  		</ul>	
  	</div>
  </div>
</template>

<script>
	import { Indicator, Toast } from 'mint-ui'
  export default {
    name: 'details',
    data(){
    	return{
    		detailContent:""
    	}
    },
    created(){
      this.$store.state.showFoot = false;
    	Indicator.open({
    		text: '加载中...',
    		spinnerType: 'fading-circle'
    	})
    	this.$http.get('/api/movie/subject/'+this.$route.query.id).then(data=>{
    		this.detailContent = data.data;
    		this.$store.state.pageTitle = this.detailContent.title
    		Indicator.close();
    	}).catch(err=>{
    		Indicator.close();
    		Toast({
    			message: '加载失败',
          duration: 1000
    		})
    	})
    },
    filters:{
      replace(value){
        return value.replace(/\©豆瓣/, '');
      }
    }
  }
</script>

<style scoped>
	#details{ padding: 0.3rem 0.3rem 0; }
	.msg{ padding: 0.3rem; background-color: #fff; border-radius: 0.12rem; display: flex; justify-content: space-between; }
	.msg img{ width: 3rem; height: 4.2rem; }
	.msg p{ width: 3.3rem; line-height: 1; font-size: 0; display: flex; flex-wrap: wrap; flex-direction: row; align-items: flex-start; align-content: flex-start; }
	.msg p strong{ width: 100%; font-size: 0.34rem; color: #666; margin: 0.1rem 0 0.2rem; line-height: 1.4; }
	.msg p span{ width: 100%; color: #666; line-height: 1.8; font-size: 0.28rem; margin-bottom: 0.2rem; display: flex; align-content: center; align-items: center; flex-direction: row; flex-wrap: wrap; }
	.msg p span i{ font-size: 0.4rem; font-weight: bold; color: #FFAC2D; margin-left: 0.1rem; }
	.msg p span b{ font-weight: 100; margin-right: 0.1rem; color: #999; }
  .msg p span b:first-child{ margin-left: 0.1rem; }
	.info strong{ display: block; padding: 0.4rem 0 0.2rem; font-size: 0.32rem; font-weight: 100; color: #333; line-height: 1.4; }
	.info p{ color: #999; line-height: 1.8; }
	.actor{ width: 6.9rem; overflow-y: auto; margin: 0.4rem 0 0; }
	.actor ul{ min-height: 177px; }
	.actor li{ width: 100px; float: left; margin-right: 10px; }
	.actor li:last-child{ margin-right: 0; }
	.actor li img{ display: block; width: 100px; height: 141px; }
	.actor li span{ display: block; line-height: 1.4; text-align: center; margin-top: 0.2rem; color: #999; }
</style>
