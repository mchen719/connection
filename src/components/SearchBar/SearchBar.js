import { useState, useEffect } from 'react'
import styles from './SearchBar.module.scss'
// // Priority debugging issue in getting the usersAPI to churn out a thing. it's not working properly
// This isn't working correctly, needs an exam // import * as usersAPI from '../utilities/users -api';
// import { useParams } from 'react-router-dom'; // Import useParams
// const { userId } = useParams(); // Access the jobId parameter from the URL

// must get search input to correclty pass down. Parent will be the page.

export default function SearchBar({
    searchInput,
    setSearchInput
}){
          /*
          try {
            // must see about including the findby name to find by id path here
            const response = await fetch(`/api/users/${userId}`); // Use fetch to make the request
            if (!response.ok) {
              throw new Error('Failed to fetch user');
            }
            const data = await response.json(); // Parse the JSON response
            fetchSearchedUsers(data); // Update the user state with the fetched data
          } catch (error) {
            console.error('Error fetching job:', error);
          }
        };

        // fetchJob(); // Call the fetchJob function
      }, [userId]); // Dependency array ensures useEffect runs only when userId changes

      */

    return (
        <div className={styles.searchData}>
            <div className={styles.searchbar}>
        <input className={styles.search}
            type="text"
            value={searchInput}
            placeholder="Search..."
            onChange={e => setSearchInput(e.target.value)} />
            </div>
    </div>

    )
}
