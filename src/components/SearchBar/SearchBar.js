import { useState } from 'react'
import styles from './SearchBar.module.scss'


export default function SearchBar({
    searchInput,
    setSearchInput
}){
    return (
        <div className={styles.searchData}>
        <label>Enter your search query below...
        <input className={styles.search}
            type="text"
            value={searchInput}
            placeholder="Search..."
            onChange={e => setSearchInput(e.target.value)}
        /></label>
    </div>
    )
}
