import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const TeamEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="competition"
          label="competition"
          choices={[
            { label: "Premier League", value: "PremierLeague" },
            { label: "La Liga", value: "LaLiga" },
            { label: "Serie A", value: "SerieA" },
            { label: "Ligue 1", value: "Ligue_1" },
            { label: "Bundesliga", value: "Bundesliga" },
            { label: "Championship", value: "Championship" },
            { label: "Saudi Pro League", value: "SaudiProLeague" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="drawn" source="drawn" />
        <NumberInput step={1} label="goals_conceded" source="goalsConceded" />
        <NumberInput
          step={1}
          label="goals_difference"
          source="goalsDifference"
        />
        <NumberInput step={1} label="goals_scored" source="goalsScored" />
        <TextInput label="logo" source="logo" />
        <NumberInput step={1} label="lost" source="lost" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="played" source="played" />
        <NumberInput step={1} label="points" source="points" />
        <NumberInput step={1} label="won" source="won" />
      </SimpleForm>
    </Edit>
  );
};
