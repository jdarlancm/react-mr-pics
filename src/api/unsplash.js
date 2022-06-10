import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID pxrGX4i8SFcZidJc8RsB8Fd6SB-UNIrAUWzz_w7l99k'
    }
});