import styles from './Drawer.module.scss'
import cn from 'classnames';
import PropTypes from 'prop-types';
import { API_URL } from '../api';


function Drawer({setShowDrawer, chosedItems, setChosedItems, totalPrice, amount,  refreshFunc}) {

    const removeCardFromServer = (id) => {        
        fetch(`${API_URL}/chosedItems/${id}`, {
            method: 'DELETE',
        })
        .then(res => {
            if (res.ok) {return res.json()}
            console.log('error on server side')
        })
        .then(task => {
            refreshFunc()
        })
        .catch(error => {console.log(error)})
    }
       
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <h2 className='m-20'>Корзина
                    <img    src='/images/button_remove.svg' 
                            alt='remove button' 
                            className={styles.removeButton} 
                            onClick={()=>{
                                setShowDrawer(false);
                            }}
                    />
                </h2>

                <div className={cn(styles.items, 'd-flex', 'flex-column', 'flex', 'pr-10')}>
                    {chosedItems.map((item, index)=>(
                        <div className={cn(styles.cartItem, 'd-flex', 'align-center', 'mb-15')} key={index} id={index}>
                            <p className='ml-5'>{item.id}</p>
                            <div className={styles.cartItemImage} style={{backgroundImage: `url(${item.imageUrl})`}}></div>
                            <div className='mr-20 d-flex flex-wrap'>
                                <p className='mb-5'>{item.title}</p>
                                <b>{item.price} руб.</b>
                            </div>
                                <img 
                                    src='/images/button_remove.svg' 
                                    alt='remove button' 
                                    className={cn(styles.removeButton, 'mr-10')}
                                    onClick={()=>{removeCardFromServer(item.id)}}
                                />
                        </div>
                    ))}
                </div>    

                <div className={styles.cartTotalBlock}>
                    <ul>
                        <li>
                            <span>Количество:</span>
                            <div></div>
                            <b>{amount} шт.</b>
                        </li>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>{totalPrice.toFixed(2)} руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>{(totalPrice*0.05).toFixed(2)} руб.</b>
                        </li>
                    </ul>
                    <button className={styles.greenButton} onClick={()=>{setShowDrawer(false)}}>Оформить заказ
                        <img src='/images/arrow.svg' alt='arrow'></img>
                    </button>
                </div>
            </div>
        </div>
    )
};


Drawer.propTypes = {
    setShowDrawer: PropTypes.func, 
    chosedItems: PropTypes.array, 
    setChosedItems: PropTypes.func, 
    totalPrice: PropTypes.number, 
    amount: PropTypes.number
}

export default Drawer;