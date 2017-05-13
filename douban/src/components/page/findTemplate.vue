<template>
	<ul class="find">
    <li v-for="item in findlist"><a href="javascript:;" :style='{color:item.color}'>{{item.title}}</a></li>
	</ul>
</template>
<script>
export default {
	props: {
    title: {
        type: String,
        default: "标题"
    },
    style: {
        type: String,
        default: ""
    }
  },
  data: function() {
    return {
       findlist:[
        {
            title: "同时入选IMDB250和豆瓣电影250的电影",
            color: "#2384E8"
        }, {
            title: "带你进入不正常的世界",
            color: "#CC3344"
        },
        {
            title: "用电【影】来祭奠逝去的岁月",
            color: "#3BA94D"
        },
        {
            title: "女孩们的故事【电影】",
            color: "#2384E8"
        },
        {
            title: "科幻是未来的钥匙——科幻启示录【科幻题材】",
            color: "#3BA94D"
        },
        {
            title: "美国生活面面观",
            color: "#FF4055"
        },
        {
            title: "2015终极期待",
            color: "#FFC46C"
        },
        {
            title: "经典韩国电影——收集100部",
            color: "#FFAC2D;"
        }
    	],
    }
  }
}
</script>
<style lang="scss" scoped>
	.find{
		width: 260%;
		li{
			margin: 0 0 8px 8px;
			padding: 15px;
		    font-size: 15px;
		    display: inline-block;
		    border-radius: 10px;
		    border: solid 1px #ccc;
		    vertical-align: middle;
		    float: left;
		}
	}
</style>