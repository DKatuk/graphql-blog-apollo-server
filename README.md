# graphql-blog-apollo-server

**<ins>To run this apollo server</ins>**

- npm install
- npm start
- Go to GraphQL Playground at http://localhost:4000/


<ins>**Possible Queries** ( Copy&Paste these Queries, Click Prettify💅, and Click Execute Query ▶️)</ins>

query getAllUsers {
  users {
    id
    fullName
    posts {
      id
      title
    }
  }
}

query getAnyUser {
  user(id: "1") {
    fullName
    posts {
      id
      title
    }
  }
}

query getAllPost {
  posts {
    id
    title
    user_id
  }
}

query getAnyPost {
  post(id: "2") {
    title
    user_id
    user {
      id
      fullName
    }
    comments {
      id
      user {
        fullName
      }
      comment
    }
  }
}

query getAllComments {
  comments {
    id
    comment
    user_id
    user {
      id
      fullName
    }
    post_id
    post {
      id
      title
    }
  }
}

query getAnyComment {
  comment(id: "3") {
    comment
    user_id
    user {
      id
      fullName
    }
    post_id
    post {
      id
      title
    }
  }
}

query getUserData {
  user(id: "1") {
    id
    fullName
    posts {
      id
      title
      comments {
        id
        comment
      }
    }
    comments {
      id
      comment
      user {
        id
        fullName
      }
      post {
        id
        title
      }
    }
  }
}

![FireShot Capture 062 - Playground - http___localhost_4000_ - localhost](https://user-images.githubusercontent.com/100930519/197047557-15c2414a-a45c-4d12-9b5a-25b72a447c9b.png)
