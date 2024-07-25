const fs=require('fs');
const reqhandler=(req,res)=>{
    const url=req.url;
   const method=req.method;
   if(url==='/')
   {
      res.setHeader('Content-type','text/html')
      res.write('<html>')
      res.write('<head><title>Form</title></head>');
      res.write('<body><form action="/message" method="POST"><input type="text" name="message"><input type="submit" value="send"></form></body>');
      res.write('</html>')
      return res.end();
   }
   if(url==='/message' && method==='POST'){
      const body=[];
      req.on('data',(chunk)=>
      {
         body.push(chunk);
         //console.log(chunk);
      })
      req.on('end',()=>{
         const parsed=Buffer.concat(body).toString();
         console.log(parsed);
         const a=parsed.split('=');
         fs.appendFileSync('he.txt',`${a[1].replaceAll('+',' ')}`);
      })
      fs.writeFileSync('he.txt','Dummy');
      res.setHeader('Location','/');
      res.statusCode=302;
      return res.end();
   }
   res.setHeader('Content-type','text/html')
   res.write('<html><head><title>Node Practice</title></head><body><h1>Hi I m Sinehan</h1></body></html>')
   res.end();
}

module.exports=reqhandler;