import React from 'react'
import ContentBlock from './ContentBlock/ContentBlock.js';
import FooterBlock from './FooterBlock/FooterBlock';
import HeaderBlock from './HeaderBlock/HeaderBlock';
import Info from './InfoBlock/Info';

function HomePage({inputRef, formRef, user}) {
    return (
        <div>
            <HeaderBlock
				title='Учите слова онлаин'
				paragraph='Воспользуйтесь карточками для запоминания и пополнения активных словарных запасов'
				inputRef={inputRef}
			/>
			<Info />
			<ContentBlock userId={user.uid} inputRef={inputRef} formRef={formRef} />
			<HeaderBlock 
				title='Изучайте английский с персональным сайтом помощником'
				paragraph='Начните прямо сейчас'
				background='https://literoved.ru/wp-content/uploads/2020/11/23.jpg'
				inputRef={inputRef}
			/>
			<FooterBlock />
        </div>
    )
}

export default HomePage
