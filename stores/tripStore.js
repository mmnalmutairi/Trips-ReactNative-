import { makeAutoObservable } from "mobx";
import instance from "./instance";
import AsyncStorage from "@react-native-async-storage/async-storage";

class TripStore {
  trips = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  // ****************** FETCH TRIP LIST METHOD ******************
  fetchTrips = async () => {
    try {
      const response = await instance.get("/trips");
      this.trips = response.data;
      this.isLoading = false;
    } catch (error) {
      console.error("fetchTrips: ", error);
    }
  };

  // ****************** CREATE TRIP METHOD ******************
  createTrip = async (newTrip) => {
    try {
      const res = await instance.post("/trips", newTrip);
      await AsyncStorage.setItem("trip", res.data);
    } catch (error) {
      console.error(error);
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
