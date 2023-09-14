import axios from "axios";

const options = {
  method: "GET",
  url: "https://weatherapi-com.p.rapidapi.com/current.json",
  params: { q: "53.1,-0.13" },
  headers: {
    "X-RapidAPI-Key": "INITKEY",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

export async function GET(req: Request) {
  try {
    const response = await axios.request(options);
    return new Response(JSON.stringify(response.data));
  } catch (error) {
    console.error(error);
  }
}
