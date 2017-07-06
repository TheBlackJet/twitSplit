import React from 'react';

import MsgChunk from './MsgChunk';

export default ({ messages }) => {
	return (
		<ul className="o-box c-msg-list">
			<MsgChunk text={'+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-'} />
			{messages.map((msg, i) => <MsgChunk key={i} text={msg} />)}
		</ul>
	);
}
