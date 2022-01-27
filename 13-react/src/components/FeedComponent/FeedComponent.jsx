import CardComponent from '../CardComponent/CardComponent';

const sFeedComponent = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

function FeedComponent({articles}) {
  if (articles) {
    return (
      <div style={sFeedComponent}
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
