import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TeamList } from "./team/TeamList";
import { TeamCreate } from "./team/TeamCreate";
import { TeamEdit } from "./team/TeamEdit";
import { TeamShow } from "./team/TeamShow";
import { LiveList } from "./live/LiveList";
import { LiveCreate } from "./live/LiveCreate";
import { LiveEdit } from "./live/LiveEdit";
import { LiveShow } from "./live/LiveShow";
import { ChannelNewList } from "./channelNew/ChannelNewList";
import { ChannelNewCreate } from "./channelNew/ChannelNewCreate";
import { ChannelNewEdit } from "./channelNew/ChannelNewEdit";
import { ChannelNewShow } from "./channelNew/ChannelNewShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

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
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
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
          name="ChannelNew"
          list={ChannelNewList}
          edit={ChannelNewEdit}
          create={ChannelNewCreate}
          show={ChannelNewShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
