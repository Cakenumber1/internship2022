import PropTypes from 'prop-types'
import { Component } from 'react';

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

ArticleOverviewComponent.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  user: PropTypes.shape({
    username: PropTypes.string
  }),
  createdAt: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default ArticleOverviewComponent;
