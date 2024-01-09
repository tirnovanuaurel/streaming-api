import { StringFilter } from "../../util/StringFilter";

export type TeamWhereInput = {
  competition?:
    | "PremierLeague"
    | "LaLiga"
    | "SerieA"
    | "Ligue_1"
    | "Bundesliga"
    | "Championship"
    | "SaudiProLeague";
  id?: StringFilter;
  name?: StringFilter;
};
