var http = require('http')

var server = http.createServer(function(req,res){
    if(req.url =='/'){
        res.writeHead(200, {'content-Type':'text-html'});
        res.write('<html><body><p>homepage</p></body></html>');
        res.end();
    }else if(req.url =='/student'){
        res.writeHead(200, {'content-Type':'text-html'});
        res.write('<html><body><p>homepage</p></body></html>');
        res.end();
    }else{
        res.writeHead(200, {'content-Type':'text-html'});
        res.write('<html><body><p>homepage</p></body></html>');
        res.end();
    }

})

const PORT = 5000
server.listen(PORT,function(){
    console.log("dang mo roi")
})

