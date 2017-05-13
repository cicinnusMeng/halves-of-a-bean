<template>
	<div class="movie-hot">
	    <h2>{{title}}<a href='javascript:;' v-if="more!='#'">更多</a></h2>
	    <div class="movie-list">
	        <slot></slot>
	    </div>
	</div>
</template>
<script>
	export default{
		props:{
			title:{
				type:String,
				default:"标题"
			},
			more:{
				type:String,
				default:"#"
			}
		}
	}
</script>
<style lang="scss" scoped>
	.movie-hot{
			width: 100%;
			overflow: hidden;
			h2{
				height: 44px;
				line-height: 44px;
				a{
					float: right;
					color: #42bd56;
				}
			}
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
			
		}
</style>