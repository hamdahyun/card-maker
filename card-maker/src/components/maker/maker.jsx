import React, { useEffect, useState } from 'react';
import styles from './maker.module.css'
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ FileInput, authService }) => {
    const [cards, setCards] = useState({
        '1': {
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
        '2': {
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
        '3': {
            id: '3',
            name: 'dahyun3',
            company: 'SSG',
            theme: 'light',
            title: 'UI Developer',
            email: 'dahuyn1@gmail.com',
            message: 'go for it',
            fileName: 'dahyun',
            fileURL: null,
        }
    });

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

   const createOrUpdateCard = (card) => {
        // 성능 진짜 안좋아.
        // const updated = cards.map(item => {
        //     if(card.id === item.id) {
        //         return m
        //     }
        //     return item;
        // })

        // 키로 만들어서 성능을 향상시켜
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
   }


   const deleteCard = (card) => {
    setCards(cards => {
        const updated = {...cards};
        delete updated[card.id];
        return updated;
    });
   }

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor FileInput={FileInput} cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard}/>
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    )
}

export default Maker;