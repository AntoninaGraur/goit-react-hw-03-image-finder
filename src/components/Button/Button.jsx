import PropTypes from 'prop-types';
import {LoadMoreBtn} from './Button.styled'

const Button = ({ changePage }) => {
  return (
    <div>
      <LoadMoreBtn onClick={changePage}>
        Load More
      </LoadMoreBtn>
    </div>
  );
};

Button.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default Button;