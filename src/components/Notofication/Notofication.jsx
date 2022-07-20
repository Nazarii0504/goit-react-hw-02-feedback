import PropTypes from 'prop-types';
export const Notification = ({ message }) => {
  return <span>{message}</span>;
};
PropTypes.Notification = {
  message: PropTypes.string,
};
