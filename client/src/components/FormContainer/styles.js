import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage: 'url(https://i.ibb.co/5jKkJpy/account-login.png)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundColor: '#161C25',
	},
	paper: {
		margin: '20vh 6rem',
		display: 'flex',
		flexDirection: 'column',
	},
	header: {
		textAlign: 'center',
		fontSize: '2.5rem',
		marginBottom: '2rem',
		fontWeight: '600',
	},
	formControl: {
		paddingTop: '1.75rem',
		position: 'relative',
		'& svg,& .fab,& .far,& .fal,& .fas,& .material-icons': {
			color: '#875CC0',
		},
	},
	labelRoot: {
		color: '#875CC0 !important',
		fontWeight: '400',
		fontSize: '0.9rem',
		lineHeight: '1.42857',
		top: '10px',
		'& + $underline': {
			marginTop: '0px',
		},
	},
	underline: {
		'&:hover:not($disabled):before,&:before': {
			borderColor: '#D2D2D2 !important',
			borderWidth: '1px !important',
		},
		'&:after': {
			borderColor: '#875CC0',
		},
	},
	input: {
		color: '#495057',
		'&,&::placeholder': {
			fontSize: '0.9rem',
			fontWeight: '400',
			lineHeight: '1.42857',
			opacity: '1',
		},
		'&::placeholder': {
			color: '#AAAAAA',
		},
	},
	button: {
		marginTop: '3rem',
		background: 'linear-gradient(45deg, #6E60D9 40%, #4AB5E3 90%)',
		border: 0,
		borderRadius: 12,
		color: 'white',
		fontSize: '0.9rem',
		textTransform: 'capitalize',
		'&:hover,&:focus': {
			boxShadow: '0 3px 10px 3px rgba(105, 140, 255, 0.3)',
		},
	},
	helperText: {
		marginTop: '1rem',
		textAlign: 'center',
		fontWeight: '500',
	},
	helperLink: {
		color: '#875CC0',
		'&:hover': {
			textDecoration: 'none',
			color: '#4AB5E3',
		},
	},
});

export default useStyles;
