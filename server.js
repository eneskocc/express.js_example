const express=require("express");
const {accessControl,defaultMiddleWare}=require("./middleware");
const users=[
      {"id":1,"name":"enes","place":"ankara"},
      {"id":2,"name":"ahmet","place":"izmir"},
      
];
const app=express();
const PORT=5000;
app.use(express.json());

app.get("/users",(req,res,next)=>{
      res.json(users);
});
app.post("/users",(req,res,next)=>{
      users.push(req.body);
      res.json({
            seccess:true,
            data:users,
      });
});
app.put("/users/:id",(req,res,next)=>{
      const id=parseInt(req.params.id);
      for(let i=0;i<users.length;i++) {
            if(users[i].id===id){
                  users[i]={
                        ...users[i],
                        ...req.body
                  }
            }
      }
      
      res.json({
            seccess:true,
            data:users,
      });
});
app.delete("/users/:id",(req,res,next)=>{
      const id=parseInt(req.params.id);
      for(let i=0;i<users.length;i++) {
            if(users[i].id===id){
                  users.splice(i,1);
            }
          
      }
      
      res.json({
            seccess:true,
            data:users,
      });
});

app.listen(PORT ,()=>{
      console.log("server Stared " + PORT);
});


