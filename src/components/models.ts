export interface Player {
  name: string;
  nation: string;
  portrait?: string;
  point: string;
}

export interface Event {
  id: number;
  name: string;
  venue: string;
  location: string;
  date: string;
  is_happen: boolean;
}
