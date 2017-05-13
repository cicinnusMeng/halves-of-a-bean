<template>
	<div class="newsItem">

		<div class="newsItemContent">	
			<div class="photos" v-if="type==3">
				<div class="leftPhotos" :style='{backgroundImage:"url("+photo+")"}'>
					<div></div>
				</div>
				<div class="rightPhotos">
					<div style='{backgroundImage:"url("+photos[0]+")"}'><div></div></div>
					<div style='{backgroundImage:"url("+photos[1]+")"}'><div></div></div>
				</div>
			</div>	
			<div class="rightContent" v-if="type==1 && photo!=''" :style='{backgroundImage:"url("+photo+")"}'>
				<div></div>
			</div>				
			<div class="leftContent">
				<h2>{{title}}</h2>
				<p>{{msg}}</p>
			</div>
		</div>
		<div class="newsItemBottom"></div>
	</div>
</template>
<style lang="scss">
	.newsItem{
		width:100%;
		.newsItemContent{
			overflow:hidden;
			padding:20px 15px;
			position:relative;
			&:after{
				content:"";
				height:1px;
				background:#d8d8d8;
				width:200%;
				display:block;
				transform: scale(0.5);
				position:absolute;
				bottom:0;
				left:-50%;
				margin-left:15px;
			}
			.leftContent{
				h2{
					font-size:17px;
					font-weight:500;
					line-height:1.41;
					color:#494949;
					margin-bottom:6px;
				}
				p{
					color:#aaa;
					font-size:12px;
					line-height:1.5;
					display:-webkit-box;
					overflow:hidden;
					-webkit-box-orient:vertical;
					-webkit-line-clamp:3;
				}
			}
			.rightContent{
				width:20%;
				background-size:cover;
				background-position:center center; 
				margin-left:0.2rem;
				float:right;
				div{
					padding-top:100%;
				}
			}
			.photos{
				width:100%;
				overflow: hidden;
				.leftPhotos{
					width:70%;
					float:left;
					background-size:cover;
					div{
						padding-top:50%;
					}

				}
				.rightPhotos{
					width:30%;
					float:left;

					div{
						width:100%;
						background-size:cover;
						padding-bottom:0.025rem;
						padding-left:0.04rem;
						background-clip: content-box;
						div{
							padding-top:100%;
						}
					}
				}
			}
		}
	}
</style>
<script>
export default{
	props :{
		title:{
			type:String,
			default:""
		},
		msg:{
			type:String,
			default:""
		},
		photo:{
			type:String,
			default:""
		},
		photos:{
			type:Array,
			default:function(){

			}
		},
		type:{
			type:Number,
			default:1
		}
	}
}
</script>