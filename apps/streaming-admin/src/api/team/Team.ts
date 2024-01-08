import { Table } from "../table/Table";

export type Team = {
  createdAt: Date;
  id: string;
  logo: string;
  name: string;
  tables?: Table | null;
  updatedAt: Date;
};
