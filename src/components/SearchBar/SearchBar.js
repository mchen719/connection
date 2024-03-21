// import { useState, useEffect } from 'react'
// import styles from './SearchBar.module.scss'
// // // Priority debugging issue in getting the usersAPI to churn out a thing. it's not working properly
// // This isn't working correctly, needs an exam // import * as usersAPI from '../utilities/users -api';
// // import { useParams } from 'react-router-dom'; // Import useParams
// // const { userId } = useParams(); // Access the jobId parameter from the URL

// // must get search input to correclty pass down. Parent will be the page.

// export default function SearchBar({
//     searchInput,
//     setSearchInput
// }){
//     useEffect(() => {
//         // Fetch the users data based on jobId when the component mounts
// //        app.use('/api/users', require('./routes/api/users'));

//         const fetchSearchedUsers = async () => {

//           /*
//           try {
//             // must see about including the findby name to find by id path here
//             const response = await fetch(`/api/users/${userId}`); // Use fetch to make the request
//             if (!response.ok) {
//               throw new Error('Failed to fetch user');
//             }
//             const data = await response.json(); // Parse the JSON response
//             fetchSearchedUsers(data); // Update the user state with the fetched data
//           } catch (error) {
//             console.error('Error fetching job:', error);
//           }
//         };

//         // fetchJob(); // Call the fetchJob function
//       }, [userId]); // Dependency array ensures useEffect runs only when userId changes

//       */
//       useEffect(function() {
//         async function getFiveRandomUsers() {
//           const allUsers = await usersAPI.getAll();
//           // Below : user math.random multiplied by full array to get presentational 5 random.
//           const fiveUsers = allUsers[Math.floor(Math.random() * allUsers.length - 1)]

//           setDisplayedUsers(users)
//         }

//       //   getItems();
//       //   async function getCart() {
//       //     const cart = await ordersAPI.getCart();
//       //     setCart(cart);
//       //   }
//       //   getCart();
//       // }, []);

//     //   useEffect(function () {
//     //     // Load first five (or random? five users from the API)
//     //     async function fetchOrderHistory() {
//     //       const orders = await ordersAPI.getOrderHistory();
//     //       setOrders(orders);
//     //       // If no orders, activeOrder will be set to null below
//     //       setActiveOrder(orders[0] || null);
//     //     }
//     //     fetchOrderHistory();
//     //   }, []);

//     return (
//         <div className={styles.searchData}>
//             <div className={styles.searchbar}>
//         <label>Reach out to someone below and make a <strong>connection</strong> ...
//         <input className={styles.search}
//             type="text"
//             value={searchInput}
//             placeholder="Search..."
//             onChange={e => setSearchInput(e.target.value)} />
//             </label>
//             </div>
//             <div className={styles.searchedUsers}>
//                 !searchInput ?
//                 getFiveRandomUsers :
//                 null
//                 </div>
//     </div>

//     )
// }
//         }
