import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TeamList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"teams"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="competition" source="competition" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="drawn" source="drawn" />
        <TextField label="goals_conceded" source="goalsConceded" />
        <TextField label="goals_difference" source="goalsDifference" />
        <TextField label="goals_scored" source="goalsScored" />
        <TextField label="ID" source="id" />
        <TextField label="logo" source="logo" />
        <TextField label="lost" source="lost" />
        <TextField label="name" source="name" />
        <TextField label="played" source="played" />
        <TextField label="points" source="points" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="won" source="won" />
      </Datagrid>
    </List>
  );
};
