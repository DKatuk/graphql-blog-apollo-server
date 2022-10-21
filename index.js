const { ApolloServer } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const typeDefs = require("./schema");
const { users, posts, comments } = require("./data.js");

const resolvers = {
  Query: {
    // Query for users
    users: () => users,
    user: (parent, args) => {
      return users.find((user) => user.id === args.id);
    },
    // Query for posts
    posts: () => posts,
    post: (parent, args) => {
      return posts.find((post) => post.id === args.id);
    },
    // Query for comments
    comments: () => comments,
    comment: (parent, args) => {
      return comments.find((comment) => comment.id === args.id);
    },
  },
  User: {
    posts: (parent) => posts.filter((post) => post.user_id === parent.id),
    comments: (parent) =>
      comments.filter((comment) => comment.post_id === parent.id),
  },
  Post: {
    user: (parent) => users.find((user) => user.id === parent.user_id),
    comments: (parent) =>
      comments.filter((comment) => comment.post_id === parent.id),
  },
  Comment: {
    user: (parent) => users.find((user) => user.id === parent.user_id),
    post: (parent) => posts.find((post) => post.id === parent.post_id),
  },

  //MUTATIONS
  Mutation: {
    // CREATE MUTATIONS
    createUser: (parent, { data }) => {
      const newUser = { id: users.length + 1, ...data };
      users.push(newUser);
      return newUser;
    },
    createPost: (parent, { data }) => {
      const newPost = {
        id: posts.length + 1,
        ...data,
      };
      posts.push(newPost);
      return newPost;
    },
    createComment: (parent, { data }) => {
      const newComment = {
        id: comments.length + 1,
        ...data,
      };
      comments.push(newComment);
      return newComment;
    },

    // UPDATE MUTATIONS
    updateUser: (parent, { id, data }) => {
      let userToUpdate = users.find((user) => user.id === id);
      if (!userToUpdate) {
        throw new Error("User not found");
      }
      const updatedUser = (userToUpdate = {
        ...userToUpdate,
        ...data,
      });
      return updatedUser;
    },
    updatePost: (parent, { id, data }) => {
      let postToUpdate = posts.find((post) => post.id === id);
      if (!postToUpdate) {
        throw new Error("Post not found");
      }
      const updatedPost = (postToUpdate = {
        ...postToUpdate,
        ...data,
      });
      return updatedPost;
    },
    updateComment: (parent, { id, data }) => {
      let commentToUpdate = comments.find((comment) => comment.id === id);
      if (!commentToUpdate) {
        throw new Error("Comment not found");
      }
      const updatedComment = (commentToUpdate = {
        ...commentToUpdate,
        ...data,
      });
      return updatedComment;
    },

    // DELETE MUTATIONS
    deleteUser: (parent, { id }) => {
      let userIndex = users.findIndex((user) => user.id === id);
      if (userIndex === -1) {
        throw new Error("User not found");
      }
      const deletedUser = users[userIndex];
      users.splice(userIndex, 1);
      return deletedUser;
    },
    deletePost: (parent, { id }) => {
      let postIndex = posts.findIndex((post) => post.id === id);
      if (postIndex=== -1) {
        throw new Error("Post not found");
      }
      const deletedPost = posts[postIndex];
      posts.splice(postIndex, 1);
      return deletedPost;
    },
    deleteComment: (parent, { id }) => {
      let commentIndex = comments.findIndex((comment) => comment.id === id);
      if (commentIndex === -1) {
        throw new Error("Comment not found");
      }
      const deletedComment = comments[commentIndex];
      comments.splice(commentIndex, 1);
      return deletedComment;
    },

    // DELETE ALL MUTATIONS
    deleteAllUsers: () => {
      const lenght= users.length;
      users.splice(0, users.length);
      return { count: lenght };
    },
    deleteAllPosts: () => {
      const lenght= posts.length;
      posts.splice(0, posts.length);
      return { count: lenght };
    },
    deleteAllComments: () => {
      const lenght= comments.length;
      comments.splice(0, comments.length);
      return { count: lenght };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      // options
    }),
  ],
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
