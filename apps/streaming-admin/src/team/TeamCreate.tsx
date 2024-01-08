import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TableTitle } from "../table/TableTitle";

export const TeamCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="logo" source="logo" />
        <TextInput label="name" source="name" />
        <ReferenceInput source="tables.id" reference="Table" label="tables">
          <SelectInput optionText={TableTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
