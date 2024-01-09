import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TeamShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
