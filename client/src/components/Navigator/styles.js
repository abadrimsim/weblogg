import { makeStyles } from '@material-ui/core/styles';
import drawerImage from '../../resources/images/weblogg-navigator.jpg';

const useStyles = makeStyles((theme) => ({
	categoryHeader: {
		color: '#fff',
		textTransform: 'uppercase',
		textAlign: 'center',
		'&:hover,&:focus': {
			color: '#e4cb98',
		},
	},
	drawer: {
		backgroundImage: 'url(' + drawerImage + ')',
		backgroundPosition: 'center',
		width: '25vw',
		padding: '15rem 2rem',
		alignItems: 'center',
		display: 'flex',
	},
}));

export default useStyles;
