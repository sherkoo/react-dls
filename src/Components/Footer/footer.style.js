import styled, { css } from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  height: 56px;
  justify-content: end;
  box-shadow: 0px 0px 8px 8px rgba(0, 0, 0, 0.2);
  background-color: white;
  padding: 0 1em;
  props.size === "large"
      ? Vars.size.px40
  ${(props) =>
    props.position == "left" &&
    css`
      justify-content: end;
    `};
`;