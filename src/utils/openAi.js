import OpenAI from "openai";
import { GPT_SK } from "./constants";
const openai = new OpenAI({
  apiKey: GPT_SK,
  dangerouslyAllowBrowser: true, // defaults to process.env["OPENAI_API_KEY"]
});
export default openai;
