import { Table as TTable } from "../api/table/Table";

export const TABLE_TITLE_FIELD = "id";

export const TableTitle = (record: TTable): string => {
  return record.id?.toString() || String(record.id);
};
