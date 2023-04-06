import styles from './Drawer.module.scss'
import cn from 'classnames';

function Drawer({setShowDrawer}) {
    
    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <h2 className='m-20'>Корзина
                    <img    src='/images/button_remove.svg' 
                            alt='remove button' 
                            className={styles.removeButton} 
                            onClick={()=>{setShowDrawer(false)}}
                    />
                </h2>
                <div className={cn(styles.items, 'd-flex', 'flex-column', 'flex', 'pr-10')}>

                    <div className={cn(styles.cartItem, 'd-flex', 'align-center', 'mb-15')}>
                    <div className={styles.cartItemImage} style={{backgroundImage: 'url(/images/sneakers/1.svg)'}}></div>
                    <div className='mr-20 d-flex flex-wrap'>
                        <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img src='/images/button_remove.svg' alt='remove button' className={cn(styles.removeButton, 'mr-10')}></img>
                    </div>

                </div>      
                <div className={styles.cartTotalBlock}>
                    <ul>
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1 074 руб.</b>
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

export default Drawer;