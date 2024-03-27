import styles from './PostItem.module.scss';

const PostItem = ({ PostItem }) => {
	return (
		<div key={PostItem._id} className={styles.PostItem}>
			<h2>{PostItem.title}</h2>
			<div className={styles.PostData}>{PostItem.description}</div>
		</div>
	);
};

export default PostItem;
