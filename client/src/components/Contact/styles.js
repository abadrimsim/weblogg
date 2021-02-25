import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	dialogTitle: {
		padding: '2rem 3rem 0',
		fontWeight: '600',
	},
	dialogContent: {
		padding: '1rem 3rem',
		display: 'flex',
		flexDirection: 'column',
	},
	dialogActions: {
		justifyContent: 'center',
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
		margin: 0,
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
	buttonCancel: {
		background: 'transparent',
		textTransform: 'capitalize',
		border: 'solid',
		borderWidth: '1.75px',
		borderRadius: 12,
		color: '#867BDD',
		fontSize: '0.9rem',
		margin: '1rem 0.3rem 2rem',
		width: '6rem',
		'&:hover,&:focus': {
			color: '#6E60D9',
			background: 'transparent',
			boxShadow: '0 3px 10px 3px rgba(105, 140, 255, 0.3)',
		},
	},
	buttonSend: {
		background: 'linear-gradient(45deg, #6E60D9 40%, #4AB5E3 90%)',
		textTransform: 'capitalize',
		border: 0,
		borderRadius: 12,
		color: 'white',
		fontSize: '0.9rem',
		margin: '1rem 0.3rem 2rem',
		width: '6rem',
		padding: '0.45rem 0',
		'&:hover,&:focus': {
			boxShadow: '0 3px 10px 3px rgba(105, 140, 255, 0.3)',
		},
	},
});

export default useStyles;
