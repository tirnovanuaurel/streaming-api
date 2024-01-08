import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AppSettingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="channel_logo" source="channelLogo" />
        <TextInput label="channel_name" source="channelName" />
        <TextInput label="facebook" source="facebook" />
        <TextInput label="instagram" source="instagram" />
        <TextInput label="twiiter" source="twiiter" />
      </SimpleForm>
    </Edit>
  );
};
