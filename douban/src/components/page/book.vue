<template>
	<div class="page-turner">
		<main-book v-for="b in booklist" :key="b.title" :title='b.title' more="">
			<book-src></book-src>
		</main-book>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				booklist:[
					{
						title:"最受关注图书 | 虚构类",
						bookrack:[
							{src:"",title:""},
						]
					}
				]
			}
		}
	}
</script>
<style lang="scss" scoped>
	
</style>