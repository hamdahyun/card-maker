import React , { useRef } from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ FileInput, card , updateCard, deleteCard }) => {
   const nameRef = useRef(); 
   const companyRef = useRef(); 
   const themeRef = useRef(); 
   const titleRef = useRef(); 
   const emailRef = useRef(); 
   const messageRef = useRef(); 
   const { name, company, title, email, message, theme, fileName } = card

   const onSubmit = (event) => {
      event.preventDefault()
      deleteCard(card)
   }
   const onFileChange = file => {
       updateCard({
           ...card,
           fileName: file.name,
           fileURL: file.url,
       });
   }
   const onChange = (event) => {
      if (event.currentTarget === null) {
         return;
      } else {
         event.preventDefault()
         updateCard({
            ...card,
            [event.currentTarget.name]: event.currentTarget.value
         })
      }
   }

   return (
   <form className={styles.form}>
      <input ref={nameRef} className={styles.input} type="text" name="name" value={name} onChange= {onChange}/>
      <input ref={companyRef}className={styles.input} type="text" name="company" value={company} onChange= {onChange}/>
      <select ref={themeRef} className={styles.select} name="theme" value={theme} onChange= {onChange}>
         <option value="light">light</option>
         <option value="dark">dark</option>
         <option value="colorful">colorful</option>
      </select>
      <input ref={titleRef} className={styles.input} type="text" name="title" value={title} onChange= {onChange}/>
      <input ref={emailRef}className={styles.input}type="text" name="email" value={email} onChange= {onChange}/>
      <textarea ref={messageRef} className={styles.textarea} name="message" cols="30" rows="10" value={message} onChange= {onChange}></textarea>
      <div className={styles.fileInput}>
         <FileInput name={fileName} onFileChange={onFileChange} />
         <Button name="Delete" onClick = {onSubmit}/>
      </div>
   </form>
   )
};

export default CardEditForm;