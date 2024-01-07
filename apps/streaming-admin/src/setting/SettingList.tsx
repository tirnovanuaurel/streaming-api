import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SettingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"settings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="channel_logo" source="channelLogo" />
        <TextField label="channel_name" source="channelName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="facebook" source="facebook" />
        <TextField label="ID" source="id" />
        <TextField label="instagram" source="instagram" />
        <TextField label="twiiter" source="twiiter" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
