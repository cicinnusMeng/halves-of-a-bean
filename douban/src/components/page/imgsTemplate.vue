<template>
	<dl>
    <dt><img :src="src" alt=""> </dt>
    <dd>
      <h3>{{name}}</h3>
      <p>
          <slot>{{score}}</slot>
      </p>
    </dd>
  </dl>
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
      score: {
          type: String,
          default: "暂无评分"
      }
  	},
  	data(){
  		return {
  			
  		}
  	}
	}
</script>
<style lang="scss" scoped>
	.movie-list{
		display: -webkit-box;
		overflow: auto;
		&::-webkit-scrollbar{
			width:0px;
		};
		dl{
			width: 105px;
			margin-right: 10px;
			dt{
				width: 105px;
				height: 140px;
				overflow: hidden;
				img{
					width: 100%;
				}
			}
			dd{
				h3{
					font-size: 14px;
					line-height: 22px;
					text-align: center;
				}
				p{
					color: #aaa;
					font-size: 12px;
					text-align: center;
				}
			}
		}
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
	}
</style>