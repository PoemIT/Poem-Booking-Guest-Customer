import { isAxiosError } from "axios";
import { ErrorType } from "../defined_types";
import { apiClient, publicClient } from "../api";
import { useQuery } from "@tanstack/react-query";
import { hotelKeys } from "../query-keys/user";
import { HotelDetailsResponse, HotelsResponse } from "../types/hotels";

async function fetchHotels(): Promise<HotelsResponse> {
  try {
    const { data } = await publicClient.get<HotelsResponse>("/hotels");
    return data;
  } catch (e) {
    if (isAxiosError<ErrorType>(e)) {
      throw new Error(e.message ?? "Something went wrong");
    }
    throw new Error("Something went wrong");
  }
}

async function fetchHotelDetails(id: string): Promise<HotelDetailsResponse> {
  try {
    const { data } = await publicClient.get(`/hotels/${id}`);

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
