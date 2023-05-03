import React from "react";
import styles from "./Card.module.scss"

const Card = (props) => {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onFavorite}>
        <img src="/img/unliked.svg" alt="unliked-heart" />
      </div>
      <img width={133} height={112} src={props.imageUrl} />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
          <img 
            className={styles.plus} 
            onClick={onClickPlus} 
            src={isAdded ? '/img/btn-checked.svg' : '/img/plus.svg'} 
            alt="plus button" />
      </div>
    </div> 
  )
}


export default Card;