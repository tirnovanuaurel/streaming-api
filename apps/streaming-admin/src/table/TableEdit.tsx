import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CompetitionTitle } from "../competition/CompetitionTitle";
import { TeamTitle } from "../team/TeamTitle";

export const TableEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
        <ReferenceArrayInput
          source="team"
          reference="Team"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TeamTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="won" source="won" />
      </SimpleForm>
    </Edit>
  );
};
