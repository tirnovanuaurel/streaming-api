import { Table } from "../table/Table";

export type Competition = {
  createdAt: Date;
  id: string;
  name: string | null;
  tables?: Array<Table>;
  updatedAt: Date;
};
