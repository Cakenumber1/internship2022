import { useEffect, useState } from 'react';
import FeedComponent from '../../components/FeedComponent/FeedComponent';
import data_articles from '../../articles.json'

function FeedContainer({fetchArticles}) {

  const [articles, setArticles] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchArticles(data_articles).then(e => {
      setArticles(e.results)
      setLoading(false)
    })
  }, [fetchArticles])
  if(!loading){
    //<FeedComponent articles={null}/>
    return (
      <FeedComponent articles={articles}/>
    );
  }
  else {
    return (
      <>loader</>
    )
  }
}

export default FeedContainer;