export const hompage = (req, res) => res.send("Home Page Videos");

export const watch = (req, res) => {
  return res.send(`Watch videos #${req.params.id}`);
};

export const edit = (req, res) => {
  res.send("Eidt");
};

export const search = (req, res) => res.send("Search");

export const upload = (req, res) => res.send("Upload");

export const removevideo = (req, res) => {
  res.send("Remove video");
};
