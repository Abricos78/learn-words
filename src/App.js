import './App.css';
import ContentBlock from './components/ContentBlock/ContentBlock.js';
import FooterBlock from './components/FooterBlock/FooterBlock';
import HeaderBlock from './components/HeaderBlock/HeaderBlock';
import Info from './components/InfoBlock/Info';

const App = () => {
	return (
		<div>
			<HeaderBlock
				title='Учите слова онлаин'
				paragraph='Воспользуйтесь карточками для запоминания и пополнения активных словарных запасов'
			/>
			<Info />
			<ContentBlock />
			<HeaderBlock 
				title='Изучайте английский с персональным сайтом помощником'
				paragraph='Начните прямо сейчас'
				background='https://literoved.ru/wp-content/uploads/2020/11/23.jpg'
				button={true}
			/>
			<FooterBlock />
		</div>
		
	);
}

export default App;
