import {useEffect, useState} from 'react';

import FeedComponent from '../../components/FeedComponent/FeedComponent';
import dataArticles from '../../fakeServer/articles.json';


function FeedContainer({fetchArticles}) {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchArticles(dataArticles).then((e) => {
      setArticles(e.results);
      setLoading(false);
    });
  }, [fetchArticles]);
  if (!loading) {
    return (
      <FeedComponent articles={articles}/>
    );
  } else {
    return (
      <div>loader</div>
    );
  }
}

export default FeedContainer;
