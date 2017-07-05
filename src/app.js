import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';

import store from './store';
import TwitSplit from './components/TwitSplit';

render(
	<Provider store={store}>
		<TwitSplit />
	</Provider>
	, document.querySelector('#app')
);
