import { Menu, Layout } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom';
import FirebaseContext from '../../firebaseContext';
import style from './Navbar.module.css'

const { Header } = Layout;

class Navbar extends React.PureComponent {


    handleExit = () => {
        const { signOut, setUserUid} = this.context
        setUserUid(null)
        signOut()
    }

    render() {
        return (
            <div>
                <Layout>
                    <Header style={{ position: 'fixed', zIndex: 100, width: '100%' }}>
                        <Menu className={style.menu} theme="dark" mode="horizontal" defaultSelectedKeys={'1'} >        
                            <Menu.Item key="1">
                                <Link to='/'>Home</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to='/about'>About</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to='/contact'>Contact</Link>
                            </Menu.Item>
                            <Menu.Item onClick={this.handleExit} className={style.exit} key='4'>
                                <Link to='/'>Exit</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                </Layout>
    
            </div>
        )
    }

}

Navbar.contextType = FirebaseContext

export default Navbar
