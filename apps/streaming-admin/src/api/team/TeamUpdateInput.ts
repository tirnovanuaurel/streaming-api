import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";

export type TeamUpdateInput = {
  logo?: string;
  name?: string;
  tables?: TableWhereUniqueInput | null;
};
