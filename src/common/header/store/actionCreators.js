import * as constants from './constants';
import axios from 'axios'
import { fromJS } from 'immutable';

export const searchFocus = () => ({
	type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
	type: constants.SEARCH_BLUR
});


export const getList = () => {
	return (dispatch) => {
		axios.get('https://easy-mock.com/mock/5c8bcfdfddeb60160e72f350/jianshu/headerLi').then((res) => {
			const data = res.data; //json对象
			dispatch(changeList(data.data));//派发数组
		}).catch(() => {
			console.log('error');
		})
	}
}; 

const changeList = (data) => ({
	type: constants.CHANGE_LIST,
	data: fromJS(data),  //普通数组转换
	totalPage: Math.ceil(data.length / 10) //返回长度 每页10个
});

export const mouseEnter = () => ({
	type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
	type: constants.MOUSE_LEAVE
});

export const changePage = (page) => ({
	type:constants.CHANGE_PAGE,
	page
})

/** 
import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
	type: constants.CHANGE_LIST,
	data: fromJS(data),
	totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
	type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
	type: constants.SEARCH_BLUR
});




export const changePage = (page) => ({
	type: constants.CHANGE_PAGE,
	page
});

*/