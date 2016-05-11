import React,{Component} from 'react';
import Provider from 'react-redux/lib/components/Provider';
import {Router,Route,browserHistory,IndexRoute,Link} from 'react-router';
import syncHistoryWithStore from 'react-router-redux/lib/sync';

import reducers from '../reducers/index';
import configureStore from '../store/index';


const store=configureStore();
const history = syncHistoryWithStore(browserHistory, store);

class NoMatch extends Component{
	render(){
		return <h1>404</h1>
	}
}
class Main extends Component{
	render(){
		return <div><ul><Link to="/page1">page1</Link><Link to="/page2">page2</Link></ul>{this.props.children}</div>
	}
}
class Index extends Component{
	render(){
		return <div>Index</div>
	}
}
class Page1 extends Component{
	render(){
		return <div>Page1</div>
	}
}
class Page2 extends Component{
	render(){
		return <div>Page2</div>
	}
}
const App=()=>{
	return (
		<Provider store={store}>
			<Router history={history}>
				<Route  path="/" component={Main}>
					<IndexRoute component={Index}/>
					<Route path="page1" component={Page1}/>
					<Route path="page2" component={Page2}/>
				</Route>	
				<Route path="*" component={NoMatch}/>			
			</Router>
		</Provider>
	)
}
export default App;