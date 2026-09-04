import { isAxiosError } from "axios";
import { apiClient } from "../api";
import { CitiesResponse } from "../types/cities&amenities";
import { useQuery } from "@tanstack/react-query";
import { cityKeys } from "../query-keys/user";
import { ErrorType } from "../defined_types";

async function getCities(): Promise<CitiesResponse> {
  try {
    const { data } = await apiClient.get<CitiesResponse>("/cities");
    return data;
  } catch (e) {
    if (isAxiosError<ErrorType>(e)) {
      throw new Error(e.message ?? "Sorry something went wrong");
    }
    throw new Error("Something went wrong");
  }
}

async function getHotelAmenities() {
  try {
    const { data } = await apiClient.get("/hotels/amenities");
    return data;
  } catch (e) {
    throw new Error("Something went wrong");
  }
}

async function getApartmentAmenities() {
  try {
    const { data } = await apiClient.get("/apartments/amenities");
    return data;
  } catch (e) {
    throw new Error("Something went wrong");
  }
}

export function useGetApartmentAmenities() {
  return useQuery({
    queryKey: ["apartment_amenities"],
    queryFn: getApartmentAmenities,
  });
}

export function useGetHotelAmenities() {
  return useQuery({
    queryKey: ["amnenities"],
    queryFn: getHotelAmenities,
  });
}

export function useGetCities() {
  return useQuery({
    queryFn: getCities,
    queryKey: cityKeys.all,
  });
}
