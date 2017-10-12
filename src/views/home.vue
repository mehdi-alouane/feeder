<template>
	<div>
		<input type='text' v-model='query' placeholder='Enter feed link'>
		<input type='submit' v-on:click='getLink()'>
	</div>
</template>

<script>
/* eslint-disable */
//import axios from 'axios'
import parser from 'rss-parser-browser'
export default {
	name: 'Home',
	data: () => ({
		query: ''
	}),

	methods: {
		getLink: () => {
			parser.parseURL('http://horriblesubs.info/rss.php?res=720', (err, parsed) => {
				console.log(parsed.feed.title)
				parsed.feed.entries.forEach(function(entry) {
					console.log(entry.title + ':' + entry.link)
				})
			})
		}
	}
}
</script>