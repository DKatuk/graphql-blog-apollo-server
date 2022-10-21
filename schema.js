const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  # USER ------------------------------------------------
  type User {
    id: ID!
    name: String!
    surname: String!
    dateOfBirth: String!
    email: String!
    posts: [Post!]!
    comments: [Comment!]!
  }

  input CreateUserInput {
    name: String!
    surname: String!
    dateOfBirth: String!
    email: String!
  }

  input UpdateUserInput {
    name: String
    surname: String
    dateOfBirth: String
    email: String
  }

  # POST ------------------------------------------------
  type Post {
    id: ID!
    title: String!
    user_id: ID!
    user: User!
    comments: [Comment!]!
  }
  input CreatePostInput {
    title: String!
    user_id: ID!
  }
  input updatePostInput {
    title: String
    user_id: ID
  }

  # COMMENT ------------------------------------------------
  type Comment {
    id: ID!
    comment: String!
    user_id: ID!
    post_id: ID!
    user: User!
    post: Post!
  }
  input CreateCommentInput {
    comment: String!
    user_id: ID!
    post_id: ID!
  }
  input updateCommentInput {
    comment: String
    user_id: ID
    post_id: ID
  }

  # DELETE ALL OUTPUT --------------------------------------
  type DeleteAllOutput {
    count: Int!
  }

  # QUERIES ------------------------------------------------
  type Query {
    users: [User!]!
    user(id: ID!): User!
    posts: [Post!]!
    post(id: ID!): Post!
    comments: [Comment!]!
    comment(id: ID!): Comment!
  }

  # MUTATIONS ------------------------------------------------
  type Mutation {
    # CREATE
    createUser(data: CreateUserInput!): User!
    createPost(data: CreatePostInput!): Post!
    createComment(data: CreateCommentInput!): Comment!

    # UPDATE
    updateUser(id: ID!, data: UpdateUserInput!): User!
    updatePost(id: ID!, data: updatePostInput!): Post!
    updateComment(id: ID!, data: updateCommentInput!): Comment!

    # DELETE
    deleteUser(id: ID!): User!
    deletePost(id: ID!): Post!
    deleteComment(id: ID!): Comment!

    # DELETE ALL
    deleteAllUsers: DeleteAllOutput!
    deleteAllPosts: DeleteAllOutput!
    deleteAllComments: DeleteAllOutput!
  }
`;

module.exports = typeDefs;