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
      const formData = new FormData();
      for (const key in newTrip) formData.append(key, newTrip[key]);
      const res = await instance.post("/trips", formData);
      res.data.trips = [];
      this.trips.push(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // ****************** UPDATE TRIP METHOD ******************
  updateTrip = async (Updatedtrip) => {
    try {
      const formData = new FormData();
      for (const key in Updatedtrip) formData.append(key, Updatedtrip[key]);
      const response = await instance.put(
        `/trips/${Updatedtrip.id}`,
        Updatedtrip
      );
      const trip = this.trips.find((trip) => trip.id === response.data.id);
      for (const key in trip) trip[key] = response.data[key];
    } catch (error) {
      console.log(error);
    }
  };

  // ****************** DELETE TRIP METHOD ******************
  deleteTrip = async (tripId) => {
    await instance.delete(`/trips/${tripId}`);
    const updatedTrip = this.trips.filter((trip) => trip.id !== +tripId);
    this.trips = updatedTrip;
  };

  getTripById = (tripId) => this.trips.find((trip) => trip.id === tripId);
}

const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
