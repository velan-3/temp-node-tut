const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("WELCOME TO OUR WEBPAGE")
    }
    if(req.url ==='/about'){
        res.end("WELCOME TO OUR ABOUT PAGE")
    }
      res.end(`
      <h1>OOPS!</h1>
      <p>Here is problem in the webpage</p>
      <a href='/'>back home</a>`)
})
 server.listen(5000)

