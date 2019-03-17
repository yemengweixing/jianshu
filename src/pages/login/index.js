import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, Input, Button,LoginLogo} from './style'
import { actionCreators } from './store'

class Login extends PureComponent {
	state={
		account:'',
		password:''
	}
	loginAccount (event) {
		this.setState({
			account: event.target.value
		})
	  }
	  loginPassword (event) {
		this.setState({
			password: event.target.value
		})
	  }  

	render() {
		const { loginStatus } = this.props
		if (loginStatus) {
			return (
				<Redirect to='/' />
			)
		}else {
			return (
			<LoginWrapper>
				<LoginLogo/>
					<LoginBox>
						<Input placeholder='账号' value={this.state.account}    onChange={this.loginAccount.bind(this)}    />
						<Input placeholder='密码' type='password' value={this.state.password}      onChange={this.loginPassword.bind(this)}                       />
						<Button onClick={() => this.props.login(this.state.account, this.state.password)}>登陆</Button>
					</LoginBox>
				</LoginWrapper>
				)
		}
	}
}

const mapState = (state) => ({
	loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
	login(accountElem, passwordElem){
		console.log(accountElem, passwordElem)
		dispatch(actionCreators.login(accountElem, passwordElem))
	}
})

export default connect(mapState, mapDispatch)(Login); 