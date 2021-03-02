import { createMuiTheme } from '@material-ui/core/styles';
import './fonts/fonts.css';

let theme = createMuiTheme({
	palette: {
		background: {
			paper: '#F2F5F9',
		},
	},
	typography: {
		fontFamily: "'Poppins', sans-serif",
		h1: {
			fontWeight: '600',
			fontSize: '3rem',
			color: '#272625',
		},
		h2: {
			fontFamily: "'Lora', serif",
			fontWeight: '600',
			fontSize: '1.5rem',
			color: '#272625',
		},
		h4: {
			color: '#272625',
			fontWeight: '600',
			fontSize: '1.25rem',
		},
		h5: {
			fontFamily: "'Lora', serif",
			color: '#272625',
			fontWeight: '700',
		},
		h6: {
			fontFamily: "'Lora', serif",
			// fontSize: '0.875rem',
			// fontWeight: '500',
			fontSize: '1rem',
			fontWeight: '700',
		},
		body1: {
			fontSize: '0.9rem',
			fontWeight: '500',
			lineHeight: 1.5,
		},
		body2: {
			color: 'rgba(0, 0, 0, 0.54)',
			fontWeight: '500',
		},
		subtitle1: {
			fontSize: '0.8rem',
			color: '#78828C',
		},
		subtitle2: {
			color: '#6E60D9',
			fontSize: '0.8rem',
		},
		button: {
			'&:hover,&:focus': {
				outline: 'none',
			},
		},
	},
});

export default theme;
