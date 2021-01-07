import React, { useState } from 'react'
import { wordsList } from '../../data/wordList'
import Card from './CardList/Card'
import style from './ContentBlock.module.css'

function ContentBlock() {
    const [words, setWords] = useState(wordsList)
    return (
        <div className={style.content}>
            {words.map((word, index) => <Card key={index} {...word} />)}
        </div>
    )
}

export default ContentBlock
