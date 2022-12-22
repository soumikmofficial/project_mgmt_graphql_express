const clients = [
  {
    id: "1",
    name: "First Client",
    phone: "123-456-2342",
    email: "first@example.com",
  },
  {
    id: "2",
    name: "Second Client",
    phone: "543-456-2342",
    email: "second@example.com",
  },
  {
    id: "3",
    name: "Third Client",
    phone: "123-456-2342",
    email: "third@example.com",
  },
];

const projects = [
  {
    id: "1",
    clientId: "3",
    name: "Big Project",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    status: "Active",
  },
  {
    id: "2",
    clientId: "2",
    name: "Misstion Impossible",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, provident ab? Obcaecati quis recusandae laborum harum impedit, eum nobis possimus illo perferendis.",
    status: "Inactive",
  },
  {
    id: "3",
    clientId: "1",
    name: "Shared Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sint perspiciatis rem molestias molestiae deserunt praesentium provident explicabo? Totam, mollitia? Necessitatibus dolorem provident, similique odio earum et iste in assumenda!",
    status: "Inactive",
  },
];

module.exports = { clients, projects };
