import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TABLE_TITLE_FIELD } from "./TableTitle";
import { COMPETITION_TITLE_FIELD } from "../competition/CompetitionTitle";

export const TableShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="Team" target="tablesId" label="teams">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="logo" source="logo" />
            <TextField label="name" source="name" />
            <ReferenceField label="tables" source="table.id" reference="Table">
              <TextField source={TABLE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
