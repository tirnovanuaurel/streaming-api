import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const LiveEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <NumberInput step={1} label="away-score" source="awayScore" />
        <TextInput label="away-team" source="awayTeam" />
        <TextInput label="away-team-badge" source="awayTeamBadge" />
        <div />
        <NumberInput step={1} label="home-score" source="homeScore" />
        <TextInput label="home-team" source="homeTeam" />
        <TextInput label="home-team-badge" source="homeTeamBadge" />
      </SimpleForm>
    </Edit>
  );
};
