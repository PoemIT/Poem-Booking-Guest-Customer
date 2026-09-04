export interface City {
  id: string;
  regionId: string;
  name: string;
  latitude: number;
  longitude: number;
  createdAt: string;
}

export interface CitiesResponse {
  success: boolean;
  statusCode: number;
  data: City[];
  timestamp: string;
}
