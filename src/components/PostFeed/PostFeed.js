// // PostFeedPage.js
// import React, { useState, useEffect } from 'react';
// import PostItem from './PostItem';
// import NewPostForm from './NewPostForm';

// const PostFeedPage = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     // Fetch posts from the server
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     // Fetch posts from the server
//     const response = await fetch('https://your-api.com/posts');
//     const data = await response.json();
//     setPosts(data);
//   };

//   const createPost = async (newPost) => {
//     // Create a new post on the server
//     await fetch('https://your-api.com/posts', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newPost),
//     });
//     // Fetch updated posts
//     fetchPosts();
//   };

//   return (
//     <div>
//       <h1>Post Feed</h1>
//       <NewPostForm onCreatePost={createPost} />
//       {posts.map((post) => (
//         <PostItem key={post.id} post={post} />
//       ))}
//     </div>
//   );
// };

// export default PostFeedPage;

