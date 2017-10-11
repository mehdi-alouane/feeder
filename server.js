// App dependecy's
import express from 'express'
import request from 'request'
import logger from 'morgan'
import bodyParser from 'body-parser'
import xml2js from 'xml2js'
import path from 'path'

// xml2js parser config
const parser = xml2js.Parser({
	explicitArray: false,
	normalizeTags: true
})

// Create express app
const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// App main routes
app.get('/', (req, res, next) => {
	request.get('http://horriblesubs.info/rss.php?res=all', (error, response, body) => {
		if (error) throw next(error)
		
		parser.parseString(body, (err, result) => {
			if (err)
				res.send(err)

			res.render('home', {
				feeds: result.rss.channel.item
			})
		})
	})
})

// Start express server
let port = process.env.PORT || 3000
app.listen(port, (err) => {
	console.log(`Server running at port ${port}`)
})