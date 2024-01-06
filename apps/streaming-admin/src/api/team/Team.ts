import { Table } from "../table/Table";

export type Team = {
  createdAt: Date;
  id: string;
  logo: string | null;
  name: string | null;
  tables?: Array<Table>;
  updatedAt: Date;
};
