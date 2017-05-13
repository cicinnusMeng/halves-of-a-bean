<template>
	<ul class="group-list">
		<li>
			<a href="javascript:;" class="group">
				<div class="meta">
					<img :src="src">
					<span class="name">{{name}}</span>
					<span class="member">{{re}}</span>
				</div>
				<div class="topic">
					<time datetime="2017-03-23 08:30:17">{{score}}</time>
          <span class="topic-title">{{score}}</span>
				</div>
			</a>
		</li>
	</ul>
</template>
<script>
	export default{
	 props:{
    name:{
      type: String,
      default: "标题"
    },
    src: {
      type: String,
      default: ""
    },
    re:{
  	  type: String,
      default: ""
    },
    score: {
      type: String,
      default: ""
    }
	},
	data(){
		return {
			
		}
	}
}
</script>
<style lang="scss" scoped>
	.group-list{
		width:100%;
		li{
			.group{
				font-size: 18px;
		    display: block;
		    padding-right: 18px;
		    padding-top: 15px;
		    padding-bottom: 15px;
		    color: #111;
		    .meta{
		    	display: -webkit-box;
			    display: flex;
			    -webkit-box-align: center;
			    -webkit-align-items: center;
			    img{
						display:block;
						border-radius:3px;
						width:40px;
						height:40px;
						border:1px solid #ccc;
			    }
			    .name{
						-webkit-box-flex: 1;
				    flex: 1;
				    padding-left: 10px;
				    padding-right: 10px;
				    white-space: nowrap;
				    overflow: hidden;
				    text-overflow: ellipsis;
			    }
			    .member{
			    	color:#ccc;
			    	font-size:15px;
			    }
		    }
		    .topic{
		    	margin-top:10px;
		    	font-size:15px;
		    	color:#aaa;
		    	white-space: nowrap;
		    	overflow:hidden;
		    	text-overflow:ellipsis;
		    }
			}
		}
	}
</style>