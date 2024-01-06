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
        <NumberInput step={1} label="away-score" source="awayScore" />
        <TextInput label="away-team" source="awayTeam" />
        <NumberInput step={1} label="home-score" source="homeScore" />
        <TextInput label="home-team" source="homeTeam" />
      </SimpleForm>
    </Edit>
  );
};
