import {CSSProperties, FunctionComponent} from 'react';

import CardComponent from '../CardComponent/CardComponent';

const sFeedComponent : CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const FeedComponent :
  FunctionComponent<{articles?: any[]}> = ({articles}) => {
    if (articles) {
      return (
        <div style={sFeedComponent}
        >
          {articles.map((card : string) => (
            <CardComponent key={card.toString()} data={card}/>
          ))}
        </div>
      );
    } else {
      return (
        <div>No articles</div>
      );
    }
  };

export default FeedComponent;
