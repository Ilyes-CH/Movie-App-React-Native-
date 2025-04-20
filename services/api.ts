export const TMDB_CONFIG: any = {
  BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
  }
}

export const fetchMovies = async ({ query }: { query: any }) => {

  try {
    const endpoint: string = query ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` : `${TMDB_CONFIG.BASE_URL}/discover/movies?sort_by=popularity.desc`;
    const response: any = await fetch(endpoint, {
      method: "GET",
      headers: TMDB_CONFIG.headers,
    })
    if (!response.ok) throw new Error("Error getting movies", response.statusText);

    const data: any = await response.json();

    return data.results;

  } catch (error: any) {
    if (error.status !== 200) {
      throw new Error("Failed to fetch movies", error.statusText)
    }
  }
}

