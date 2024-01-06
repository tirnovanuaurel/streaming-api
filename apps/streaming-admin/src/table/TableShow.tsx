import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { COMPETITION_TITLE_FIELD } from "../competition/CompetitionTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";

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
        <ReferenceField label="team" source="team.id" reference="Team">
          <TextField source={TEAM_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="won" source="won" />
      </SimpleShowLayout>
    </Show>
  );
};
