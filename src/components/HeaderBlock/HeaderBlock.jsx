import React from 'react'
import style from './HeaderBlock.module.scss'

const HeaderBlock = ({title, paragraph, background = false, button = false}) => {
    const useBackground = background ? {backgroundImage: `url(${background})`} : {}
    return (
        <div className={style.cover} style={useBackground}>
            <div className={style.wrap}>
                <h1 className={style.header}>{title}</h1>
                <p className={style.descr}>{paragraph}</p>
                {button && <button className={style.btn}>
                    Начать бесплатный урок
                    </button>
                }
            </div>
        </div>
    )
}

export default HeaderBlock