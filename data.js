const users = [
  {
    id: "1",
    fullName: "Dilara Katuk",
  },
  {
    id: "2",
    fullName: "John Doe",
  },
  {
    id: "3",
    fullName: "Jane Doe",
  },
];

const posts = [
  {
    id: "1",
    title: "Hello World. This is my first Graphql- Apollo Server project",
    user_id: "1",
  },
  {
    id: "2",
    title:
      "GraphQL is a query language for your API, and a server-side runtime for executing queries using a type system you define for your data.",
    user_id: "1",
  },
  {
    id: "3",
    title:
      "Apollo Server is an open-source, spec-compliant GraphQL server that's compatible with any GraphQL client, including Apollo Client.",
    user_id: "1",
  },
  {
    id: "4",
    title: "Hello World. This is John Doe's post",
    user_id: "2",
  },
  {
    id: "5",
    title: "Hello World. This is Jane Doe's post",
    user_id: "3",
  },
];

const comments = [
    {
        id: "1",
        comment: "This is a comment about apollo server",
        user_id: "2",
        post_id: "1"
    },
    {
        id: "2",
        comment: "This is a comment about graphql",
        user_id: "3",
        post_id: "2"
    },
    {
        id: "3",
        comment: "This is a comment to John Doe's post",
        user_id: "1",
        post_id: "4"
    },
    {
        id: "4",
        comment: "This is a comment to Jane Doe's post",
        user_id: "2",
        post_id: "5"
    },
]


module.exports = {
    users,
    posts,
    comments
}
