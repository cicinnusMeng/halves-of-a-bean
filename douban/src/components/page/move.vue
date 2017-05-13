<template>
	 <div class="mian">
	  <main-movie v-for="item in movielist" :key="item.title" :title="item.title" more="/movie">
	    <movie-src v-for="v in item.content" :key="v.title" :name="v.title" :score="v.score" :src="v.src"></movie-src>
	  </main-movie>
	  <main-movie title="发现好电影">
	   <movie-find></movie-find>
	 </main-movie>
	 	 	<main-movie title="分类浏览">
	   <movie-classify></movie-classify>
	 </main-movie>
	</div>
</template>
<script>
import mainMovie from "./mainmovie.vue";
import movieSrc from "./imgsTemplate.vue";
import movieFind from "./findTemplate.vue"
import movieClassify from "./classifyTemplate.vue"
	export default {
		data(){
			return {
				movielist:[
					{
	          title: "影院热映",
	          content: [
	          	{ src: "../../assets/img/movie1.jpg",title: "一条狗的使命"},
	            {src: "../../assets/img/p2417948644.jpg",title: "美女与野兽",score: "7.6分"},
	            {src: "../../assets/img/p2431279389.jpg",title: "一条狗的使命",score: "5.6分"},
	            {src: "../../assets/img/p2431279389.jpg",title: "美女与野兽",score: "7.6分"},
	            {src: "../../assets/img/p2431279389.jpg",title: "美女与野兽",score: "7.6分"}
	          ]
	      	},
	      	{
	          title: "免费在线观影",
	          content: [
	          	{src:"../../assets/img/movie10.jpg",title:"三少爷的剑",score: "5.6分"},
	            {src:"../../assets/img/movie11.jpg",title:"呆呆计划",score: "3.3分"},
	            {src:"../../assets/img/movie4.jpg",title:"脑残粉",score: "5.6分"},
	            {src:"../../assets/img/movie10.jpg",title:"勇者之门",score: "5.6分"},
	            {src:"../../assets/img/movie6.jpg",title:"我是你的小密",score: "5.6分"}
	          ]
	      	},
	        {
	          title: "新片速递",
	          content: [
	         		{src: "../../assets/img/movie12.jpg",title: "三少爷的剑",score: "5.6分"},
	            {src: "../../assets/img/movie11.jpg",title: "三少爷的剑",score: "5.6分"},
	            {src: "../../assets/img/movie10.jpg",title: "三少爷的剑",score: "5.6分"},
	            {src: "../../assets/img/movie9.jpg",title: "三少爷的剑",score: "5.6分"},
	            {src: "../../assets/img/movie8.jpg",title: "三少爷的剑",score: "5.6分"}
	          ]
	        }
				]
			}
		},
		components:{
			mainMovie,
			movieSrc,
			movieFind,
			movieClassify
		}
	}
</script>
<style lang="scss" scoped>
.main{
	width: 100%;
	padding-left: 20px;
	padding-top: 44px;
}
</style>