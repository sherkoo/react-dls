import styled from "styled-components";
import { Vars } from "../../Styles/vars.style";

const handleAlign = (props) =>
props.align === "left" ? 'left' : 
props.align === "right" ? 'right' : '';

export const TableStyle = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: ${handleAlign};
  margin-bottom: ${Vars.size.em24};
`;

export const TableHeadStyle = styled.thead`
  text-align: ${handleAlign};
  padding: ${Vars.size.px16};
  background-color: ${Vars.color.grey};
  height: ${Vars.size.px32};
`;

export const TableBodyStyle = styled.tbody`
  text-align: ${handleAlign};
  padding: ${Vars.size.px16};
`;

export const TableRowStyle = styled.tr`
  text-align: ${handleAlign};
  height: ${Vars.size.px40};
  border-bottom: 1px solid ${Vars.color.grey};
`;

export const TableDataStyle = styled.td`
  text-align: ${handleAlign};
  padding: 0 1em;
`;

export const TableHeadRowStyle = styled.th`
  text-align: ${handleAlign};
  padding: 0 1em;
`;
