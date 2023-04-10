import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.scss';
import { API_URL } from '../api'


function Card({title, price, imageUrl, id, setChosedItems, setFavoriteItems, refreshFunc, favorited}) {

  const [checked, setChecked] = useState(false)
  const [liked, setLiked] = useState(favorited)
  
  const addCardToServer = () => {
    fetch(`${API_URL}/chosedItems`, {
    method: 'POST',
    headers: {'content-type':'application/json'},
    body: JSON.stringify({
      imageUrl: `${imageUrl}`, 
      title: `${title}`, 
      price: `${price}`, 
      id: `${id}`})
  })
  .then(res => {if (res.ok) {return res.json()}})
  .then(item => {refreshFunc()})
  .catch(error => {console.log(error)})
  }


  const handleClickLike = () => {
    try {
      if(!liked) {
        setLiked(!liked);
        setFavoriteItems(prev => [...prev, {imageUrl, title, price, id}]);
      } else {
        setLiked(!liked);
        setFavoriteItems(prev => prev.filter(item => {return item.id !== id}));        
      }      
    } catch (error) {
      console.log(error);
    }
  }

  const handleClickAdd = (imageUrl, title, price, id) => {
    try {
      if (!checked) {
        setChecked(!checked)
        addCardToServer(imageUrl, title, price, id)
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
  id: PropTypes.number,
  setChosedItems: PropTypes.func,
  setFavoriteItems: PropTypes.func,
  // liked: PropTypes.bool
}

export default Card;