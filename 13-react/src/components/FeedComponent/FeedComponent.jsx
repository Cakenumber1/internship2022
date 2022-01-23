import CardComponent from '../CardComponent/CardComponent';

function FeedComponent({articles}) {
  if (articles) {
    return (
      <div>
        {articles.map((card) => (
          <CardComponent key={card.name} data={card.name}/>
        ))}
      </div>
    );
  } else {
    return (
      <div>No articles</div>
    );
  }
}

export default FeedComponent;
