import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const LiveShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="away-goals" source="awayGoals" />
        <TextField label="away-score" source="awayScore" />
        <TextField label="away-team" source="awayTeam" />
        <TextField label="away-team-badge" source="awayTeamBadge" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="home-goals" source="homeGoals" />
        <TextField label="home-score" source="homeScore" />
        <TextField label="home-team" source="homeTeam" />
        <TextField label="home-team-badge" source="homeTeamBadge" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
