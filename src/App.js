import './App.css';
import React from 'react'
import ContentBlock from './components/ContentBlock/ContentBlock.js';
import FooterBlock from './components/HomePage/FooterBlock/FooterBlock';
import HeaderBlock from './components/HomePage/HeaderBlock/HeaderBlock';
import Info from './components/HomePage/InfoBlock/Info';
import Login from './components/LoginPage/Login';

class App extends React.Component {
	
	formRef = React.createRef()
	inputRef = React.createRef()
	render() {
		return (
			<div>
				{/* <HeaderBlock
					title='Учите слова онлаин'
					paragraph='Воспользуйтесь карточками для запоминания и пополнения активных словарных запасов'
					inputRef={this.inputRef}
				/>
				<Info />
				<ContentBlock inputRef={this.inputRef} formRef={this.formRef} />
				<HeaderBlock 
					title='Изучайте английский с персональным сайтом помощником'
					paragraph='Начните прямо сейчас'
					background='https://literoved.ru/wp-content/uploads/2020/11/23.jpg'
					inputRef={this.inputRef}
				/>
				<FooterBlock /> */}
    			<Login />

			</div>
			
		);
	}


}

export default App;
