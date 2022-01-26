import {useSelector} from 'react-redux';

import FeedComponent from '../../components/FeedComponent/FeedComponent';
import {articlesIDsSelector} from '../../store/articles/selectors';


function FeedContainer() {
  const articleIDs = useSelector(articlesIDsSelector);

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
