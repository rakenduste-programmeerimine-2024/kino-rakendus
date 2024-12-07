"use client";
import { removeSpecialCharacters } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export interface IMovie {
  OriginalTitle: string;
  Title: string;
  Rating: string;
  Genres: string;
  ShortSynopsis: string;
  EventMediumImagePortrait: string;
}

export default function MainPageMovie(movie: IMovie) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative p-2">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <Link href={`/eesti/${removeSpecialCharacters(movie.OriginalTitle)}`}>
          <img
            src={movie.EventMediumImagePortrait}
            alt={movie.Title}
            className="w-full h-auto md:h-auto rounded-sm"
          />
        </Link>
        {isHovered && (
          <div className="absolute w-full left-1/2 top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-center bg-black bg-opacity-90 text-white p-4 z-50 rounded-md">
            <Link
              href={`/eesti/${removeSpecialCharacters(movie.OriginalTitle)}`}>
              <h2 className="text-xl font-bold">{movie.Title}</h2>
            </Link>
            <p className="italic text-sm">{movie.OriginalTitle}</p>
            <p className="text-sm">Vanus: {movie.Rating}</p>
            <p className="text-sm">Žanr: {movie.Genres}</p>
            <p className="mt-2">{movie.ShortSynopsis}</p>
          </div>
        )}
      </div>
    </div>
  );
}
