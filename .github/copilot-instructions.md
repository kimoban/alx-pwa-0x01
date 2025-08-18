<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# ALX Movie App - Copilot Instructions

This is a Next.js 14 movie discovery application built with the Pages Router architecture.

## Tech Stack

- **Framework**: Next.js 14 (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome
- **API**: The Movie Database (TMDB)

## Project Structure

- `components/commons/`: Reusable UI components (Button, Loading, MovieCard)
- `components/layouts/`: Layout components (Header, Footer, Layout)
- `interfaces/`: TypeScript interfaces and types
- `pages/`: Next.js pages and API routes
- `pages/api/`: Backend API routes for TMDB integration
- `styles/`: Global CSS and styling

## Key Components

- **MovieCard**: Displays movie information with poster, title, rating, and overview
- **Layout**: Main layout wrapper with header and footer
- **Button**: Reusable button component with variants
- **Loading**: Loading spinner component

## API Integration

- Uses TMDB (The Movie Database) API for movie data
- API key should be configured in `.env.local`
- Movie images are served from `image.tmdb.org`

## Development Guidelines

- Use TypeScript for all new files
- Follow the existing component structure
- Use Tailwind CSS for styling
- Implement proper error handling for API calls
- Ensure responsive design across all components
- Use Font Awesome icons for UI elements

## Environment Variables

- `TMDB_API_KEY`: Required for fetching movie data from TMDB API
