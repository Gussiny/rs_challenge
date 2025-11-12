/* Weather Types */

export interface WeatherCondition {
  text: string;
  icon: string;
  code: number;
}

export interface WeatherResponse {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: WeatherCondition;
}

export interface WeatherState {
  city: string | null,
  data: WeatherResponse | null,
  loading: boolean,
}