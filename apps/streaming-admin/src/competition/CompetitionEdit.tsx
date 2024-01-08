import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TableTitle } from "../table/TableTitle";

export const CompetitionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <ReferenceInput source="tables.id" reference="Table" label="tables">
          <SelectInput optionText={TableTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
