export const homepage = (req, res) => {
  const videos = [
    {
      title: "First Video",
      rating: 5,
      comments: 10,
      createAt: "5 seconds ago",
      views: 100,
      id: 1,
    },
    {
      title: "Second Video",
      rating: 5,
      comments: 10,
      createAt: "5 seconds ago",
      views: 100,
      id: 1,
    },
    {
      title: "Third Video",
      rating: 5,
      comments: 10,
      createAt: "5 seconds ago",
      views: 100,
      id: 1,
    },
  ];
  res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => res.render("watch");

export const edit = (req, res) => res.send("Edit");

export const search = (req, res) => res.send("Search");

export const upload = (req, res) => res.send("Upload");

export const removevideo = (req, res) => res.send("Remove video");
