import axios from "axios";
const messages = require("../data/res_primary_language.json").messages;

export const apiInstance = {
    instance: axios.create(),
    baseurl: "http://147.182.208.9:8080",
}
apiInstance.instance.defaults.timeout = 2500;

var instanceStatus: object = {
    status: undefined,
    error: undefined
}

export function raiseExeption(error: object) {
    console.log(error)
}

export function getMessage() {
    return messages.loading.toString();
}