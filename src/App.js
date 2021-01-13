import './App.css';
import React from 'react'
import LoginPage from './components/LoginPage/LoginPage';
import HomePage from './components/HomePage/HomePage';
import { fire } from './firebase';
import { Spin } from 'antd';

class App extends React.Component {

	state = {
		user: null
	}
	
	componentDidMount() {
		fire.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({
					user
				})
			} else {
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
					<LoginPage />
				}
			</div>
			
		);
	}


}

export default App;
