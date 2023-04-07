import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss'

function Card({title, price, imageUrl, id, setChosedItems}) {

  const [checked, setChecked] = useState(false)
  const [liked, setLiked] = useState(false)

  // useEffect(()=>{console.log(id, checked, liked)}, [checked, liked])

  const handleClickLike = () => {
    try {
      setLiked(!liked)
      console.log('like >>>', id)
    } catch (error) {
      console.log(error);
    }
  }

  const handleClickAdd = () => {
    try {
      if (!checked) {
        setChecked(!checked)
        setChosedItems(prev=> [...prev, {imageUrl, title, price, id}])        
      } else {
        setChecked(!checked)
      }   
    } catch (error) {
      console.log(error);
    }
  }

    return (
        <div className={styles.card}>
            <img className={styles.like_button} 
                  onClick={handleClickLike} 
                  src={liked ? "/images/heart-icon_liked.svg" : "/images/heart-icon.svg"}
                  alt="heart icon"
            />
            <img src={imageUrl} 
                  alt="sneakers picture" 
                  width={133} 
                  height={112}
            />             
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} руб.</b>
              </div>            
              <img className={styles.add_button} 
                    onClick={handleClickAdd}
                    src={checked ? "/images/button_checked.svg" : "/images/button_plus.svg"} 
                    alt="addButton picture"
              />              
            </div>
        </div>
    )
}

Card.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  id: PropTypes.number
}

export default Card;