import React from 'react';

import VisibleMsgList from './containers/VisibleMsgList';
import ExecutableFormAddMsg from './containers/ExecutableFormAddMsg';

export default () => {
	return (
		<div>
			<ExecutableFormAddMsg />
			<VisibleMsgList />
		</div>
	)
}
