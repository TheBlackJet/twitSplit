import React from 'react';

 export default () => {
	return (
		<div className="o-box">
			<p className="c-desc"># Add your message to the text box, then press "enter".</p>
			<p className="c-desc"># If message length over 50, it will be splitted.</p>
			<p className="c-desc"># Because I used monospace font, the line "+-+-+-..." acts at a ruler for comparing between message's chunks.</p>
			<p className="c-desc"># You can add more rulers by copying the line "+-+-+-...", then add it as adding message.</p>
		</div>
	);
 }