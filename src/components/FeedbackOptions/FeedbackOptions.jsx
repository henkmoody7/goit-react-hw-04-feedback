import PropTypes from 'prop-types';
import { ButtonWrapper, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      {options.map((option, idx) => (
        <Button key={idx} type="button" onClick={onLeaveFeedback}>
          {option}
        </Button>
      ))}
    </ButtonWrapper>
  );
};

FeedbackOptions.propTypes = {
  option: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};
