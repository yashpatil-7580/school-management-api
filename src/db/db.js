require('dotenv').config()
const pg=require('pg')
const con=new pg.Pool({
     connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,

   
})

module.exports=con;