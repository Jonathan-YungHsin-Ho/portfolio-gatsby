import React from 'react';

const SVG = ({
	style = {},
	fill = '#000',
	width = '17.5px',
	height = '17.5px',
	className = '',
	viewBox = '0 0 203 248',
}) => (
	<svg
		version='1.0'
		xmlns='http://www.w3.org/2000/svg'
		style={style}
		// width='200.000000pt'
		width={width}
		// height='190.000000pt'
		height={height}
		// viewBox='0 0 200.000000 190.000000'
		viewBox={viewBox}
		className={`svg-icon ${className || ''}`}
		preserveAspectRatio='xMidYMid meet'>
		<metadata>
			Created by potrace 1.15, written by Peter Selinger 2001-2017
		</metadata>
		<g
			transform='translate(0.000000,248.000000) scale(0.100000,-0.100000)'
			fill={fill}
			stroke='none'>
			<path
				fill={fill}
				d='M960 2438 c-25 -17 -149 -210 -497 -773 l-463 -750 0 -72 0 -72 232
-360 c244 -377 264 -401 332 -401 35 0 1343 387 1380 408 40 24 68 78 63 123
-5 39 -847 1840 -876 1873 -43 49 -118 60 -171 24z m137 -286 c7 -5 180 -363
384 -796 320 -680 369 -792 361 -812 -6 -12 -19 -25 -29 -28 -413 -124 -1107
-326 -1121 -326 -25 0 -42 19 -42 48 0 40 390 1895 402 1909 12 15 27 16 45 5z'
			/>
		</g>
	</svg>
);

export default SVG;
