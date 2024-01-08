import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AppSettingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="channel_logo" source="channelLogo" />
        <TextInput label="channel_name" source="channelName" />
        <TextInput label="facebook" source="facebook" />
        <TextInput label="instagram" source="instagram" />
        <TextInput label="twiiter" source="twiiter" />
      </SimpleForm>
    </Create>
  );
};
