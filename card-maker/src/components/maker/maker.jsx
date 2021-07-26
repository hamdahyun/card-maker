import React, { useEffect, useState } from 'react';
import styles from './maker.module.css'
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
    const [cards, setCards] = useState([
        {
            id: '1',
            name: 'dahyun',
            company: 'SSG',
            theme: 'dark',
            title: 'UI Developer',
            email: 'dahuyn1@gmail.com',
            message: 'go for it',
            fileName: 'dahyun',
            fileURL: null,
        },
        {
            id: '2',
            name: 'dahyun2',
            company: 'SSG',
            theme: 'colorful',
            title: 'UI Developer',
            email: 'dahuyn1@gmail.com',
            message: 'go for it',
            fileName: 'dahyun',
            fileURL: null,
        },
        {
            id: '3',
            name: 'dahyun3',
            company: 'SSG',
            theme: 'light',
            title: 'UI Developer',
            email: 'dahuyn1@gmail.com',
            message: 'go for it',
            fileName: 'dahyun',
            fileURL: '',
        }
    ]);
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    } 
    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user) {
                history.push('/');
            }
        })
   })
   const addCard = (card) => {
        const updated = [...cards, card];
        setCards(updated);
   }
    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor cards={cards} addCard={addCard} />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    )
}

export default Maker;