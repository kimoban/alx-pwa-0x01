# ALX Movie App (alx-pwa-0x01)

A modern movie discovery application built with Next.js, TypeScript, and Tailwind CSS. Discover, filter, and browse movies using the MoviesDatabase API via RapidAPI.

## 🎬 Features

- **Movie Discovery**: Browse featured movies with responsive cards and richer visual hierarchy
- **Client-side Search**: Narrow the current results page by title instantly
- **Year & Genre Filtering**: Filter movies by release year and genre
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Cinematic glassmorphism-inspired interface with stronger typography and motion
- **Movie Cards**: Detailed movie information with posters and release-year badges
- **Pagination**: Navigate through extensive movie collections
- **Loading States**: Smooth loading animations and transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom CineSeek branding
- **API**: MoviesDatabase API via RapidAPI
- **Package Manager**: npm

## 📁 Project Structure

```bash
alx-pwa-0x01/                        # Repository root
├── README.md                        # Project documentation
├── .github/                         # GitHub configuration
├── .gitignore                       # Git ignore rules
├── .vscode/                         # VS Code settings
└── alx-movie-app/                   # Next.js application
   ├── components/
   │   ├── commons/
   │   │   ├── Button.tsx           # Reusable button component
   │   │   ├── Loading.tsx          # Loading spinner
   │   │   └── MovieCard.tsx        # Movie display card
   │   └── layouts/
   │       ├── Footer.tsx           # App footer
   │       ├── Header.tsx           # Navigation header
   │       └── Layout.tsx           # Main layout wrapper
   ├── interfaces/
   │   └── index.ts                 # TypeScript type definitions
   ├── pages/
   │   ├── api/
   │   │   └── fetch-movies.ts      # TMDB API integration
   │   ├── movies/
   │   │   └── index.tsx            # Movies listing page
   │   ├── _app.tsx                 # App wrapper
   │   ├── _document.tsx            # HTML document structure
   │   └── index.tsx                # Landing page
   ├── public/                      # Static assets
   ├── styles/
   │   └── globals.css              # Global styles
   ├── .env.local                   # Environment variables
   ├── package.json                 # Dependencies and scripts
   ├── next.config.ts               # Next.js configuration
   └── tsconfig.json                # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- RapidAPI account and MoviesDatabase API key

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kimoban/alx-pwa-0x01.git
   cd alx-pwa-0x01/alx-movie-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the `alx-movie-app` directory and add your API key:

   ```env
   MOVIE_API_KEY=your_rapidapi_moviesdatabase_key_here
   ```

   Get your API key from RapidAPI's MoviesDatabase listing.

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the CineSeek application.

## 🔧 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## 🎯 Application Usage

### Landing Page

- **Hero Section**: Eye-catching background with CineSeek branding
- **Call-to-Action**: Direct navigation to explore movies
- **Responsive Design**: Optimized for all screen sizes

### Movies Page

- **Browse Movies**: View popular movies with poster images
- **Search Functionality**: Find specific movies by title
- **Filter Options**: Filter by release year and genre
- **Pagination**: Navigate through multiple pages of results
- **Movie Cards**: Click for detailed movie information

### API Integration

- `/api/fetch-movies` - Fetch movies from the MoviesDatabase API with filtering options

## 🌟 Components

### Common Components

- **Button**: Reusable button with accent styling
- **Loading**: Animated loading spinner
- **MovieCard**: Movie display component with poster, title, year, and genre

### Layout Components

- **Header**: Navigation with logo and responsive menu
- **Footer**: Application footer
- **Layout**: Main layout wrapper for consistent page structure

## 🔑 Environment Variables

| Variable        | Description                             | Required |
| :-------------- | :-------------------------------------- | :------- |
| `MOVIE_API_KEY` | API key for MoviesDatabase on RapidAPI  | Yes      |

## 📱 Responsive Design

The ALX Movie App is fully responsive and optimized for:

- **Desktop**: Full-featured experience with grid layouts
- **Tablet**: Adapted layouts for medium screens
- **Mobile**: Touch-friendly interface with stacked layouts

## 🎨 CineSeek Design System

- **Primary Color**: #E2D609 (Accent Yellow)
- **Background**: #171D22 (Dark theme)
- **Typography**: Clean, modern fonts with good readability
- **Custom Utilities**: Line clamping, smooth transitions, hero backgrounds

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

## 📝 License

This project is part of the ALX Software Engineering Program.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📞 Support

For support and questions, please refer to the ALX Software Engineering Program resources or create an issue in the repository.

## 🔗 Live Demo

- [Live site on Vercel](https://alx-pwa-0x01-jet-seven.vercel.app/)
- [Repository on GitHub](https://github.com/kimoban/alx-pwa-0x01)

### Built for the ALX Software Engineering Program
