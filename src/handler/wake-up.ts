import { ScheduledHandler, ScheduledEvent, Context, Callback } from "aws-lambda";
import "source-map-support/register";
import { notify } from "../lib/util";

export const handler: ScheduledHandler = async (event: ScheduledEvent, context: Context, cb: Callback) => {
    try {
        await notify("起きなさい");
    } catch (err) {
        const result = err;
        console.log("Error: ", result);
    }
    cb(null, "send!!");
}
