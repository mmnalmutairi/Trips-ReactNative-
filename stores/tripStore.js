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
            const response = await instance.post(`/trips`, formData);
            this.trips.push(response.data);
            // user.trips.push({ id: response.data.id });
        } catch (error) {
            console.error(error);
        }

    };
}

const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
