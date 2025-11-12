/* Teams Types */

export interface Team {
  id: number;
  full_name: string;
  city: string;
  abbreviation: string;
}

export interface TeamsState {
  list: Team[];
  loading: boolean;
}
