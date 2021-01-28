import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		backgroundColor: '#FFFFFF',
		borderRadius: 10,
		boxShadow: '0 3px 10px 5px #E3E9F2',
		display: 'flex',
		margin: '1rem auto',
		// maxWidth: '45vw',
	},
	postImage: {
		width: '20rem',
		borderRadius: 10,
		margin: '0.9rem',
	},
	postTitle: {
		marginBottom: '0.5rem',
	},
	postContainer: {
		flexDirection: 'column',
	},
	postContent: {
		flex: '1 0 auto',
		padding: '2rem 2rem 0 1rem',
	},
	postCategory: {
		backgroundColor: '#D7F5FE',
		color: '#4AC5EB',
		fontWeight: '600',
		display: 'initial',
		padding: '0 0.5rem',
		borderRadius: 10,
	},
	postText: {
		color: '#78828C',
		fontWeight: '500',
		marginTop: '1rem',
	},
	accountUser: {
		padding: '1rem 0 0 0',
	},
	userAvatar: {
		display: 'inline-flex',
		marginTop: '0.5rem',
	},
	userName: {
		display: 'inline-flex',
		position: 'absolute',
		margin: '0.75rem 0.5rem',
		fontSize: '0.8rem',
	},
	date: {
		display: 'inline-flex',
		position: 'absolute',
		margin: '1.75rem 0.5rem',
		fontSize: '0.75rem',
		color: '#78828C',
	},
});

export default useStyles;
