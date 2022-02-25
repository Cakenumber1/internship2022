import {FunctionComponent} from 'react';
import {Link} from 'react-router-dom';

const sCardComponent = {padding: '12px'};

const CardComponent: FunctionComponent<{data: string}> = ({data}) => {
  return (
    <Link to={`/article/${data}`} style={sCardComponent}>{data}</Link>
  );
};

export default CardComponent;
