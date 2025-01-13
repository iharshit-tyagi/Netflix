import  { GoogleGenerativeAI } from "@google/generative-ai";
import { GPT_SK } from "./constants";



const genAI = new GoogleGenerativeAI(GPT_SK);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
export default model;
