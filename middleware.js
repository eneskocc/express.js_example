const accessControl=(req,res,next)=>{
      const access=false;
      if(!access){
            res.status(401).json({
                  success:"false",
                  massage:"you are not autherzed!"
            });
      }
      next();
};
const defaultMiddleWare=(req,res,next)=>{
      console.log("aaaa");
      next();
};
module.exports={
      accessControl,
      defaultMiddleWare
};