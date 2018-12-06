<template>
  <div id="movieList">
  	<div class="type">
  		<span :class="{ active: listType == 1 }" @click="toggleList(1)">正在上映</span>
  		<span :class="{ active: listType == 2 }" @click="toggleList(2)">即将上映</span>
  		<span :class="{ active: listType == 3 }" @click="toggleList(3)">TOP250</span>
  	</div>
  	<List :listData="list" :listType="listType"></List>
  </div>
</template>

<script>
	import List from '@/components/list'
  import { Indicator,Toast } from 'mint-ui';
  export default {
    name: 'MovieList',
    components:{
    	List
    },
    data(){
    	return {
    		listType:1,
    		list:[]
    	}
    },
    methods:{
    	toggleList(type){
        if(type == this.listType){ return }
    		this.listType = type;
    		this.list = [];
    		this.load(type)
    	},
    	load(type){
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        })
    		if(type == 1){
	    		this.$store.state.pageTitle = "正在上映"
	    		this.$http.get('/api/movie/in_theaters?count=8').then(data=>{
		    		this.list = data.data.subjects;
            Indicator.close()
		    	}).catch(err=>{
            Indicator.close();
            Toast({
              message: '加载失败',
              duration: 1000
            })
          })
	    	}else if(type == 2){
	    		this.$store.state.pageTitle = "即将上映"
	    		this.$http.get('/api/movie/coming_soon?count=8').then(data=>{
		    		this.list = data.data.subjects;
		    	  Indicator.close()
          }).catch(err=>{
            Indicator.close();
            Toast({
              message: '加载失败',
              duration: 1000
            })
          })
	    	}else if(type == 3){
	    		this.$store.state.pageTitle = "TOP250"
	    		this.$http.get('/api/movie/top250?count=8').then(data=>{
		    		this.list = data.data.subjects;
		    	  Indicator.close()
          }).catch(err=>{
            Indicator.close();
            Toast({
              message: '加载失败',
              duration: 1000
            })
          })
	    	}
    	}
    },
    created(){
      this.$store.state.showFoot = true;
    	this.listType = this.$route.query.type || 1;
    	this.load(this.listType)
    }
  }
</script>

<style scoped>
	.type{ margin-bottom: 0.3rem; display: flex; justify-content: center; }
	.type span{ width: 2.5rem; line-height: 0.86rem; font-size: 0.3rem; background-color: #fff; text-align: center; border-bottom: 1px solid #ddd; }
	.type span.active{ border-bottom-color: #3075A9; color: #3075A9; }
</style>
