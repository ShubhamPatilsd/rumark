const { Deta } = require("deta");

export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const deta = Deta(process.env.project_key);
  const db = deta.Base("marks");
  // use it!
  const exists = await db.fetch({
    username: req.body.username,
  });

  console.log(exists);
  // console.log(req.body);

  if (exists.count === 0) {
    db.put({
      username: req.body.username,
      mark_data: req.body.mark_data,
      date: new Date().toISOString(),
    });
    res.send("Success");
  } else {
    res.status(409).send("Mark already exists");
  }
};
