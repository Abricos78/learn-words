import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY
let initialize = axios.create({
    auth: API_KEY
})

export let getWords = (text, lang = 'en-ru') => {
    initialize.get(`https://reactmarathon-api.netlify.app/api/translate?text=${text}&lang=${lang}`)
    .then(response => response.data)
}