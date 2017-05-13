<template>
    <div class="caption">
			<caption-one v-for="re in captionlist" :key="re.title" :title="re.title" more="/squad">
				<caption-src v-for=" we in re.minute" :key="we.tit" :name="we.tit" :re="we.num" :score="we.par" :src="we.img"></caption-src>
				<section class="more-group">
		            <a href="/group/explore/rent/">更多相关小组</a>
		        </section>
			</caption-one>
		</div>
</template>
<script>
import captionOne from "./captionone.vue";
import captionSrc from "./captionsrc.vue"
  export default {
		data(){
			return {
				captionlist:[
					{
						title:'租房找室友',
						minute:[
								{img:"../../../src/assets/img/ssa.jpg",tit:"杭州租房",num:"71340人",par:"2分钟前更新：【下农口地铁口】朝南次卧出租"},
								{img:"../../../src/assets/img/ssa.jpg",tit:"上海租房",num:"368085人",par:"刚刚更新：近九号线打浦桥，日月光，田子坊一室...."},
								{img:"../../../src/assets/img/ssa.jpg",tit:"北京租房(密探)",num:"119225人",par:"刚刚更新：十号线丰台站主卧带独立卫生间,2..."}
					]},
					{
						title:'来聊五块钱',
						minute:[
								{img:"../../../src/assets/img/ssa.jpg",tit:"景涛咆哮组!!!!",num:"71340人",par:"2分钟前更新：【下农口地铁口】朝南次卧出租"},
								{img:"../../../src/assets/img/ssa.jpg",tit:"灵异豆瓣",num:"368085人",par:"刚刚更新：近九号线打浦桥，日月光，田子坊一室...."},
								{img:"../../../src/assets/img/ssa.jpg",tit:"北京租房(密探)",num:"119225人",par:"刚刚更新：十号线丰台站主卧带独立卫生间,2..."}
					]},{
						title:'买买买',
						minute:[
								{img:"../../assets/img/ssa.jpg",tit:"我爱代购&海淘",num:"71340人",par:"2分钟前更新：【下农口地铁口】朝南次卧出租"},
								{img:"../../assets/img/ssa.jpg",tit:"全球代购&海淘|微信号:",num:"368085人",par:"刚刚更新：近九号线打浦桥，日月光，田子坊一室...."},
								{img:"../../assets/img/ssa.jpg",tit:"香港代购",num:"119225人",par:"刚刚更新：十号线丰台站主卧带独立卫生间,2..."}
					]},{
						title:'需要被爱',
						minute:[
								{img:"../../assets/img/ssa.jpg",tit:"亲爱的陌生人",num:"71340人",par:"2分钟前更新：【下农口地铁口】朝南次卧出租"},
								{img:"../../assets/img/ssa.jpg",tit:"我要女朋友",num:"368085人",par:"刚刚更新：近九号线打浦桥，日月光，田子坊一室...."},
								{img:"../../assets/img/ssa.jpg",tit:"慢交友(兴趣恋爱靠勾搭)",num:"119225人",par:"刚刚更新：十号线丰台站主卧带独立卫生间,2..."}
					]},{
						title:'跳蚤市场',
						minute:[
								{img:"../../assets/img/ssa.jpg",tit:"北京二手交易",num:"71340人",par:"2分钟前更新：【下农口地铁口】朝南次卧出租"},
								{img:"../../assets/img/ssa.jpg",tit:"深圳二手闲置",num:"368085人",par:"刚刚更新：近九号线打浦桥，日月光，田子坊一室...."},
								{img:"../../assets/img/ssa.jpg",tit:"二手闲置",num:"119225人",par:"刚刚更新：十号线丰台站主卧带独立卫生间,2..."}
					]}
				]}
		},
		components:{
			captionOne,
			captionSrc
		}
	}
</script>
<style lang="scss" scoped>
	.caption{
		width: 100%;
		padding:0.18rem 0 0 0.18rem;
	}
	.more-group{
		font-size: 15px;
	    padding: 12px 0;
	    text-align: center;
	    position: relative;
	    margin-top:10px;
	    padding-right: 18px;
	    a{
	    	color: #42bd56;
    		text-decoration: none;
	    }
	}
</style>