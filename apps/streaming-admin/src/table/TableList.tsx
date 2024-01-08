import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMPETITION_TITLE_FIELD } from "../competition/CompetitionTitle";

export const TableList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"tables"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="competition"
          source="competition.id"
          reference="Competition"
        >
          <TextField source={COMPETITION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="drawn" source="drawn" />
        <TextField label="goals-conceded" source="goalsConceded" />
        <TextField label="goals-difference" source="goalsDifference" />
        <TextField label="goals-scored" source="goalsScored" />
        <TextField label="ID" source="id" />
        <TextField label="lost" source="lost" />
        <TextField label="played" source="played" />
        <TextField label="points" source="points" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="won" source="won" />
      </Datagrid>
    </List>
  );
};
