// Functions mapping to tool calls
// Define one function per tool call - each tool call should have a matching function
// Parameters for a tool call are passed as an object to the corresponding function

import { api } from "@/app/api/api";

export const get_weather = async ({
  location,
  unit,
}: {
  location: string;
  unit: string;
}) => {
  const res = await fetch(
    `/api/functions/get_weather?location=${location}&unit=${unit}`
  ).then((res) => res.json());

  console.log("executed get_weather function", res);

  return res;
};

export const get_joke = async () => {
  const res = await fetch(`/api/functions/get_joke`).then((res) => res.json());
  return res;
};

export const get_patients = async ({ searchStr }: { searchStr: string }) => {
  const res = await api.patientsList({ searchstr: searchStr });
  return res;
};

export const get_studies = async ({ filter }: { filter: string }) => {
  const res = await api.studiesList({ filter });
  return res;
};

export const get_sites = async ({ searchStr }: { searchStr: string }) => {
  const res = await api.sitesList({ searchstr: searchStr });
  return res;
};

export const functionsMap = {
  get_weather: get_weather,
  get_joke: get_joke,
  get_patients: get_patients,
  get_studies: get_studies,
  get_sites: get_sites,
};
