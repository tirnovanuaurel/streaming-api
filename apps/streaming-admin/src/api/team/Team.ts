export type Team = {
  competition?:
    | "PremierLeague"
    | "LaLiga"
    | "SerieA"
    | "Ligue_1"
    | "Bundesliga"
    | "Championship"
    | "SaudiProLeague"
    | null;
  createdAt: Date;
  drawn: number | null;
  goalsConceded: number | null;
  goalsDifference: number | null;
  goalsScored: number | null;
  id: string;
  logo: string;
  lost: number | null;
  name: string;
  played: number | null;
  points: number | null;
  updatedAt: Date;
  won: number | null;
};
