import styled from 'styled-components';

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 980px;
	margin: 0 auto;
`;

export const HomeLeft = styled.div`
	float: left;
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
	.banner-img {
		width: 625px;
		height: 270px;
	}
`;

export const HomeRight = styled.div`
	width: 280px;
	float: right;
`;

export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
	padding-right: 10px
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;

export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`;

export const ListInfo =	styled.div`
	width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;

export const RecommendWrapper = styled.div`
	margin: 30px 0;
	width: 280px;
`;

export const RecommendItem = styled.div`
	width: 280px;
	height: 50px;
	background: url(${(props) => props.imgUrl});
	background-size: contain;
`;

export const WriterWrapper = styled.div`
display:block;
position: relative;
margin-bottom: 30px;
padding: 10px 22px;
	width: 100%;
	border: 1px solid #f0f0f0;
	border-radius: 6px;
	height: 80px;	
	box-sizing: border-box;
	.Wrapper-img {		
		//margin-right: 5px;
		//margin:  0;	
		width: 60px;
		height: 60px;	
	}
	
`;
export const  WrapperTitle  = styled.div`
//width: 200px;
//height: 60px;
//float: right;
//display: block;
//display: inline-block;
//vertical-align: middle;
//margin-left: 7px;
//box-sizing: border-box;

`
export const  WrapperTitle1  = styled.div`
float: right;
		cursor: pointer;
		//display: block;

`
export const  WrapperTitle2  = styled.div`
font-size:9px;
color: #666;
float: right;
		cursor: pointer;
		position: absolute;
		bottom: 10px;
		right:20px;
		//display: block;
		//box-sizing: border-box;
		//padding-bottom:5px;

`


export const  WrapperAdvert = styled.a.attrs({
	href:'https://cn.udacity.com/dand?utm_source=youdao-jianshu&utm_medium=display&utm_campaign=dand&utm_term=PC-youdao_dand&utm_content=jianshu-dand-022001'
})`
box-sizing: border-box;
border: 1px solid #f0f0f0;
position: relative;
border-radius: 4px;
display: block;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
height: 160px;
width: 100%;
margin-bottom: 20px;
overflow: hidden;
background-image: url("https://oimageb5.ydstatic.com/image?id=7953809412240471167&product=adpublish&w=1280&h=720&sc=0&rm=2&gsb=0&gsbd=60");
`
export const  WrapperAdvert2 = styled.a.attrs({
	href:"https://cn.udacity.com/course/business-analyst-nanodegree--nd100-cn-trial?utm_source=youdao-jianshu&utm_medium=display&utm_campaign=band&utm_term=PC-youdao_dand&utm_content=jianshu-band-080701"
  })`
box-sizing: border-box;
border: 1px solid #f0f0f0;
position: relative;
border-radius: 4px;
display: block;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
height: 160px;
width: 100%;
margin-bottom: 20px;
overflow: hidden;
background-image: url("https://oimagec4.ydstatic.com/image?id=-5719493681271184871&product=adpublish&w=1280&h=720&sc=0&rm=2&gsb=0&gsbd=60");
`

export const LoadMore = styled.div`
	width: 100%;
	height: 40px;
	line-height: 40px;
	margin: 30px 0;
	background: #a5a5a5;
	text-align:center;
	border-radius: 20px;
	color: #fff;
	cursor: pointer;
`;

export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	width: 60px;
	height: 60px;
	line-height: 60px;
	text-align: center;
	border: 1px solid #ccc;
	font-size: 14px;
`