import React from "react";
import styles from "./Card.module.scss"

const Card = ({title, imageUrl, price, onFavorite, onPlus}) => {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState()

  const onClickPlus = () => {
    onPlus({title, imageUrl, price});
    setIsAdded(!isAdded);
  }

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt="unliked-heart" />
      </div>
      <img width={133} height={112} src={imageUrl} />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
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