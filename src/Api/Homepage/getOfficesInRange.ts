import { OfficesInRange } from "../../Interfaces/Homepage/index";
import axios from "axios";
import { API } from "../../Constants/Constants";

export const getOfficesInRange = async (
  range: number
): Promise<{ partners: OfficesInRange[] } | undefined> => {
  const apiClient = axios.create({
    baseURL: API.API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  try {
    const response = await apiClient.post("/getPartners", {
      range,
    });

    return response.data;
  } catch (err) {
    console.error(err);
  }
};
