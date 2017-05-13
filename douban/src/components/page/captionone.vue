<template>
	<div class="caption-bt">
		<h2>{{title}}</h2>
		<div class="capt-list">
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default {
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
	.caption-bt{
		width:100%;
		overflow:hidden;
		h2{
			display: inline-block;
	    margin-bottom: 0;
	    padding: 0 1em;
	    font-size: 18px;
	    color: #111;
	    padding-left: 0;
		}
	}
</style>