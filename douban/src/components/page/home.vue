<template>
  <div class="page home-page" v-scrolls="getMsg">
  	<ul class="quick-nav">
  		<li>
  			<a href="#">影院热映</a>
  		</li>
  		<li>
  			<a href="#">变瘦变美变漂亮</a>
  		</li>
  		<li>
  			<a href="#" id="hot-topics">白先勇细说红楼梦</a>
  		</li>
  		<li>
  			<a href="#">使用豆瓣APP</a>
  		</li>
  	</ul>
  	<div class="news-section">
  		<news-list v-for="item in homeData" 
  			:key="item.id" 
  			:title='item.title' 
  			:msg="item.target.desc"
  			:photo="item.target.cover_url"
  			:type="item.layout == 5 ? 3 :1"
  			:photos="item.target.more_pic_urls"
  			></news-list>
  	</div>
  </div>
</template>

<style lang='scss' scoped>
	.quick-nav{
		overflow: hidden;
		margin:20px 0 0 0;
		padding-top:6px;
		li{
			float:left;
			width:50%;
			padding:3px;
			box-sizing:border-box;
			font-size:15px;
			a{
				background:#f6f6f6;
				color:#494949;
				display:block;
				text-align: center;
				line-height:20px;
				padding:12px 0;
				border-radius:2px;
				max-width:100%;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				word-wrap:normal;
			}
		}
	}
	.news-section{
		margin:0 -0.15rem;
	}
</style>

<script>
import newsList from "@/components/base/newsList";
import homeData from "@/assets/data/home.json";
import homeData2 from "@/assets/data/home.json";
export default {
	data(){
		return {
			homeData:homeData.recommend_feeds,
			getData:true
		}
	},
	components:{
		newsList
	},
	methods:{
		getMsg(){
			var  that = this;
      	if (!this.getData) return;
      	this.getData = false;
        that.data = that.data.concat( homeData2.recommend_feeds );
        that.getData = true;
        return  'sss'
			}
	}
}
</script>


