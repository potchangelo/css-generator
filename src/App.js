import React, { useState, useRef } from 'react';
import './Css/Theme.scss';

function App() {
	// States
	const [borderColor, setBorderColor] = useState('#000000');
	const [borderStyle, setBorderStyle] = useState('solid');
	const [borderWidth, setBorderWidth] = useState(1);

	// Refs
	const outputCodeRef = useRef();

	// Elements
	const borderStylesArray = ['solid', 'dotted', 'dashed'];
	const borderStylesElements = borderStylesArray.map(value => 
		<option value={value}>{value.charAt(0).toUpperCase() + value.slice(1)}</option>
	);
	const outputStyle = {border: `${borderWidth}px ${borderStyle} ${borderColor}`}
	const outputCss = `border: ${borderWidth}px ${borderStyle} ${borderColor};`

	// Functions
	function copyCode() {
		const el = document.createElement('textarea');
		el.value = outputCodeRef.current.textContent;
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
	}

	return (
		<div className="app">

			<div className="inputs">
				<div className="field">
					<label className="label">Color</label>
					<div className="control">
						<input 
							className="input"
							type="color" 
							value={borderColor}
							onChange={(e) => setBorderColor(e.target.value)} />
					</div>
				</div>
				<div className="field">
					<label className="label">Style</label>
					<div className="select">
						<select
							value={borderStyle} 
							onChange={(e) => setBorderStyle(e.target.value)} >
							{borderStylesElements}
						</select>
					</div>
				</div>
				<div className="field">
					<label className="label">Width (px)</label>
					<div className="control">
						<input 
							type="range"
							min="0"
							max="40"
							value={borderWidth}
							onChange={(e) => setBorderWidth(e.target.value)} />
					</div>
				</div>
			</div>
			<div className="outputs">
				<div className="outputs__preview" style={outputStyle}></div>
				<div className="outputs__css" ref={outputCodeRef}>{outputCss}</div>
				<button 
					className="outputs__copy" 
					type="button"
					onClick={copyCode} >
					Copy CSS
				</button>
			</div>
		</div>
	);
}

export default App;
