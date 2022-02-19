import React from "react";
import {
  TableStyle,
  TableHeadStyle,
  TableBodyStyle,
  TableRowStyle,
  TableDataStyle,
  TableHeadRowStyle,
} from "./table.style";

/**
 * 
 * @param {align} props 
 * @returns left, right
 */

function TableHead(props) {
  return (
    <TableHeadStyle>
      <TableRowStyle>
        {props.head.map((h, index) => {
          return <TableHeadRowStyle key={index}>{h}</TableHeadRowStyle>;
        })}
      </TableRowStyle>
    </TableHeadStyle>
  );
}

function TableBody(props) {
  return (
    <TableBodyStyle>
      {props.body.map((b, index) => {
        return (
          <TableRowStyle key={index}>
            {b.items.map((row, index) => {
              return <TableDataStyle key={index}>{row}</TableDataStyle>;
            })}
          </TableRowStyle>
        );
      })}
    </TableBodyStyle>
  );
}

function Table(props) {
  return (
    <TableStyle align={props.align}>
      <TableHead head={props.head} />
      <TableBody body={props.body} />
    </TableStyle>
  );
}

Table.defaultProps = {
  align: "left",
};

export { Table, TableHead, TableBody };
