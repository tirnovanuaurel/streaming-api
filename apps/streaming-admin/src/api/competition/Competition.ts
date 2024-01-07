import { Table } from "../table/Table";

export type Competition = {
  createdAt: Date;
  id: string;
  name: string;
  tables?: Array<Table>;
  updatedAt: Date;
};
