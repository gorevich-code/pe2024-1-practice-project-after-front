import styles from './CollectionCard.module.sass';

function CollectionCard ({ cardData }) {
  return (
    <a
      href='#'
      style={{ backgroundColor: cardData.bgColor }}
      className={styles.collectionCard}
    >
      <img
        className={
          cardData.icon ? styles.collectionCardIcon : styles.collectionCardImg
        }
        src={cardData.icon ? cardData.icon : cardData.image}
      ></img>
      <div className={styles.collectionCardText}>{cardData.text}</div>
    </a>
  );
}

export default CollectionCard;
