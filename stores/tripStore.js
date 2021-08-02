import { makeAutoObservable } from "mobx";
import instance from "./instance";

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
      this.trips.push(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // ****************** DELETE TRIP METHOD ******************
  deleteTrip = async (tripId) => {
    await instance.delete(`/trips/${tripId}`);
    const updatedTrip = this.trips.filter((trip) => trip.id !== +tripId);
    this.trips = updatedTrip;
  };

  // ****************** UPDATE TRIP METHOD ******************
  updateTrip = async (updatedTrip) => {
    try {
      const formData = new FormData();
      for (const key in updatedTrip) formData.append(key, updatedTrip[key]);
      const response = await instance.put(`/trips/${updatedTrip.id}`, formData);
      const trip = this.trips.find((trip) => trip.id === response.data.id);
      for (const key in trip) trip[key] = response.data[key];
    } catch (error) {
      console.log(error);
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
