const { Deta } = require("deta");

export async function getPosts() {
  const deta = Deta(process.env.project_key);
  const db = deta.Base("marks");

  let res = await db.fetch();
  let allItems = res.items;

  // continue fetching until last is not seen
  while (res.last) {
    res = await db.fetch({}, { last: res.last });
    allItems = allItems.concat(res.items);
  }
  return allItems.reverse();
}

export default async (req, res) => {
  const data = await getPosts();
  res.json(data);
};
