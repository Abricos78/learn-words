import React from 'react'
import style from './HeaderBlock.module.scss'

class HeaderBlock extends React.Component {
    useBackground = this.props.background ? {backgroundImage: `url(${this.props.background})`} : {}

    handlerFocusElement = () => {
        this.props.inputRef.current.focus()
    }

    render() {
        return (
            <div className={style.cover} style={this.useBackground}>
                <div className={style.wrap}>
                    <h1 className={style.header}>{this.props.title}</h1>
                    <p className={style.descr}>{this.props.paragraph}</p>
                    <button onClick={this.handlerFocusElement} className={style.btn}>
                        Начать бесплатный урок
                    </button>
                    
                </div>
            </div>
        )
    }

}

export default HeaderBlock