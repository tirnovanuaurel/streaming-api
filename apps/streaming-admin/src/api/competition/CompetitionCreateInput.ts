import { TableCreateNestedManyWithoutCompetitionsInput } from "./TableCreateNestedManyWithoutCompetitionsInput";

export type CompetitionCreateInput = {
  name?: string | null;
  tables?: TableCreateNestedManyWithoutCompetitionsInput;
};
