import PropTypes from 'prop-types'

function ArticleOverviewComponent({title, content, user, createdAt, imageUrl}) {
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

ArticleOverviewComponent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    user: PropTypes.object,
    createdAt: PropTypes.string,
    imageUrl: PropTypes.string,
  })
}

export default ArticleOverviewComponent;
