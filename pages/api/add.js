const { Deta } = require("deta")

export default async (req, res)=>{
  const deta = Deta(process.env.project_key)
  const db = deta.Base("marks")
  // use it!
  const exists = await db.fetch({
    username: req.body.username  
  })

  if(!exists){
    db.put({
     username: req.body.username,
     mark_data: req.body.mark_data
    })
    res.send("Sucess")
  }else{
    res.status(409).send("Mark already exists")
  }
}