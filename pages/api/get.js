const { Deta } = require("deta");

export async function getPosts() {
  const deta = Deta(process.env.project_key);
  const db = deta.Base("marks");
  const data = await db.fetch();
  return data.items;
}

export default async (req, res) => {
  const data = await getPosts();
  res.json(data);
};
