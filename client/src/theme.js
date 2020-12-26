import { createMuiTheme } from '@material-ui/core/styles';
import './fonts/fonts.css';

const theme = createMuiTheme({
	typography: {
		fontFamily: "'Lora', serif",
		h4: {
			color: '#222222',
			fontFamily: "'Oswald', sans-serif",
			textTransform: 'uppercase',
			fontSize: '2rem',
		},
		h5: {
			color: '#222222',
			fontFamily: "'Oswald', sans-serif",
			textTransform: 'uppercase',
			fontSize: '1.25rem',
			letterSpacing: '0.2rem',
		},
		h6: {
			color: '#a1a1a1',
			fontSize: '0.8rem',
			fontStyle: 'italic',
		},
		body1: {
			fontFamily: "'Oswald', sans-serif",
			fontSize: '1.25rem',
			letterSpacing: '0.15rem',
			lineHeight: 1,
		},
		button: {
			letterSpacing: '0.10rem',
			fontFamily: "'Oswald', sans-serif",
		},
	},
});

export default theme;
