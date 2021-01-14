import './App.css';
import React from 'react'
import LoginPage from './components/LoginPage/LoginPage';
import HomePage from './components/HomePage/HomePage';
import { fire } from './firebase';
import { Spin } from 'antd';
import FirebaseContext from './firebaseContext';
import { Route, Switch } from 'react-router-dom';
import Register from './components/RegisterPage/Register';

class App extends React.Component {

	state = {
		user: null
	}
	
	componentDidMount() {
		const { auth, setUserUid } = this.context
		auth.onAuthStateChanged(user => {
			if (user) {
				setUserUid(user.uid)
				this.setState({
					user
				})
			} else {
				setUserUid(null)
				this.setState({
					user: false
				})
			}
		})
	}

	formRef = React.createRef()
	inputRef = React.createRef()
	render() {
		if (this.state.user === null) {
			return <div className='preloader'>
				<Spin size='large' tip='Loading...'/>
			</div>
		}
		return (
			<div>
				{this.state.user ?
					<HomePage user={this.state.user} formRef={this.formRef} inputRef={this.inputRef} />
				:
					<Switch>
						<Route path='/register'>
							<Register />
						</Route>
						<LoginPage />
					</Switch>
				}


			</div>
			
		);
	}

}

App.contextType = FirebaseContext

export default App;
