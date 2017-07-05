import React from 'react';

import MsgChunk from './MsgChunk';

export default ({ messages }) => {
	return (
		<ul>
			{messages.map((msg, i) => <MsgChunk key={i} text={msg} />)}
		</ul>
	);
}
