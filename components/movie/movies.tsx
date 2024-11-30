"use client";

import { getApolloEvents } from "@/lib/event-data/cinemas/apollo-events";
import { getJohviSchedule } from "@/lib/movie-data/cities/johvi";
import { getNarvaSchedule } from "@/lib/movie-data/cities/narva";
import { getParnuSchedule } from "@/lib/movie-data/cities/parnu";
import { getSaaremaaSchedule } from "@/lib/movie-data/cities/saaremaa";
import { getTallinnSchedule } from "@/lib/movie-data/cities/tallinn";
import { getTartuSchedule } from "@/lib/movie-data/cities/tartu";
import { getViljandiSchedule } from "@/lib/movie-data/cities/viljandi";
import { getEstoniaSchedule } from "@/lib/movie-data/eesti";
import { removeSpecialCharacters } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Data {
  dttmShowStart: string; // Date;
  Title: string;
  OriginalTitle: string;
  ShowURL: string;
  Theatre: string;
  TheatreAuditorium: string;
}

export default function OthersMovie(info: any) {
  const [firstShow, setFirstShow] = useState<any>(null);
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const preloadFirstShow = async () => {
      try {
        const decodedMovie = decodeURIComponent(info.movie);
        const eventData = await getApolloEvents();

        const filteredEvents = eventData.filter(
          (event) =>
            removeSpecialCharacters(event.OriginalTitle) === decodedMovie
        );
        setFirstShow(filteredEvents[0] || null);
      } catch (err) {
        console.error("Error preloading first show data:", err);
        setError("Failed to preload first show data.");
      }
    };

    preloadFirstShow();
  }, [info.movie]);

  const fetchFilteredShows = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const decodedMovie = decodeURIComponent(info.movie);
      let fetchedData: Data[] = [];

      if (info.city === "tallinn") {
        const [dataApollo, dataArtis, dataViimsi] =
          await Promise.all(getTallinnSchedule());
        dataApollo.Shows.forEach((element) => {
          fetchedData.push({
            dttmShowStart: element.dttmShowStart,
            Title: element.Title,
            OriginalTitle: element.OriginalTitle,
            ShowURL: element.ShowURL,
            Theatre: element.Theatre,
            TheatreAuditorium: element.TheatreAuditorium,
          });
        });
        dataArtis.Shows.forEach((element) => {
          fetchedData.push({
            dttmShowStart: element.dttmShowStart,
            Title: element.Title,
            OriginalTitle: element.OriginalTitle,
            ShowURL: element.ShowURL,
            Theatre: element.Theatre,
            TheatreAuditorium: element.TheatreAuditorium,
          });
        });
        dataViimsi.Schedule.Shows.Show.forEach((element) => {
          fetchedData.push({
            dttmShowStart: element.dttmShowStart,
            Title: element.Title,
            OriginalTitle: element.OriginalTitle,
            ShowURL: element.ShowURL,
            Theatre: element.Theatre,
            TheatreAuditorium: element.TheatreAuditorium,
          });
        });
      }

      // Handle other cities
      const cityScheduleFetchers = {
        narva: getNarvaSchedule,
        tartu: getTartuSchedule,
        johvi: getJohviSchedule,
        parnu: getParnuSchedule,
        viljandi: getViljandiSchedule,
      };

      if (cityScheduleFetchers[info.city]) {
        const citySchedule = await cityScheduleFetchers[info.city]();
        citySchedule.Shows.forEach((element: any) => {
          fetchedData.push({
            dttmShowStart: element.dttmShowStart,
            Title: element.Title,
            OriginalTitle: element.OriginalTitle,
            ShowURL: element.ShowURL,
            Theatre: element.Theatre,
            TheatreAuditorium: element.TheatreAuditorium,
          });
        });
      }

      if (info.city === "saaremaa") {
        const [dataThule, dataApollo] = await Promise.all(
          getSaaremaaSchedule()
        );
        dataApollo.Shows.forEach((element) => {
          fetchedData.push({
            dttmShowStart: element.dttmShowStart,
            Title: element.Title,
            OriginalTitle: element.OriginalTitle,
            ShowURL: element.ShowURL,
            Theatre: element.Theatre,
            TheatreAuditorium: element.TheatreAuditorium,
          });
        });
        dataThule.Schedule.Shows.Show.forEach((element) => {
          fetchedData.push({
            dttmShowStart: element.dttmShowStart,
            Title: element.Title,
            OriginalTitle: element.OriginalTitle,
            ShowURL: element.ShowURL,
            Theatre: element.Theatre,
            TheatreAuditorium: element.TheatreAuditorium,
          });
        });
      }

      if (!info.city || info.city === "eesti") {
        const [apolloData, artisData, viimsiData, thuleData] =
          await Promise.all(getEstoniaSchedule());
        apolloData.Shows.forEach((element) => {
          fetchedData.push({
            dttmShowStart: element.dttmShowStart,
            Title: element.Title,
            OriginalTitle: element.OriginalTitle,
            ShowURL: element.ShowURL,
            Theatre: element.Theatre,
            TheatreAuditorium: element.TheatreAuditorium,
          });
        });
        artisData.Shows.forEach((element) => {
          fetchedData.push({
            dttmShowStart: element.dttmShowStart,
            Title: element.Title,
            OriginalTitle: element.OriginalTitle,
            ShowURL: element.ShowURL,
            Theatre: element.Theatre,
            TheatreAuditorium: element.TheatreAuditorium,
          });
        });
        viimsiData.Schedule.Shows.Show.forEach((element) => {
          fetchedData.push({
            dttmShowStart: element.dttmShowStart,
            Title: element.Title,
            OriginalTitle: element.OriginalTitle,
            ShowURL: element.ShowURL,
            Theatre: element.Theatre,
            TheatreAuditorium: element.TheatreAuditorium,
          });
        });
        thuleData.Schedule.Shows.Show.forEach((element) => {
          fetchedData.push({
            dttmShowStart: element.dttmShowStart,
            Title: element.Title,
            OriginalTitle: element.OriginalTitle,
            ShowURL: element.ShowURL,
            Theatre: element.Theatre,
            TheatreAuditorium: element.TheatreAuditorium,
          });
        });
      }

      const filteredShows = fetchedData.filter(
        (show) => removeSpecialCharacters(show.OriginalTitle) === decodedMovie
      );

      setData(filteredShows);
    } catch (err) {
      console.error("Error fetching schedule data:", err);
      setError("Failed to load schedule data. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {firstShow && (
        <div>
          <p>
            <strong>Title:</strong> {firstShow.Title}
          </p>
          <p>
            <strong>Original Title:</strong> {firstShow.OriginalTitle}
          </p>
          <p>
            <strong>Rating:</strong> {firstShow.Rating}
          </p>
          <p>
            <strong>Genres:</strong> {firstShow.Genres}
          </p>
          <p>
            <strong>Description:</strong> {firstShow.Synopsis}
          </p>
          {firstShow.Images?.EventMediumImagePortrait && (
            <img
              src={firstShow.Images.EventMediumImagePortrait}
              alt={firstShow.Title}
              width="200"
            />
          )}
        </div>
      )}
      <br />
      <hr />
      <h1>Linastuse ajad</h1>

      {!data.length && !isLoading && !error && (
        <button onClick={fetchFilteredShows}>Lae kava</button>
      )}

      {isLoading && <p>Kava laadimine...</p>}

      {error && <p>{error}</p>}

      {data.map((show, index) => (
        <div key={index}>
          <p>
            <strong>Show Time:</strong> {show.dttmShowStart}
          </p>
          <p>
            <strong>Auditorium:</strong> {show.TheatreAuditorium}
          </p>
          <p>
            <strong>Location:</strong> {show.Theatre}
          </p>
          <Link href={show.ShowURL}>{show.ShowURL}</Link>
        </div>
      ))}
    </div>
  );
}
