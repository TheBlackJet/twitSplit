import React from 'react';

import VisibleMsgList from './containers/VisibleMsgList';
import ExecutableFormAddMsg from './containers/ExecutableFormAddMsg';
import Description from './pures/Description';

export default () => {
	return (
		<div className="o-wrapper">
			<Description />
			<ExecutableFormAddMsg />
			<VisibleMsgList />
		</div>
	)
}
