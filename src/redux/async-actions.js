import { setExperiences } from "./actions";
import Axios from "axios";

export const loadExperiences = async () => {
  const jsonPath = "./experience.json";
  try {
    const response = await Axios.get(jsonPath);
    setExperiences(response.data);
  } catch (error) {
    console.log(`Error loading ${jsonPath}`);
  }
};
