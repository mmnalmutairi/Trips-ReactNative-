import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ProfileStore {
  profiles = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  // ****************** FETCH TRIP LIST METHOD ******************
  fetchProfile = async () => {
    try {
      const response = await instance.get("/profiles");
      this.profiles = response.data;
      this.isLoading = false;
    } catch (error) {
      console.error("fetchProfile: ", error);
    }
  };

  // ****************** UPDATE PROFILE METHOD ******************
  updateProfile = async (Updatedprofile) => {
    try {
      const formData = new FormData();
      for (const key in Updatedprofile)
        formData.append(key, Updatedprofile[key]);
      const response = await instance.put(
        `/profiles/${Updatedprofile.id}`,
        formData
      );
      // console.log(response);
      const profile = this.profiles.find((profile) => profile.id === profileId);
      for (const key in profile) profile[key] = response.data[key];
      // console.log(profile);
    } catch (error) {
      console.log(error);
    }
  };

  getProfileById = (userId) =>
    this.profiles.find((profile) => profile.userId === +userId);
}

const profileStore = new ProfileStore();
profileStore.fetchProfile();

export default profileStore;
