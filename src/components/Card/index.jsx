import React from "react";
import styles from "./Card.module.scss"
import ContentLoader from "react-content-loader"
import AppContext from "../../context"

const Card = ({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false
}) => {

  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited)
  const obj = { id, parentId: id, title, imageUrl, price }

  const onClickPlus = () => {
    onPlus(obj);
  }

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={styles.card}>
      {
        loading ? (<ContentLoader
          speed={2}
          width={165}
          height={265}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="1" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="232" rx="5" ry="5" width="80" height="25" />
          <rect x="0" y="169" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="191" rx="5" ry="5" width="100" height="15" />
          <rect x="114" y="228" rx="5" ry="5" width="32" height="32" />
        </ContentLoader>
        ) : (
          <>
            {onFavorite && <div className={styles.favorite} onClick={onClickFavorite}>
              <img src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'} alt="unliked-heart" />
            </div>}
            <img width="100%" height={135} src={imageUrl} />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} руб.</b>
              </div>
              {onPlus && <img
                className={styles.plus}
                onClick={onClickPlus}
                src={isItemAdded(id) ? '/img/btn-checked.svg' : '/img/plus.svg'}
                alt="plus button"
              />}
            </div>
          </>
        )}
    </div>
  );
}


export default Card;