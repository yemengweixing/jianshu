import React, { PureComponent }  from 'react';
import {connect} from 'react-redux'
import {TopicWrapper, TopicItem} from '../style'
import {withRouter} from 'react-router-dom' 

class Topic extends PureComponent {
	render() {
		const { list } = this.props;
		return (
			<TopicWrapper>
				
				{
					list.map((item) => (
						<TopicItem key={item.get('id')}>
							<img
								className='topic-pic'
								src={item.get('imgUrl')}
								alt=''
							/>
							{item.get('title')}
						</TopicItem>
					))
				}




			</TopicWrapper>
		)
	}

	
}
const mapState = (state) => ({
	list: state.getIn(['home', 'topicList'])
});

export default withRouter(connect(mapState, null)(Topic));
