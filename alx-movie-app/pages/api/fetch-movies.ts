import { NextApiRequest, NextApiResponse } from 'next';
import { MoviesProps } from '@/interfaces';

interface RequestBody {
  page?: number;
  year?: number;
  genre?: string;
}

interface MovieResponse {
  movies: MoviesProps[];
  totalPages: number;
  totalResults: number;
}

interface ApiMovieData {
  id: string;
  primaryImage?: { url: string };
  titleText?: { text: string };
  releaseYear?: { year: number };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieResponse | { error: string }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { page = 1, year, genre }: RequestBody = req.body;

    const url = 'https://moviesdatabase.p.rapidapi.com/titles';
    const params = new URLSearchParams({
      page: page.toString(),
      limit: '20',
    });

    if (year) {
      params.append('year', year.toString());
    }

    if (genre && genre !== '') {
      params.append('genre', genre);
    }

    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': process.env.MOVIE_API_KEY || '',
        'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
      }
    };

    const response = await fetch(`${url}?${params}`, options);
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    
    // Transform the API response to match our interface
    const transformedMovies: MoviesProps[] = data.results?.map((movie: ApiMovieData) => ({
      id: movie.id,
      primaryImage: {
        url: movie.primaryImage?.url || '/placeholder-movie.jpg'
      },
      titleText: {
        text: movie.titleText?.text || 'Unknown Title'
      },
      releaseYear: {
        year: movie.releaseYear?.year?.toString() || 'Unknown'
      }
    })) || [];

    const movieResponse: MovieResponse = {
      movies: transformedMovies,
      totalPages: data.totalPages || 1,
      totalResults: data.totalResults || 0
    };

    res.status(200).json(movieResponse);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
}
