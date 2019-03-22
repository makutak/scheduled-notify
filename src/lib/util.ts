import axios from "axios";
import * as querystring from "querystring";

export async function notify(message: string) {
    const url = "https://notify-api.line.me/api/notify"
    const token = process.env.TOKEN;
    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Bearer ${token}`,
    };
    const params = querystring.stringify({
        message
    });
    axios.post(url, params, { headers })
}
