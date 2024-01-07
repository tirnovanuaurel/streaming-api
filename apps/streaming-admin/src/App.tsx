import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CompetitionList } from "./competition/CompetitionList";
import { CompetitionCreate } from "./competition/CompetitionCreate";
import { CompetitionEdit } from "./competition/CompetitionEdit";
import { CompetitionShow } from "./competition/CompetitionShow";
import { TeamList } from "./team/TeamList";
import { TeamCreate } from "./team/TeamCreate";
import { TeamEdit } from "./team/TeamEdit";
import { TeamShow } from "./team/TeamShow";
import { LiveList } from "./live/LiveList";
import { LiveCreate } from "./live/LiveCreate";
import { LiveEdit } from "./live/LiveEdit";
import { LiveShow } from "./live/LiveShow";
import { TableList } from "./table/TableList";
import { TableCreate } from "./table/TableCreate";
import { TableEdit } from "./table/TableEdit";
import { TableShow } from "./table/TableShow";
import { SettingList } from "./setting/SettingList";
import { SettingCreate } from "./setting/SettingCreate";
import { SettingEdit } from "./setting/SettingEdit";
import { SettingShow } from "./setting/SettingShow";
import { ChannelNewList } from "./channelNew/ChannelNewList";
import { ChannelNewCreate } from "./channelNew/ChannelNewCreate";
import { ChannelNewEdit } from "./channelNew/ChannelNewEdit";
import { ChannelNewShow } from "./channelNew/ChannelNewShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Streaming"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Competition"
          list={CompetitionList}
          edit={CompetitionEdit}
          create={CompetitionCreate}
          show={CompetitionShow}
        />
        <Resource
          name="Team"
          list={TeamList}
          edit={TeamEdit}
          create={TeamCreate}
          show={TeamShow}
        />
        <Resource
          name="Live"
          list={LiveList}
          edit={LiveEdit}
          create={LiveCreate}
          show={LiveShow}
        />
        <Resource
          name="Table"
          list={TableList}
          edit={TableEdit}
          create={TableCreate}
          show={TableShow}
        />
        <Resource
          name="Setting"
          list={SettingList}
          edit={SettingEdit}
          create={SettingCreate}
          show={SettingShow}
        />
        <Resource
          name="ChannelNew"
          list={ChannelNewList}
          edit={ChannelNewEdit}
          create={ChannelNewCreate}
          show={ChannelNewShow}
        />
      </Admin>
    </div>
  );
};

export default App;
