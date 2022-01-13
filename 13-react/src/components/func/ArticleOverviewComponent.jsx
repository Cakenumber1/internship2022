import PropTypes from 'prop-types'

function ArticleOverviewComponent({ data }) {
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

ArticleOverviewComponent.propTypes = {
  title :  PropTypes.string,
  content :  PropTypes.string,
  user :  PropTypes.object,
  createdAt :  PropTypes.string,
  imageUrl :  PropTypes.string,
}

export default ArticleOverviewComponent;
