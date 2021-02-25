import { createMuiTheme } from '@material-ui/core/styles';
import './fonts/fonts.css';

let theme = createMuiTheme({
	palette: {
		background: {
			paper: '#F2F5F9',
		},
	},
	typography: {
		fontFamily: "'Hind Siliguri', sans-serif",
		h1: {
			fontWeight: '600',
			fontSize: '3rem',
			color: '#272625',
		},
		h2: {
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
			color: '#272625',
			fontWeight: '600',
		},
		h6: {
			color: '#272625',
			fontWeight: '600',
		},
		body1: {
			fontSize: '0.9rem',
			fontWeight: '500',
			lineHeight: 1.5,
		},
		body2: {
			color: 'rgba(0, 0, 0, 0.54)',
			fontWeight: '600',
		},
		button: {
			'&:hover,&:focus': {
				outline: 'none',
			},
		},
	},
});

theme = {
	...theme,
	overrides: {
		MuiGrid: {
			root: {
				backgroundColor: '#F2F5F9',
			},
		},
		MuiList: {
			padding: {
				paddingTop: 0,
				paddingBottom: 0,
			},
		},
		MuiListItem: {
			button: {
				'&:hover,&:focus': {
					color: '#989EAA',
				},
			},
			gutters: {
				paddingLeft: 0,
			},
		},
		MuiAvatar: {
			root: {
				display: 'inline-block',
			},
		},
		MuiButtonBase: {
			root: {
				'&:hover,&:focus': {
					outline: 'none',
					// color: '#e6ecf4',
				},
			},
		},
		MuiCardContent: {
			root: {
				textAlign: 'left',
			},
		},
	},
};

export default theme;
