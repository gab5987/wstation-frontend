/*
    This entire file contains functions that are used to interact with the database.
*/
import axios from 'axios';

export const connectToDB = {
    getAllValues: databaseMethods(false, 'http://192.168.0.13:8080/measurements', null),
}

async function databaseMethods(isPost: boolean, url: string, data: any) {
    try {
      var response = await axios({
        method: isPost ? 'post' : 'get',
        url: url,
        data: data
      });
      console.log("data ", data);
      console.log("response ", response);
    }
    catch (error) {
      console.error(error);
    }
  }