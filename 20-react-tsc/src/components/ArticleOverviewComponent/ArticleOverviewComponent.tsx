import {CSSProperties, useState} from 'react';
import {useSelector} from 'react-redux';
import {Link, useLocation} from 'react-router-dom';

import {articleByIDSelector} from '../../store/articles/selectors';
import {EntityId} from '@reduxjs/toolkit';


const sArticleOverviewComponent : CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export default function ArticleOverviewComponent() {
  const uniqName = useLocation().pathname.split('/').pop();
  const {name, url} = useSelector(
      (state) => articleByIDSelector(state, uniqName as EntityId),
  );
  const [loading] = useState(false);
  if (!loading) {
    return (
      <div style={sArticleOverviewComponent}
      >
        <div>{name}</div>
        <div>{url}</div>
        <Link to="/feed">Back to feed</Link>
      </div>
    );
  } else {
    return (<div>loading</div>);
  }
}
