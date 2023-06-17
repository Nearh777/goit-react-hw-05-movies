// import axios from 'axios';

// const API_KEY = 'e0e97641121feb55735c3e871118ffda';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// export async function getHomeMovies() {
//   const { data } = await axios.get(`/trending/movie/week`, {
//     params: { api_key: API_KEY },
//   });
//   return data.results;
// }

// export async function getMovieByName(query, page) {
//   const { data } = await axios.get(`/search/movie`, {
//     params: {
//       api_key: API_KEY,
//       language: 'en-US',
//       page,
//       query,
//     },
//   });

//   return data.results;
// }

// export async function getMovieDetalis(id) {
//   const { data } = await axios.get(`/movie/${id}`, {
//     params: {
//       api_key: API_KEY,
//       language: 'en-US',
//     },
//   });

//   return data;
// }

// export async function getMovieCast(id) {
//   const { data } = await axios.get(`/movie/${id}/credits`, {
//     params: {
//       api_key: API_KEY,
//       language: 'en-US',
//     },
//   });
//   return data.cast;
// }

// export async function getMovieReviews(id) {
//   const { data } = await axios.get(
//     `/movie/${id}/reviews
// `,
//     {
//       params: {
//         api_key: API_KEY,
//         language: 'en-US',
//       },
//     }
//   );
//   return data.results;
// }


const URL = "https://api.themoviedb.org/3/";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGU5NzY0MTEyMWZlYjU1NzM1YzNlODcxMTE4ZmZkYSIsInN1YiI6IjY0ODlhMWYxZTI3MjYwMDEwNzI0ODAzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PVVR4A0-WiCuxaxXPmGLU73_Bj3_CP-ae7z5y2nZUig'
    }
};

const getDataFilm = async (param) => {
    return fetch(`${URL}${param}${param.includes('?') ? '&language=en-US' : '?language=en-US'}`, options)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.status);
            }
            return res.json()
        })
};

export default getDataFilm;