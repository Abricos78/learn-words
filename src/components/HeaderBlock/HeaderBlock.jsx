import React from 'react'
import style from './HeaderBlock.module.scss'

const HeaderBlock = ({title, paragraph, hideBackground = false}) => {
    const useBackground = hideBackground ? {backgroundImage: 'none'} : {}

    return (
        <div className={style.cover} style={useBackground}>
            <div className={style.wrap}>
                <h1 className={style.header}>{title}</h1>
                <p className={style.descr}>{paragraph}</p>
            </div>
        </div>
    )
}

export default HeaderBlock