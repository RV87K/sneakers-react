import Card from "../components/Card";

function Favorites({ items, onAddToFavorite }) {
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1>Мои закладки</h1>
        <div className="d-flex flex-wrap">
          {items.map((item, index) => (
            <Card
              key={index}
              favorited={true}
              onFavorite={onAddToFavorite}
              { ...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
