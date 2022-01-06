export default async (req, res)=>{
  const deta = Deta(process.env.project_key)
  const db = deta.Base("marks")
  const data = await db.fetch()
  res.json(data.items)

}