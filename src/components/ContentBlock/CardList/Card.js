import React, { useState } from 'react'
import style from './Card.module.scss'
import classNames from 'classnames'



function Card({eng, rus}) {
    const [click, setClick] = useState(false)
    
    return (
        <div onClick={() => setClick(!click)} className={classNames(style.card, {[style.done] : click})}>
            <div className={style.cardInner}>
                { !click ? <div className={style.cardFront}>
                    {eng}
                </div>
                :
                <div className={style.cardBack}>
                    {rus}
                </div>}
            </div>
        </div>
    )
}

export default Card
