import styles from './PostFeed.module.scss';
import PostItem from '../PostItem/PostItem';
import { useState, useEffect } from 'react';

export default function PostFeed({ user, posts }) {
	if (!Array.isArray(posts) || posts.length === 0) {
		return (
			<main>
				<p>No Posts Available</p>
			</main>
		);
	}

	const displayPosts = posts.map((post) => (
		<PostItem key={post._id} PostItem={post} />
	));

	return (
		<>
			<main className={styles.PostFeed}>{displayPosts}</main>
		</>
	);
}
