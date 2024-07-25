const http=require('http');
const reqhandler=require('./routes')
const port=3000;
const server=http.createServer(reqhandler);
server.listen(port);