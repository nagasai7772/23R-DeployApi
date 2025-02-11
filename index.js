const http=require('http');
const fs=require('fs')
const server=http.createServer((req,res)=>
{
    fs.readFile('./index.json','utf-8',(err,data)=>
    {
        if(err)
        {
            res.write("Error found")
            res.end()
        }
        else
        {
            res.write(data)
            console.log('file created');
            res.end()

        }
    })

    

})
const port=3000;
server.listen(port,()=>
{
    console.log(`server is running at ${port}`);
    
})