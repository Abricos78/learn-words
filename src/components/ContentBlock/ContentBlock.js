import React, { useState } from 'react'
import { wordsList } from '../../data/wordList'
import Card from './CardList/Card'
import style from './ContentBlock.module.css'

function ContentBlock() {
    const [words, setWords] = useState(wordsList)
    return (
        <div className={style.content}>
            <h1>Начать учить Английский просто</h1>
            <p>Кликай по карточкам и узнавай новые слова быстро и легко!</p>
            <div className={style.cards}>
                {words.map((word, index) => <Card key={index} {...word} />)} 
            </div>
        </div>
    )
}

export default ContentBlock
