import React,{PureComponent} from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style';
import { Link } from 'react-router-dom';
import {actionCreators } from '../store'

class  List extends PureComponent {
	render() {
		const { list, getMoreList, page } = this.props;
		return (
			<div>
				{
					list.map((item, index) => {
						return (
							<Link key={index} to={'/detail/' + item.get('id')}>
								<ListItem key={index}>
									<img alt='' className='pic' src={item.get('imgUrl')} />
									<ListInfo>
										<h3 className='title'>{item.get('title')}</h3>
										<p className='desc'>{item.get('desc')}</p>
									</ListInfo>
								</ListItem>
							</Link>
						);
					})
				}
				<LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
			</div>
		)
	}

	
}

const mapState = (state) => ({
	list: state.getIn(['home', 'articleList']),
	page: state.getIn(['home', 'articlePage']) //加载页  默认加载第一页
});


const mapDispatch = (dispatch)=>( {
	getMoreList(page) {
		dispatch(actionCreators.getMoreList(page) )
	},

	changeHomeData() {
		dispatch(actionCreators.getMoreList() )
		}
});	

export default connect(mapState, mapDispatch)(List); 