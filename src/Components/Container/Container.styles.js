import styled from 'styled-components';

export const Container = styled.div`
  color: ${props => (new Date(props.createdAt))};
`;
