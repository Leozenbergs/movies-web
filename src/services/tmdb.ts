import http from "../http-common";

const fetchTMDB = async (url: string, page?: number) => {
  try {
    const { data, status } = await http.get(url, { params: { page }})
    return {data, status}
  } catch (error: any) {
    return {status: error?.response?.status, message: error?.message}
  }
}

export const getTrendingMovies = () => {
  return fetchTMDB("/trending/movie/week")
}

export const getTrendingTv = () => {
  return fetchTMDB("/trending/tv/week")
}

export const getTopRatedMovies = () => {
  return fetchTMDB("/movie/top_rated")
}

export const getTopRatedTv = () => {
  return fetchTMDB("/tv/top_rated")
}

export const getMovieDetails = (id: string | string[]) => {
  return fetchTMDB(`/movie/${id}`)
}

export const getMovies = (query: string, page: number) => {
  return fetchTMDB(`/search/movie?query=${query}`, page)
}