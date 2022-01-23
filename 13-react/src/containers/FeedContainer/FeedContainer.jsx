import React, {useEffect, useState} from 'react';

import FeedComponent from '../../components/FeedComponent/FeedComponent';


function FeedContainer({fetchArticles}) {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchArticles().then((e) => {
      setArticles(e.results);
      setLoading(false);
    });
  }, [fetchArticles]);
  if (!loading) {
    // <FeedComponent articles={null}/>
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
