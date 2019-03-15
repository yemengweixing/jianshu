import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { Link,withRouter } from 'react-router-dom';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SeaechInfo,
  SearchInfoList,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  Addition,
  Button,
  SearchWrapper
} from "./style";



class Header extends React.Component {


   getListArea  ()  {
   const {focused,list,page,totalPage,handleMouseEnter,handleMouseLeave,mouseIn,handleChangePage} = this.props;
   const newList = list.toJS(); //变成 普通数组
     const pageList =[];

     if (newList.length) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		}
   
     if (focused ||mouseIn) {
       return (
         <SeaechInfo onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
         >
           <SearchInfoTitle>
             热门搜索
             <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>
             <i ref={(icon)=>{this.spinIcon=icon}} className= "iconfont spin">&#xe851;</i>
             换一批</SearchInfoSwitch>
           </SearchInfoTitle>
           <SearchInfoList>
           
           {pageList}
   
             
           </SearchInfoList>
         </SeaechInfo>
       )
     } else {
       return null;
     }
   }





  render() {
    const {focused,handleInputBlur,handleInputFocus,list,login, logout} = this.props;
    return (
      <HeaderWrapper>
          <Link to='/'>
          <Logo />
          </Link>

        <Nav>
        <Link to='/'> <NavItem className="navleft active">首页</NavItem></Link>
          <NavItem className="navleft">下载APP</NavItem>
          {
						login ? 
							<NavItem onClick={logout} className='navright'>退出</NavItem> : 
							<Link to='/login'><NavItem className='navright'>登陆</NavItem></Link>
					}
          <NavItem className="navright">
          <i className="iconfont">&#xe636;</i>
          </NavItem>

          <SearchWrapper>
            <NavSearch
              onMouseEnter={()=>handleInputFocus(list)}
              onBlur={handleInputBlur}/>
               

            <i className={focused ? " iconfont focused zoom" : "iconfont zoom"}>&#xe63d;</i>
           
           
            {this.getListArea()}


          </SearchWrapper>

        </Nav>
        <Addition>
            <Link to='/write'>
              <Button className="writting">
              <i className="iconfont">&#xe608;</i>
              写文章</Button>
            </Link>
          
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}







const mapStateToProps = state => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    login: state.getIn(["login", "login"]),
  };
};

const mapDispathToProps = dispatch => {
  return {
    handleInputFocus(list) {
			(list.size === 0) && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1));
			}else {
				dispatch(actionCreators.changePage(1));
			}
    },
    logout() {
			dispatch(loginActionCreators.logout())
		}
  };
};

export default withRouter(connect(mapStateToProps,mapDispathToProps)(Header));
