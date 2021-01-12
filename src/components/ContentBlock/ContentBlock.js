import { Form ,Button, Input } from 'antd'
import React, { useState } from 'react'
import { getWords } from '../../api/getWords'
import { database } from '../../firebase'
import Card from './CardList/Card'
import style from './ContentBlock.module.css'

const { Search } = Input

class ContentBlock extends React.Component {

    state = {
        words: [],
        value: '',
        loading: false
    }

    componentDidMount() {
        database.ref('/cards').once('value')
        .then(res => {
            this.setState({
                words: res.val()
            })
        })
        
    }

    setNewWord = () => {
        database.ref('/cards').set([...this.state.words, {
            id: +new Date(),
            eng: 'house',
            rus: 'дом'
        }])
    }

    

    handlerDeleteClick = id => {
        this.setState({
            words: this.state.words.filter(word => word.id !== id)
        })
    }

    handlerSetValue = value => {
        console.log(value)
        this.setState({
            value
        })
    }

    getTranslate = async ({eng, rus}) => {
        await getWords(eng)
        this.setState({
            loading: false
        })
    }

    handlerSubmit = values => {
        // this.setState({
        //     loading: true
        // }, this.getTranslate)
        this.setNewWord()
        this.props.formRef.current.resetFields()
    }

    render() {
        return (
            <div className={style.content}>
                <h1>Начать учить Английский просто</h1>
                <p>Кликай по карточкам и узнавай новые слова быстро и легко!</p>
                <div className={style.form}>
                    {/* <Search
                        ref={this.props.inputRef}
                        placeholder="input search text"
                        enterButton="Search"
                        size="large"
                        // suffix={suffix}
                        onChange={e => this.handlerSetValue(e.target.value)}
                        onSearch={this.handlerSubmit}
                        value={this.state.value}
                    /> */}
                    <Form ref={this.props.formRef} onFinish={this.handlerSubmit} layout='inline'>
                            <Form.Item
                                label='English Word:'
                                name='eng'
                            >
                                <Input ref={this.props.inputRef} />
                            </Form.Item>
                        
                            <Form.Item
                                label='Русское Слово:'
                                name='rus'
                            >
                                <Input />
                            </Form.Item>
                        <Form.Item >
                            <Button htmlType='submit' loading={this.state.loading}>Добавить</Button>
                        </Form.Item>
                    </Form>
                </div>
    
    
                {/* <form onSubmit={handleSubmit}>
                    <input type='text' value={value} onChange={e => setValue(e.target.value)} />
                    <button >Узнать перевод</button>
                </form> */}
                <div className={style.cards}>
                    {this.state.words.map((word) => <Card deleteItem={this.handlerDeleteClick} key={word.id} {...word} />)} 
                </div>
            </div>
        )
    }

}

export default ContentBlock
