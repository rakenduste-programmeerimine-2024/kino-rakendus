import { getApolloEvents } from "@/lib/event-data/cinemas/apollo-events";
import { getJohviSchedule } from "@/lib/movie-data/cities/johvi";
import { getNarvaSchedule } from "@/lib/movie-data/cities/narva";
import { getParnuSchedule } from "@/lib/movie-data/cities/parnu";
import { getSaaremaaSchedule } from "@/lib/movie-data/cities/saaremaa";
import { getTallinnSchedule } from "@/lib/movie-data/cities/tallinn";
import { getTartuSchedule } from "@/lib/movie-data/cities/tartu";
import { getViljandiSchedule } from "@/lib/movie-data/cities/viljandi";
import { getEstoniaEvents, getEstoniaSchedule } from "@/lib/movie-data/eesti";
import { removeSpecialCharacters } from "@/lib/utils";
import Link from "next/link";

interface Data {
  dttmShowStart: string; //Date;
  Title: string;
  OriginalTitle: string;
  ShowURL: string;
  Theatre: string;
  TheatreAuditorium: string;
}

export default async function OthersMovie(info: any) {
  const decodedMovie = decodeURIComponent(info.movie);
  try {
    let data: Data[] = [];
    const eventData = await getApolloEvents();
    if (info.city == "tallinn") {
      const [dataApollo, dataArtis, dataViimsi] =
        await Promise.all(getTallinnSchedule());
      dataApollo.Shows.forEach((element) => {
        data.push({
          dttmShowStart: element.dttmShowStart,
          Title: element.Title,
          OriginalTitle: element.OriginalTitle,
          ShowURL: element.ShowURL,
          Theatre: element.Theatre,
          TheatreAuditorium: element.TheatreAuditorium,
        });
      });
      dataArtis.Shows.forEach((element) => {
        data.push({
          dttmShowStart: element.dttmShowStart,
          Title: element.Title,
          OriginalTitle: element.OriginalTitle,
          ShowURL: element.ShowURL,
          Theatre: element.Theatre,
          TheatreAuditorium: element.TheatreAuditorium,
        });
      });
      dataViimsi.Schedule.Shows.Show.forEach((element) => {
        data.push({
          dttmShowStart: element.dttmShowStart,
          Title: element.Title,
          OriginalTitle: element.OriginalTitle,
          ShowURL: element.ShowURL,
          Theatre: element.Theatre,
          TheatreAuditorium: element.TheatreAuditorium,
        });
      });
    } else if (info.city == "narva") {
      const initialData = await getNarvaSchedule();
      initialData.Shows.forEach((element) => {
        data.push({
          dttmShowStart: element.dttmShowStart,
          Title: element.Title,
          OriginalTitle: element.OriginalTitle,
          ShowURL: element.ShowURL,
          Theatre: element.Theatre,
          TheatreAuditorium: element.TheatreAuditorium,
        });
      });
    } else if (info.city == "tartu") {
      const initialData = await getTartuSchedule();
      initialData.Shows.forEach((element) => {
        data.push({
          dttmShowStart: element.dttmShowStart,
          Title: element.Title,
          OriginalTitle: element.OriginalTitle,
          ShowURL: element.ShowURL,
          Theatre: element.Theatre,
          TheatreAuditorium: element.TheatreAuditorium,
        });
      });
    } else if (info.city == "johvi") {
      const initialData = await getJohviSchedule();
      initialData.Shows.forEach((element) => {
        data.push({
          dttmShowStart: element.dttmShowStart,
          Title: element.Title,
          OriginalTitle: element.OriginalTitle,
          ShowURL: element.ShowURL,
          Theatre: element.Theatre,
          TheatreAuditorium: element.TheatreAuditorium,
        });
      });
    } else if (info.city == "parnu") {
      const initialData = await getParnuSchedule();
      initialData.Shows.forEach((element) => {
        data.push({
          dttmShowStart: element.dttmShowStart,
          Title: element.Title,
          OriginalTitle: element.OriginalTitle,
          ShowURL: element.ShowURL,
          Theatre: element.Theatre,
          TheatreAuditorium: element.TheatreAuditorium,
        });
      });
    } else if (info.city == "viljandi") {
      const initialData = await getViljandiSchedule();
      initialData.Shows.forEach((element) => {
        data.push({
          dttmShowStart: element.dttmShowStart,
          Title: element.Title,
          OriginalTitle: element.OriginalTitle,
          ShowURL: element.ShowURL,
          Theatre: element.Theatre,
          TheatreAuditorium: element.TheatreAuditorium,
        });
      });
    } else if (info.city == "saaremaa") {
      const [dataThule, dataApollo] = await Promise.all(getSaaremaaSchedule());
      dataApollo.Shows.forEach((element) => {
        data.push({
          dttmShowStart: element.dttmShowStart,
          Title: element.Title,
          OriginalTitle: element.OriginalTitle,
          ShowURL: element.ShowURL,
          Theatre: element.Theatre,
          TheatreAuditorium: element.TheatreAuditorium,
        });
      });
      dataThule.Schedule.Shows.Show.forEach((element) => {
        data.push({
          dttmShowStart: element.dttmShowStart,
          Title: element.Title,
          OriginalTitle: element.OriginalTitle,
          ShowURL: element.ShowURL,
          Theatre: element.Theatre,
          TheatreAuditorium: element.TheatreAuditorium,
        });
      });
    } else {
      const [apolloData, artisData, viimsiData, thuleData] =
        await Promise.all(getEstoniaSchedule());
      const [artisEventData, viimsiEventData, thuleEventData] =
        await Promise.all(getEstoniaEvents());
      for (const movie of eventData) {
        if (removeSpecialCharacters(movie.OriginalTitle) == decodedMovie) {
          apolloData.Shows.forEach((element) => {
            console.log(element.Theatre);
            console.log(movie.OriginalTitle);
            if (element.OriginalTitle == movie.OriginalTitle) {
              data.push({
                dttmShowStart: element.dttmShowStart,
                Title: element.Title,
                OriginalTitle: element.OriginalTitle,
                ShowURL: element.ShowURL,
                Theatre: element.Theatre,
                TheatreAuditorium: element.TheatreAuditorium,
              });
            }
          });
        }
      }

      for (const movie of artisEventData) {
        if (removeSpecialCharacters(movie.OriginalTitle) == decodedMovie) {
          artisData.Shows.forEach((element) => {
            if (element.OriginalTitle == decodedMovie) {
              data.push({
                dttmShowStart: element.dttmShowStart,
                Title: element.Title,
                OriginalTitle: element.OriginalTitle,
                ShowURL: element.ShowURL,
                Theatre: element.Theatre,
                TheatreAuditorium: element.TheatreAuditorium,
              });
            }
          });
        }
      }
      for (const movie of viimsiEventData.Events.Event) {
        if (removeSpecialCharacters(movie.OriginalTitle) == decodedMovie) {
          viimsiData.Schedule.Shows.Show.forEach((element) => {
            if (element.OriginalTitle == decodedMovie) {
              data.push({
                dttmShowStart: element.dttmShowStart,
                Title: element.Title,
                OriginalTitle: element.OriginalTitle,
                ShowURL: element.ShowURL,
                Theatre: element.Theatre,
                TheatreAuditorium: element.TheatreAuditorium,
              });
            }
          });
        }
      }
      for (const movie of thuleEventData.Events.Event) {
        if (removeSpecialCharacters(movie.OriginalTitle) == decodedMovie) {
          thuleData.Schedule.Shows.Show.forEach((element) => {
            if (element.OriginalTitle == decodedMovie) {
              data.push({
                dttmShowStart: element.dttmShowStart,
                Title: element.Title,
                OriginalTitle: element.OriginalTitle,
                ShowURL: element.ShowURL,
                Theatre: element.Theatre,
                TheatreAuditorium: element.TheatreAuditorium,
              });
            }
          });
        }
      }
    }
    console.log(data);
    const filteredShows = await data.filter(
      (show) => removeSpecialCharacters(show.OriginalTitle) == decodedMovie
    );
    console.log(filteredShows);
    const filteredEvents = await eventData.filter(
      (event) => removeSpecialCharacters(event.OriginalTitle) == decodedMovie
    );
    const firstShow = await filteredEvents[0];

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
            {firstShow.Images.EventMediumImagePortrait && (
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
        {filteredShows.map((show, index) => (
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
            {/*<p>
              <strong>Link:</strong> {show.ShowURL}
            </p>*/}
            <Link href={show.ShowURL}>{show.ShowURL}</Link>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching schedule data:", error);
    return <p>Error loading schedule data</p>;
  }
}
