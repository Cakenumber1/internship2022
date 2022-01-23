import {Link} from 'react-router-dom';

function CardComponent({data}) {
  return (
    <Link to={`/article/${data}`} style={{padding: '12px'}}>{data}</Link>
  );
}

export default CardComponent;
