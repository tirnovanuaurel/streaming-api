import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";

export type CompetitionCreateInput = {
  name: string;
  tables?: TableWhereUniqueInput | null;
};
