import PropTypes from 'prop-types'
import { Component } from 'react';

class ArticleOverviewComponent extends Component {
  render() {
    const {
      // не будет работать propTypes
      // title,
      // content,
      // user,
      // createdAt,
      // imageUrl,
      data
    } = this.props //this.props.data
    return (
      <div className="ArticleOverviewComponent">
        <h1>{data.title}</h1>
        <div>{data.content}</div>
        <div>{data.user.username}</div>
        <div>{data.createdAt}</div>
        <img src={data.imageUrl} alt=""/>
      </div>
    );
  }
}

ArticleOverviewComponent.propTypes = {
  data: PropTypes.shape({
    title :  PropTypes.string,
    content :  PropTypes.string,
    user :  PropTypes.object,
    createdAt :  PropTypes.string,
    imageUrl :  PropTypes.string,
  })
}

export default ArticleOverviewComponent;
