<template>
	<div>
		<input type='text' v-model='query' placeholder='Enter feed link'>
		<input type='submit' v-on:click='getLink()'>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'Home',
	data: () => ({
		query: ''
	}),

	methods: {
		getLink: () => {
			axios({
				method: 'GET',
				url: 'http://horriblesubs.info/rss.php?res=all',
				headers: {
					'Access-Control-Allow-Origin': '*'
				}
			})
			.then(response => console.log(response))
			.catch(err => console.log(err))
		}
	}
}
</script>