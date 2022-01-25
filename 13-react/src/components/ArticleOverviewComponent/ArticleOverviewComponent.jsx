import types from '../types';


function ArticleOverviewComponent(
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

ArticleOverviewComponent.propTypes = types;

export default ArticleOverviewComponent;
