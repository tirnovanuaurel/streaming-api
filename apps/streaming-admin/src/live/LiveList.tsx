import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LiveList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"lives"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="away-goals" source="awayGoals" />
        <TextField label="away-score" source="awayScore" />
        <TextField label="away-team" source="awayTeam" />
        <TextField label="away-team-badge" source="awayTeamBadge" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="home-goals" source="homeGoals" />
        <TextField label="home-score" source="homeScore" />
        <TextField label="home-team" source="homeTeam" />
        <TextField label="home-team-badge" source="homeTeamBadge" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
