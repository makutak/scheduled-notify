import axios from "axios";
import * as querystring from "querystring";

export async function notify(message: string) {
    const token = process.env.TOKEN;
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${token}`
    };
    const params = querystring.stringify({
        message
    });
    return axios.post("https://notify-api.line.me/api/notify", params, { headers })
}
