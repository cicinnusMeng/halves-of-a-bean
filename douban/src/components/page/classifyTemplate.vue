<template>
	<ul class="classify">
    <li v-for="item in classlist"><a href="javascript:;">{{item.name}}</a><i class="fa  fa-angle-right"></i></li>
    <li></li>
	</ul>
</template>
<script>
export default {
	props: {
	  name: {
	    type: String,
	    default: "标题"
	  }
	},
	data: function() {
	  return {
	    classlist:[
	        { name: "经典" },
	        { name: "冷门佳片" },
	        { name: "豆瓣高分" },
	        { name: "动作" },
	        { name: "喜剧" },
	        { name: "爱情" },
	        { name: "悬疑" },
	        { name: "恐怖" },
	        { name: "科幻" },
	        { name: "治愈" },
	        { name: "文艺" },
	        { name: "成长" },
	        { name: "动画" },
	        { name: "华语" },
	        { name: "欧美" },
	        { name: "韩国" },
	        { name: "日本" }
	    ]
		}
	}
}

</script>
<style lang="scss" scoped>
	.classify{
		width: 100%;
		li{
			border-top: solid 1px #eee;
		    border-right: solid 1px #eee;
		    float: left;
		    width: 50%;
		    padding: 10px;
		    a{
				float: left;
				color: #3BA94D;
			    display: inline-block;
		    }
		    i{
				float: right;
			    display: inline-block;
			    color: #ccc;
			    font-size: 18px;
		    }
		}
	}
</style>