import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const LiveCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="away-score" source="awayScore" />
        <TextInput label="away-team" source="awayTeam" />
        <NumberInput step={1} label="home-score" source="homeScore" />
        <TextInput label="home-team" source="homeTeam" />
      </SimpleForm>
    </Create>
  );
};
