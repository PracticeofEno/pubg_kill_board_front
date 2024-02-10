import { UserInterface } from "@/utils/interface";
import axios, { type AxiosResponse } from "axios";


export async function getUserByApiKeyId(apiKey: string) {
    let response;
    try {
        response = await axios.get(`/api/users/random_string?api_key=${apiKey}`);
        return response.data;
    }
    catch (e) {
        console.log(e);
        return null;
    }
}

export async function getSettingData(random_string: string) {
    let response;
    try {
        response = await axios.get(`/api/users/user?random_string=${random_string}`);
        return response.data.user;
    }
    catch (e) {
        console.log(e);
        return null;
    }
}

export async function updateSettingData(data: UserInterface) {
    let response;
    try {
        response = await axios.post(`/api/users/user`, {
            "random_string": data.randomString,
            "percent_data": data.percents,
            "current_kill": data.currentKill,
            "target_kill": data.targetKill
        })
    }
    catch (e) {
        console.log(e);
        return null;
    }
}

