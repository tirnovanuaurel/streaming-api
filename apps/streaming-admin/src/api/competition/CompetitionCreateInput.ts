import { TableCreateNestedManyWithoutCompetitionsInput } from "./TableCreateNestedManyWithoutCompetitionsInput";

export type CompetitionCreateInput = {
  name: string;
  tables?: TableCreateNestedManyWithoutCompetitionsInput;
};
