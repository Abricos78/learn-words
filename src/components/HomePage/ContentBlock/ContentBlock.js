import { Form ,Button, Input } from 'antd'
import React, { useState } from 'react'
import { getWords } from '../../../api/getWords'
import { database } from '../../../firebase'
import Card from './CardList/Card'
import style from './ContentBlock.module.css'


class ContentBlock extends React.Component {

    state = {
        words: [],
        value: '',
        loading: false
    }

    

    componentDidMount() {
        database.ref(`/cards/${this.props.userId}`).on('value', res => {
            this.setState({
                words: res.val() || []
            })
        })
        
    }

    setNewWord = (eng, rus) => {
        debugger
        database.ref(`/cards/${this.props.userId}`).set([...this.state.words, {
            id: +new Date(),
            eng,
            rus
        }])
    }

    

    handlerDeleteClick = id => {
        
        database.ref(`/cards/${this.props.userId}`).set(this.state.words.filter(word => word.id !== id))
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
        this.setNewWord(eng, rus)
    }

    handleSubmit = ({eng, rus}) => {
        debugger
        // this.setState({
        //     loading: true
        // }, this.getTranslate)
        this.setNewWord(eng, rus)
        this.props.formRef.current.resetFields()
    }

    render() {
        return (
            <div className={style.content}>
                <h1>Начать учить Английский просто</h1>
                <p>Кликай по карточкам и узнавай новые слова быстро и легко!</p>
                <div className={style.form}>
                    <Form ref={this.props.formRef} onFinish={this.handleSubmit} layout='inline'>
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
                            <Button type='primary' htmlType='submit' loading={this.state.loading}>Добавить</Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className={style.cards}>
                    {this.state.words.map((word) => <Card deleteItem={this.handlerDeleteClick} key={word.id} {...word} />)} 
                </div>
            </div>
        )
    }

}

export default ContentBlock
