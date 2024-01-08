import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";

export type CompetitionUpdateInput = {
  name?: string;
  tables?: TableWhereUniqueInput | null;
};
