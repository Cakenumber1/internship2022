import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import FeedComponent from '../../components/FeedComponent/FeedComponent';
import {articlesIDsSelector} from '../../store/articles/selectors';
import {fetchArticlesThunk} from '../../store/articles/thunks';


function FeedContainer() {
  const dispatch = useDispatch();
  const articleIDs = useSelector(articlesIDsSelector);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // некрасиво
    if (!articleIDs.length) {
      setLoading(true);
      dispatch(fetchArticlesThunk()).then(() => setLoading(false));
    }
  }, [dispatch]);


  if (!loading) {
    return (
      <FeedComponent articles={articleIDs}/>
    );
  } else {
    return (
      <div>loader</div>
    );
  }
}

export default FeedContainer;
