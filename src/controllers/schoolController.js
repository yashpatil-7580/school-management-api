const con=require('../db/db');
const calculateDistance=require('../utils/distance');
const addSchool=async(req,res)=>{
    const {name,address,latitude,longitude}=req.body;
    try{
       const result=await con.query("insert into School(name,address,latitude,longitude)values($1,$2,$3,$4)returning *",[name,address,latitude,longitude])
       if(result.rowCount>0){
        res.send({msg:"Data Inserted"});
       }else{
        res.send({msg:"Insertion Failed"});
       }
    }catch(err){
       console.log(err.message)
       res.status(500).send("Server error");
    }
}

const listSchool=async(req,res)=>{
   const {latitude,longitude}=req.query;
   try{
     const result=await con.query("select * from School");

     const schoolDistance=result.rows.map((school)=>{
      const distance= calculateDistance(
        parseFloat(latitude),parseFloat(longitude),school.latitude,school.longitude
      );
      return {...school,distance};
     });
     schoolDistance.sort((a,b)=>a.distance - b.distance);
     res.send(schoolDistance);
   }catch(e){
      console.log(e.message);
      res.status(500).send("Server Error");
   }
}


module.exports={addSchool,listSchool};
