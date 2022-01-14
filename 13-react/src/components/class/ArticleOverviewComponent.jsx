import { Component } from 'react';
import types from '../types';

class ArticleOverviewComponent extends Component {
  render() {
    const {
      title,
      content,
      user,
      createdAt,
      imageUrl,
    } = this.props
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

ArticleOverviewComponent.propTypes = types

export default ArticleOverviewComponent;
