import React, { useState } from 'react'
import style from './Card.module.scss'
import classNames from 'classnames'
import { CheckSquareOutlined, DeleteOutlined } from '@ant-design/icons'


function Card({eng, rus, id, deleteItem}) {
    const [click, setClick] = useState(false)
    const [isRemember, setIsRemember] = useState(false)

    const handlerClickIcon = () => {
        setIsRemember(true)
        setClick(false)
    }

    const handlerClickCard = () => {
        !isRemember && setClick(!click)
    }
    
    return (
        <div className={style.cardBlock}>
            <div onClick={handlerClickIcon} className={style.icon}>
                <div className={classNames(style.rememberIcon, {[style.active]: isRemember})}>
                    <CheckSquareOutlined />
                </div>
                <div onClick={() => deleteItem(id)} className={style.deleteIcon}>
                    <DeleteOutlined  />
                </div>
            </div>

            <div onClick={handlerClickCard} className={classNames(style.card, {[style.done] : click})}>
                <div className={style.cardInner}>
                    { isRemember ? <div className={classNames( style.cardFront ,{[style.remember]: isRemember})}>
                                        {eng}
                                    </div>
                        :
                        !click ? <div className={style.cardFront}>
                                    {eng}
                                </div>
                        :
                                <div className={style.cardBack}>
                                    {rus}
                                </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Card
