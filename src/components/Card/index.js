import PropTypes from 'prop-types';
import styles from './Card.module.scss'

function Card({title, price, imageUrl, id}) {

  const handleClickLike = (e) => {
    try {
      console.log(e)
    } catch (error) {
      console.error();
    }
  }

  const handleClickAdd = (e) => {
    try {
      console.log(e.target)
    } catch (error) {
      console.error();
    }
  }

    return (
        <div className={styles.card}>
            <button className={styles.like_button} onClick={handleClickLike}>
                <img src="/images/heart-icon.svg" alt="heart icon" width={32} height={32}></img>
            </button>
            <img src={imageUrl} alt="picture" width={133} height={112}></img>              
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} руб.</b>
              </div>            
              <button className={styles.add_button} onClick={handleClickAdd}>
                <img src="/images/button_plus.svg" alt="add-button picture"></img>
              </button>
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