import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		backgroundColor: '#FFFFFF',
		borderRadius: 15,
		boxShadow: '0 3px 10px 5px #E8EDF4',
		display: 'flex',
		margin: '0.75rem auto',
	},
	postImage: {
		width: '20rem',
		borderRadius: 15,
		margin: '1.5rem',
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
		color: 'rgba(0, 0, 0, 0.54)',
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
