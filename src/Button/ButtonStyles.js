import styled from "styled-components";

const sizes = {
  sm: "25%",
  md: "40%",
  lg: "75%",
};

const default_color = {
  fg: "white",
  hover_bg: "#191A19",
  bg: "#393737",
  hover_fg: "white",
};

export const DefaultStyledButton = styled.button.attrs(({ disabled }) => {
  return { disabled };
})`

  width: ${({ size = "md" }) => {
    return sizes[size];
  }};
  min-width: max-content;

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
  border: 1px solid
    ${({ color = default_color }) => {
    return color["bg"];
  }};

  &:not([disabled]):hover {
    cursor: pointer;
    color: ${({ color = default_color }) => color["hover_fg"]};
    background-color: ${({ color = default_color }) => color["hober_bg"]};
  }
`;

export const TextStyledButton = styled(DefaultStyledButton)`
  color: ${({ color = default_color }) => {
    return color["bg"];
  }};
  background-color: transparent;
  border: none;
  &:not([disabled]):hover {
    cursor: pointer;
    color: ${({ color = default_color }) => color["hover_fg"]};
    background-color: ${({ color = default_color }) => color["hober_bg"]};
  }
`;
