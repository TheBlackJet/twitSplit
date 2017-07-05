import React from 'react';

import MsgChunk from './MsgChunk';

export default () => {
	return (
		<ul>
			<MsgChunk text="the quick brown fox" />
			<MsgChunk text="the lazy dog" />
		</ul>
	);
}
