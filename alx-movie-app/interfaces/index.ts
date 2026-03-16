import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ComponentProps {
  children: ReactNode;
}

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  title: string;
  action?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export interface MovieCardProps {
  posterImage?: string | null;
  releaseYear?: number | null;
  title: string;
}

export interface PrimaryImage {
  url: string | null;
}

export interface TitleText {
  text: string;
}

export interface ReleaseYear {
  year: number | null;
}

export interface MovieSummary {
  id: string;
  primaryImage: PrimaryImage | null;
  titleText: TitleText;
  releaseYear: ReleaseYear;
}

export interface MoviesApiResponse {
  movies: MovieSummary[];
  page: number;
  totalPages: number;
  totalResults: number;
}
