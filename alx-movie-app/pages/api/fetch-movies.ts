import { NextApiRequest, NextApiResponse } from 'next';
import { MovieSummary, MoviesApiResponse } from '@/interfaces';

interface RequestBody {
  page?: number;
  year?: number;
  genre?: string;
}

interface ApiMovieData {
  id: string;
  primaryImage?: { url: string };
  titleText?: { text: string };
  releaseYear?: { year: number };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MoviesApiResponse | { error: string }>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body: RequestBody = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { page = 1, year, genre } = body;
    const apiKey = process.env.MOVIE_API_KEY || process.env.TMDB_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: 'Missing MOVIE_API_KEY environment variable.',
      });
    }

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
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
      }
    };

    const response = await fetch(`${url}?${params}`, options);
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    
    const transformedMovies: MovieSummary[] = data.results?.map((movie: ApiMovieData) => ({
      id: movie.id,
      primaryImage: {
        url: movie.primaryImage?.url || '/placeholder-movie.jpg'
      },
      titleText: {
        text: movie.titleText?.text || 'Unknown Title'
      },
      releaseYear: {
        year: movie.releaseYear?.year || null
      }
    })) || [];

    const movieResponse: MoviesApiResponse = {
      movies: transformedMovies,
      page,
      totalPages: data.totalPages || 1,
      totalResults: data.totalResults || 0
    };

    res.status(200).json(movieResponse);
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
}
