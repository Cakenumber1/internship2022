import {Component} from 'react';

import types from '../types';

export class ArticleOverviewComponentClass extends Component {
  render() {
    const {
      title,
      content,
      user,
      createdAt,
      imageUrl,
    } = this.props;
    return (
      <div className="ArticleOverviewComponent">
        <h1>{title}</h1>
        <div>{content}</div>
        <div>{user.username}</div>
        <div>{createdAt}</div>
        <img src={imageUrl} alt=""/>
      </div>
    );
  }
}

export function ArticleOverviewComponentFunc(
    {title, content, user, createdAt, imageUrl}) {
  return (
    <div className="ArticleOverviewComponent">
      <h1>{title}</h1>
      <div>{content}</div>
      <div>{user.username}</div>
      <div>{createdAt}</div>
      <img src={imageUrl} alt=""/>
    </div>
  );
}

ArticleOverviewComponentClass.propTypes = types;
ArticleOverviewComponentFunc.propTypes = types;
