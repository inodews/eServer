let http = require('http')

http.createServer((req, res) => {
    console.log(`Request received at: ${req.url}`)
    //res.end('hello world\n')
    req.pipe(res)
    for (let header in req.headers) {
    	res.setHeader(header, req.headers[header])
	}
}).listen(8000)
