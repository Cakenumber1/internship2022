import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import FeedComponent from '../../components/FeedComponent/FeedComponent';
import {articlesIDsSelector} from '../../store/articles/selectors';
import {fetchArticlesThunk} from "../../store/articles/thunks";


function FeedContainer() {
  const dispatch = useDispatch();
  const articleIDs = useSelector(articlesIDsSelector);

  useEffect(() => {
    dispatch(fetchArticlesThunk());
  }, []);

  if (articleIDs.length) {
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
