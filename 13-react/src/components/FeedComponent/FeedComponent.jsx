import CardComponent from '../CardComponent/CardComponent';

function FeedComponent({articles}) {
  if (articles) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      >
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
