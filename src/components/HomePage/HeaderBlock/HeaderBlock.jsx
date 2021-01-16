import React from 'react'
import style from './HeaderBlock.module.scss'

class HeaderBlock extends React.Component {

    handlerFocusElement = () => {
        const { inputRef } = this.props
        inputRef.current.focus()
    }

    render() {
        const { title, paragraph, background} = this.props
        const useBackground = background ? {backgroundImage: `url(${background})`} : {}

        return (
            <div className={style.cover} style={useBackground}>
                <div className={style.wrap}>
                    <h1 className={style.header}>{title}</h1>
                    <p className={style.descr}>{paragraph}</p>
                    <button onClick={this.handlerFocusElement} className={style.btn}>
                        Начать бесплатный урок
                    </button>
                </div>
            </div>
        )
    }

}

export default HeaderBlock