import React from "react";
import {
  DefaultStyledButton,
  OutlineStyledButton,
  TextStyledButton,
} from "./ButtonStyles";

const Button = ({
  onClick,
  children,
  startIcon,
  endIcon,
  styled: StyledButton,
  color,
  disabled = false,
  size,
}) => {
  const default_colors = {
    primary: {
      fg: "white",
      hover_bg: "#00A32A",
      bg: "#00FF42",
      hover_fg: "white",
    },
    secondary: {
      fg: "white",
      hover_bg: "#0459AF",
      bg: "#0080FF",
      hover_fg: "white",
    },
    danger: {
      fg: "white",
      hover_bg: "#E11F13",
      bg: "#FF1708",
      hover_fg: "white",
    },
  };

  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      color={default_colors[color] || color}
      size={size}
    >
      {startIcon ? <span class="material-icons">{startIcon}</span> : null}

      {children}

      {endIcon ? <span class="material-icons">{endIcon}</span> : null}
    </StyledButton>
  );
};

function SelectButton({
  variant,
  startIcon,
  endIcon,
  onClick,
  children,
  size,
  disabled,
  color,
}) {
  switch (variant) {
    case "text":
      return (
        <Button
          styled={TextStyledButton}
          onClick={onClick}
          startIcon={startIcon}
          endIcon={endIcon}
          children={children}
          size={size}
          color={color}
          disabled={disabled}
        />
      );

    case "outline":
      return (
        <Button
          styled={OutlineStyledButton}
          onClick={onClick}
          startIcon={startIcon}
          endIcon={endIcon}
          children={children}
          size={size}
          color={color}
          disabled={disabled}
        />
      );

    default:
      return (
        <Button
          styled={DefaultStyledButton}
          onClick={onClick}
          startIcon={startIcon}
          endIcon={endIcon}
          children={children}
          size={size}
          color={color}
          disabled={disabled}
        />
      );
  }
}

export default SelectButton;
