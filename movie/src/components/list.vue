<!-- ListType  1 正在上映  2 即将上映  3 Top250 -->
<template>
	<div id="list">
		<ul>
			<li v-for="(item,index) in listData" :key="index">
				<router-link :to="'/Details?id='+item.id">
					<img :src="item.images.medium" />
					<div>
						<strong>{{ listType == 2 ? '['+ item.year +']' : '' }}{{ item.title }}</strong>
						<p>导演：<b v-for="(item,index) in item.directors" :key="index">{{ item.name }}</b></p>
						<p v-if="item.casts.length > 0">演员：<b v-for="(item,index) in item.casts" :key="index">{{ item.name }}</b></p>
						<p>分类：<b v-for="(item,index) in item.genres" :key="index">{{ item }}</b></p>
						<span v-if="listType!=2">{{ item.rating.average }}</span>
					</div>
				</router-link>	
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'list',
		props:['listData','listType']
	}
</script>

<style scoped>
li{ width: 6.9rem; padding: 0.3rem; border-radius: 0.1rem; box-sizing: border-box; box-shadow: 0 0 20px 1px rgba(0,0,0,0.1); margin: 0 auto 0.3rem; background-color: rgba(255,255,255,0.1); }
li a{ width: 100%; display: flex; justify-content: space-between; position: relative; }
li a img{ width: 2rem; height: 2.8rem; }
li a div{ width: 4rem; display: flex; align-items: center; align-content: center; flex-wrap: wrap; }
li a div strong{ width: 100%; font-size: 0.32rem; color: #333; margin-bottom: 0.2rem; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
li a div p{ width: 100%; margin: 0 0 0.1rem; font-size: 0.24rem; color: #999; line-height: 1.6; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
li a div p b{ font-weight: 100; display: inline-block; margin-right: 0.1rem; }
li a div span{ color: #FFAC2D; font-size: 0.36rem; font-weight: bold; font-style: italic; position: absolute; right: 0; top: 0; }
</style>
