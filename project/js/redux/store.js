/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { fromJS } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

function configureStore(initialState = fromJS({})) {
	const composeEnhancers = composeWithDevTools({ latency: '100' });
	const store = createStore(
		reducers,
		composeEnhancers(
			applyMiddleware(ReduxThunk)
		)
	);
	return store;
}

export default configureStore;
