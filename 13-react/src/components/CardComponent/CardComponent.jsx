import {Link} from 'react-router-dom';

const sCardComponent = {padding: '12px'};

function CardComponent({data}) {
  return (
    <Link to={`/article/${data}`} style={sCardComponent}>{data}</Link>
  );
}

export default CardComponent;
