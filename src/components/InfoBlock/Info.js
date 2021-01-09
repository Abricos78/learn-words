import React from 'react'
import style from './Info.module.css'
import { ClockCircleOutlined, HomeOutlined, SmileOutlined } from '@ant-design/icons'

function Info() {
    return (
        <div className={style.info}>
            <h1>Мы создали уроки, чтобы помочь вам уверенее разговаривать на английском языке</h1>
            <div className={style.icons}>
                <div className={style.icon}>
                    <ClockCircleOutlined style={{fontSize: '50px'}} />
                    <p>Учитесь, когда есть свободная минутка</p>
                </div>
                <div className={style.icon}>
                    <HomeOutlined style={{fontSize: '50px'}} />
                    <p>Откуда угодно - дома, в офисе, в кафе</p>
                </div>
                <div className={style.icon}>
                    <SmileOutlined style={{fontSize: '50px'}} />
                    <p>Разговоры по-английски без неловких пауз и "mmmm, how to say ..."</p>
                </div>
                
            </div>
        </div>
    )
}

export default Info
