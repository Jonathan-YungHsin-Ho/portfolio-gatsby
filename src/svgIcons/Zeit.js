import React from 'react';

const SVG = ({
	style = {},
	fill = '#000',
	width = '17.5px',
	height = '17.5px',
	className = '',
	viewBox = '0 0 200 200',
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
			transform='translate(0.000000,200.000000) scale(0.100000,-0.100000)'
			fill={fill}
			stroke='none'>
			<path
				d='M927 1773 c-36 -65 -143 -260 -240 -433 -487 -879 -648 -1172 -645
-1176 6 -6 1910 -5 1916 0 3 3 0 11 -5 18 -6 7 -25 40 -43 73 -18 33 -110 199
-205 370 -95 171 -244 441 -332 600 -89 160 -175 315 -192 345 -17 30 -63 115
-103 187 -40 73 -76 133 -79 133 -4 0 -36 -53 -72 -117z m114 -453 c61 -113
131 -241 155 -285 23 -44 128 -235 232 -425 104 -190 187 -348 185 -352 -7
-13 -1403 -10 -1403 2 0 10 74 145 533 973 94 169 174 304 178 300 4 -4 58
-100 120 -213z'
			/>
		</g>
	</svg>
);

export default SVG;
