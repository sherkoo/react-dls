import styled from 'styled-components';
import {Vars} from '../../Styles/vars.style';

export const MessagingContainer = styled.div`
  padding: ${Vars.size.em16};
  height: ${Vars.size.em48};
  display: flex;
  align-items: center;
  margin-bottom: ${Vars.size.em16};
  border-radius: ${Vars.size.px4};
  gap: ${Vars.size.em16};
  background-color: ${(props) =>
    props.type === "info"
      ? Vars.color.blueLight
      : props.type === "success"
      ? Vars.color.success
      : props.type === "error"
      ? Vars.color.error
      : props.type === "warning"
      ? Vars.color.warning
      : Vars.color.blue};
`;