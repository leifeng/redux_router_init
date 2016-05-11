import createStore	from 'redux/lib/createStore';
import compose	from 'redux/lib/compose';
import combineReducers	from 'redux/lib/combineReducers';
import applyMiddleware from 'redux/lib/applyMiddleware';
import {routerReducer,routerMiddleware} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers/index';


const rootReducer = combineReducers({
	reducers,
	routing: routerReducer
})
const createStoreWithMiddleware = compose(
	applyMiddleware(thunkMiddleware)
)(createStore);

export default function configureStore(initialState) {
	const store = createStoreWithMiddleware(rootReducer, initialState);
	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers/index');
			store.replaceReducer(nextRootReducer);
		});
	}
	return store;
}