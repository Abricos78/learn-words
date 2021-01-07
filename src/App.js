import './App.css';
import ContentBlock from './components/ContentBlock/ContentBlock';
import FooterBlock from './components/FooterBlock/FooterBlock';
import HeaderBlock from './components/HeaderBlock/HeaderBlock';

const App = () => {
	return (
		<div>
			<HeaderBlock
			 title = 'Учите слова онлаин'
			 paragraph = 'Воспользуйтесь карточками для запоминания и пополнения активных словарных запасов'
			 />
			<ContentBlock />
			<HeaderBlock hideBackground = {true}/>
			<FooterBlock />
		</div>
		
	);
}

export default App;
