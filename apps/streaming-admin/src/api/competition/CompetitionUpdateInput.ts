import { TableUpdateManyWithoutCompetitionsInput } from "./TableUpdateManyWithoutCompetitionsInput";

export type CompetitionUpdateInput = {
  name?: string | null;
  tables?: TableUpdateManyWithoutCompetitionsInput;
};
