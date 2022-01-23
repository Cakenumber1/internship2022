import {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';

import dataArticles from '../../fakeServer/articles.json';
import {fetchDataWithDelay} from '../../fakeServer/fetch/fetchFunctions';

function findByName(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === target) {
      return arr[i];
    }
  }
}

export default function ArticleOverviewComponent() {
  const location = useLocation().pathname.split('/').pop();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState('');
  useEffect(() => {
    setLoading(true);
    fetchDataWithDelay(dataArticles).then((e) => {
      setData(findByName(e.results, location));
      setLoading(false);
    });
  }, []);
  if (!loading) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      >
        <div>{data.name}</div>
        <div>{data.url}</div>
        <Link to='/feed'>Back to feed</Link>
      </div>
    );
  } else {
    return (<div>loading</div>);
  }
}
