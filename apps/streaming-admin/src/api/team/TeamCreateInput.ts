import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";

export type TeamCreateInput = {
  logo: string;
  name: string;
  tables?: TableWhereUniqueInput | null;
};
