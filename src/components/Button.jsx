import PropTypes from "prop-types";

export default function Button({
  text = "Button",
  icon,
  size = "medium",
  variant = "primary",
  fullWidth = false,
  isDisabled = false,
  onClick,
}) {
  return (
    <button
      className={`button ${variant} ${size} ${isDisabled ? "disabled" : ""} ${
        fullWidth ? "full-width" : ""
      }`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  fullWidth: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
};
