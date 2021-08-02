import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { makeAutoObservable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";

class AuthStore {
    user = null;

    constructor() {
        makeAutoObservable(this);
    }

    signup = async (newUser) => {
        try {
            const res = await instance.post("/signup", newUser);
            this.setUser(res.data.token);
        } catch (error) {
            console.error(error);
        }

    };

    signin = async (userData) => {
        try {
            const res = await instance.post("/signin", userData);
            await this.setUser(res.data.token);
        } catch (error) {
            console.log(error);
        }
    };

    setUser = async (token) => {
        await AsyncStorage.setItem("myToken", token);
        instance.defaults.headers.common.Authorization = `Bearer ${token}`;
        this.user = decode(token);
    };


    signout = async () => {
        delete instance.defaults.headers.common.Authorization;
        await AsyncStorage.removeItem("myToken");
        this.user = null;
    };

    checkForToken = async () => {
        const token = await AsyncStorage.getItem("myToken");
        if (token) {
            const currentTime = Date.now();
            const user = decode(token);
            if (user.exp >= currentTime) {
                this.setUser(token)
            } else {
                this.signout();
            }
        }
    }
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;