import { Input } from 'antd'
import React, { useState } from 'react'
import { wordsList } from '../../data/wordList'
import Card from './CardList/Card'
import style from './ContentBlock.module.css'

const { Search } = Input

function ContentBlock() {
    const [words, setWords] = useState(wordsList)
    const [value, setValue] = useState('')

    const handlerDeleteClick = id => {
        setWords(words.filter(word => word.id !== id))
    }

    const handleSubmit = e => {
        setValue('')
    }
    return (
        <div className={style.content}>
            <h1>Начать учить Английский просто</h1>
            <p>Кликай по карточкам и узнавай новые слова быстро и легко!</p>
            <div className={style.form}>
                <Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    // suffix={suffix}
                    onChange={e => setValue(e.target.value)}
                    onSearch={handleSubmit}
                />
            </div>


            {/* <form onSubmit={handleSubmit}>
                <input type='text' value={value} onChange={e => setValue(e.target.value)} />
                <button >Узнать перевод</button>
            </form> */}
            <div className={style.cards}>
                {words.map((word) => <Card deleteItem={handlerDeleteClick} key={word.id} {...word} />)} 
            </div>
        </div>
    )
}

export default ContentBlock
