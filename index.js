const http = require("http");
const fs = require("fs");
const url=require('url')
const server = http.createServer((req, res) => {
  fs.readFile("./index.json", "utf-8", (err, data) => {
    if (err) {
      res.write("Error found");
      res.end();
    } else {
        let apidata=JSON.parse(data)
        let parsedurl=url.parse(req.url,true)
        if(parsedurl.query.cate=='men')
        {
            let mens=apidata.filter((val)=>
            {
                return val.category=="men's clothing"
            })
            res.write(JSON.stringify(mens))
            res.end()
        }
        else if(parsedurl.query.cate=='women')
        {
            let women=apidata.filter((val)=>
            {
                return val.category=="women's clothing"
            })
            res.write(JSON.stringify(women))
            res.end()
        }
        else if(parsedurl.query.cate=="ele")
        {
            let elec=apidata.filter((val)=>
            {
                return val.category=='electronics'
            })
               res.write(JSON.stringify(elec))
               res.end()
        }
        else if(parsedurl.query.cate=="jew")
        {
            let jew=apidata.filter((val)=>
            {
                return val.category=='jewelery'
            })
            res.write(JSON.stringify(jew))
            res.end()
        }
        else
        {
            res.write(JSON.stringify(apidata))
            res.end()
        }
        
    }
  });
});
const port = 3000;
server.listen(port, () => {
  console.log(`server is running at ${port}`);
});
