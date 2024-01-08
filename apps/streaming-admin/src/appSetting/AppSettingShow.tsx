import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AppSettingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="channel_logo" source="channelLogo" />
        <TextField label="channel_name" source="channelName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="facebook" source="facebook" />
        <TextField label="ID" source="id" />
        <TextField label="instagram" source="instagram" />
        <TextField label="twiiter" source="twiiter" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
