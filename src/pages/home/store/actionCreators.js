import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList
});


	
export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('https://easy-mock.com/mock/5c8bcfdfddeb60160e72f350/jianshu/home').then((res) => {
			const result = res.data.data;
			dispatch(changHomeData(result));
		});
	}
}


const addHomeList = (list, nextPage) => ({
	type: constants.ADD_ARTICLE_LIST,
	list: fromJS(list),
	nextPage
})

export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get('https://easy-mock.com/mock/5c8bcfdfddeb60160e72f350/jianshu/homeList?page=' + page).then((res) => {
			const result = res.data.data;
			dispatch(addHomeList(result, page + 1));
		});
	}
}

export const toggleTopShow = (show) => ({
	type: constants.TOGGLE_SCROLL_TOP,
	show
})