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
	const borderStylesArray = ['solid', 'dotted', 'dashed', 'double', 'groove', 'ridge', 'inset', 'outset'];
	const borderStylesElements = borderStylesArray.map(value => 
		<option value={value}>{value.charAt(0).toUpperCase() + value.slice(1)}</option>
	);
	const outputStyle = {border: `${borderWidth}px ${borderStyle} ${borderColor}`};
	const outputCss = `border: ${borderWidth}px ${borderStyle} ${borderColor};`;

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
			<nav className="leftnav">
				<div className="leftnav__brand">
					<h1 className="title is-4">CSS Builder</h1>
					<h3 className="subtitle is-6">by zinglecode</h3>
				</div>
				<div className="leftnav__group">
					<h5 className="title is-6">Background</h5>
					<a>Background Color</a>
					<a>Background Gradient</a>
					<a>Background Image</a>
				</div>
				<div className="leftnav__group">
					<h5 className="title is-6">Border</h5>
					<a className="current">Border</a>
					<a>Border Radius</a>
				</div>
			</nav>
			<main className="main">
				<div className="main__columns columns is-gapless">
					<div className="main__column column">
						<section className="main__section main__section--inputs">
							<h4 className="title is-4">Custom</h4>
							<div className="inputs">
							<label className="label">Color</label>
								<div className="field has-addons">
									<div className="control__color control">
										<input 
											className="input"
											type="color" 
											value={borderColor}
											onChange={(e) => setBorderColor(e.target.value)} />
									</div>
									<div className="control is-expanded">
										<input 
											className="input" 
											type="text" 
											placeholder="HEX Color"
											pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
											value={borderColor}
											onChange={(e) => setBorderColor(e.target.value)} />
									</div>
								</div>
								<div className="field">
									<label className="label">Style</label>
									<div className="select is-fullwidth">
										<select
											value={borderStyle} 
											onChange={(e) => setBorderStyle(e.target.value)} >
											{borderStylesElements}
										</select>
									</div>
								</div>
								<div className="field">
									<label className="label">Width (px)</label>
									<div className="control__range control">
										<input 
											type="range"
											min="1"
											max="20"
											value={borderWidth}
											onChange={(e) => setBorderWidth(e.target.value)} />
										<div className="control__range--text">
											<div className="item has-text-grey">1</div>
											<div className="item has-text-grey">20</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
					<div className="main__column column">
						<section className="main__section main__section--preview">
							<h4 className="title is-4">Preview</h4>
							<div className="preview" style={outputStyle}></div>
						</section>
						<section className="main__section main__section--code">
							<h4 className="title is-4 has-text-white">Code</h4>
							<pre className="code__css" ref={outputCodeRef}>
								<code>{outputCss}</code>
							</pre>
							<button 
								className="code__copy button is-success is-fullwidth has-text-weight-bold" 
								type="button"
								onClick={copyCode} >
								COPY
							</button>
						</section>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
