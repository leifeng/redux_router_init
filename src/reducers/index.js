import {combineReducers} from 'redux';

const initData=(state=1,action)=>{
	return state
}
const initData2=(state=2,action)=>{
	return state
}
const dataReducers = combineReducers({
	initData,
	initData2
});
module.exports = dataReducers;