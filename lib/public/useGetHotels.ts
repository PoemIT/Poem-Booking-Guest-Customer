import { isAxiosError } from "axios";
import { ErrorType } from "../defined_types";
import { apiClient } from "../api";
import { useQuery } from "@tanstack/react-query";
import { hotelKeys } from "../query-keys/user";

async function fetchHotels() {
  try {
    const { data } = await apiClient.get("/hotels");
    console.log({ hotels: data });
    return data;
  } catch (e) {
    if (isAxiosError<ErrorType>(e)) {
      throw new Error(e.message ?? "Something went wrong");
    }
    throw new Error("Something went wrong");
  }
}

async function fetchHotelDetails(id: string) {
  try {
    const { data } = await apiClient.get(`/hotels/${id}`);
    return data;
  } catch (e) {
    if (isAxiosError<ErrorType>(e)) {
      throw new Error(e.message ?? "Something went wrong");
    }
    throw new Error("Something went wrong");
  }
}

export function useGetHotelsDetail(id: string) {
  return useQuery({
    queryFn: () => fetchHotelDetails(id),
    queryKey: hotelKeys.detail(id),
    enabled: !!id,
  });
}

export function useGetHotels() {
  return useQuery({
    queryFn: fetchHotels,
    queryKey: ["hotels"],
  });
}
