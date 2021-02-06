import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.container}>
            {options.map(option => (
    <button
      type="button"
                key={option}
                className={s.button}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ))}
        </div>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),

  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;