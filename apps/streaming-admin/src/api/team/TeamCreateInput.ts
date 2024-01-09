export type TeamCreateInput = {
  competition?:
    | "PremierLeague"
    | "LaLiga"
    | "SerieA"
    | "Ligue_1"
    | "Bundesliga"
    | "Championship"
    | "SaudiProLeague"
    | null;
  drawn?: number | null;
  goalsConceded?: number | null;
  goalsDifference?: number | null;
  goalsScored?: number | null;
  logo: string;
  lost?: number | null;
  name: string;
  played?: number | null;
  points?: number | null;
  won?: number | null;
};
