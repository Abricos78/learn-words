import { Form ,Button, Input } from 'antd'
import React from 'react'
import { getWords } from '../../../api/getWords'
import FirebaseContext from '../../../firebaseContext'
import Card from './CardList/Card'
import style from './ContentBlock.module.css'


class ContentBlock extends React.Component {

    state = {
        words: [],
        value: '',
        loading: false
    }

    componentDidMount() {
        const { getUserWords } = this.context

        getUserWords().on('value', res => {
            this.setState({
                words: res.val() || []
            })
        })
        
    }

    setNewWord = (eng, rus) => {
        const { setUserWords } = this.context
        const { words} = this.state

        setUserWords([...words, {
            id: +new Date(),
            eng,
            rus
        }])
    }

    handlerDeleteClick = id => {
        const { setUserWords } = this.context
        const { words } = this.state

        setUserWords(words.filter(word => word.id !== id))
    }

    handlerSetValue = value => {
        this.setState({value})
    }

    getTranslate = async ({eng, rus}) => {
        await getWords(eng)
        this.setState({
            loading: false
        })
        this.setNewWord(eng, rus)
    }

    handleSubmit = ({eng, rus}) => {
        const { formRef } = this.props

        // this.setState({
        //     loading: true
        // }, this.getTranslate)
        this.setNewWord(eng, rus)
        formRef.current.resetFields()
    }

    render() {
        const { inputRef, formRef} = this.props
        const { words, loading } = this.state

        return (
            <div className={style.content}>
                <h1>Начать учить Английский просто</h1>
                <p>Кликай по карточкам и узнавай новые слова быстро и легко!</p>
                <div className={style.form}>
                    <Form ref={formRef} onFinish={this.handleSubmit} layout='inline'>
                            <Form.Item
                                label='English Word:'
                                name='eng'
                            >
                                <Input ref={inputRef} />
                            </Form.Item>
                        
                            <Form.Item
                                label='Русское Слово:'
                                name='rus'
                            >
                                <Input />
                            </Form.Item>
                        <Form.Item >
                            <Button type='primary' htmlType='submit' loading={loading}>Добавить</Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className={style.cards}>
                    {words.map((word) => <Card deleteItem={this.handlerDeleteClick} key={word.id} {...word} />)} 
                </div>
            </div>
        )
    }
}

ContentBlock.contextType = FirebaseContext

export default ContentBlock
