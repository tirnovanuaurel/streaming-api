import { TableCreateNestedManyWithoutTeamsInput } from "./TableCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  logo: string;
  name: string;
  tables?: TableCreateNestedManyWithoutTeamsInput;
};
