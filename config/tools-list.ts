// List of tools available to the assistant
// No need to include the top-level wrapper object as it is added in lib/tools/tools.ts
// More information on function calling: https://platform.openai.com/docs/guides/function-calling

import { api } from "@/app/api/api";

export const toolsList = [
  {
    name: "get_weather",
    description: "Get the weather for a given location",
    parameters: {
      location: {
        type: "string",
        description: "Location to get weather for",
      },
      unit: {
        type: "string",
        description: "Unit to get weather in",
        enum: ["celsius", "fahrenheit"],
      },
    },
  },
  {
    name: "get_joke",
    description: "Get a programming joke",
    parameters: {},
  },
  {
    name: "get_patients",
    description: "Get the latest patients",
    parameters: {
      searchStr: {
        type: "string",
        description: "Patient name or part of the name",
      },
    },
  },
  {
    name: "get_studies",
    description: "Get studies",
    parameters: {
      filter: {
        type: "string",
        description: "Study filter",
      },
    },
  },
  {
    name: "get_sites",
    description: "Get sites",
    parameters: {
      searchStr: {
        type: "string",
        description: "Site name or part of the name",
      },
    },
  }
];
