import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { CompetitionTitle } from "../competition/CompetitionTitle";
import { TeamTitle } from "../team/TeamTitle";

export const TableCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="competition.id"
          reference="Competition"
          label="competition"
        >
          <SelectInput optionText={CompetitionTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="drawn" source="drawn" />
        <NumberInput step={1} label="goals-conceded" source="goalsConceded" />
        <NumberInput
          step={1}
          label="goals-difference"
          source="goalsDifference"
        />
        <NumberInput step={1} label="goals-scored" source="goalsScored" />
        <NumberInput step={1} label="lost" source="lost" />
        <NumberInput step={1} label="played" source="played" />
        <NumberInput step={1} label="points" source="points" />
        <ReferenceInput source="team.id" reference="Team" label="team">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="won" source="won" />
      </SimpleForm>
    </Create>
  );
};
