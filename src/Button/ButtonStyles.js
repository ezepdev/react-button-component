import styled from "styled-components";

const sizes = {
  sm: "25%",
  md: "40%",
  lg: "75%",
};

const default_color = {
  fg: "white",
  hover_bg: "#222831",
  bg: "#393E46",
  hover_fg: "white",
};

export const IconButton = styled.span`
  margin: 0 10px;
`;

export const DefaultStyledButton = styled.button.attrs(({ disabled }) => {
  return { disabled };
})`
  display: flex;
  width: ${({ size = "md" }) => {
    return sizes[size];
  }};
  min-width: max-content;
  justify-content: center;
  align-items: center;
  color: ${({ color = default_color }) => color["fg"]};
  background-color: ${({ color = default_color }) => color["bg"]};
  border: none;
  border-radius: 1rem;
  font-weight: 500;
  padding: 0.5em 1.3em;

  &:not([disabled]):hover {
    cursor: pointer;
    color: ${({ color = default_color }) => color["hover_fg"]};
    background-color: ${({ color = default_color }) => color["hover_bg"]};
  }

  &:disabled {
    opacity: 50%;
  }
`;

export const OutlineStyledButton = styled(DefaultStyledButton)`
  color: ${({ color = default_color }) => {
    return color["bg"];
  }};
  background-color: transparent;
  border: 2px solid
    ${({ color = default_color }) => {
      return color["bg"];
    }};

  &:not([disabled]):hover {
    cursor: pointer;
    background-color: transparent;
    border: 2px solid
      ${({ color = default_color }) => {
        return color["hover_bg"];
      }};
    color: ${({ color = default_color }) => color["hover_bg"]};
  }
`;

export const TextStyledButton = styled(DefaultStyledButton)`
  color: ${({ color = default_color }) => {
    return color["bg"];
  }};
  background-color: transparent;
  &:not([disabled]):hover {
    cursor: pointer;
    color: ${({ color = default_color }) => color["hover_bg"]};
    background-color: transparent;
  }
`;
