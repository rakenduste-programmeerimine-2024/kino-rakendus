import { getForumEvents } from "@/lib/event-data/cinemas/forum-events";
import { getViljandiSchedule } from "@/lib/movie-data/cities/viljandi";
import Link from "next/link";

export default async function ViljandiMovie(movie: any) {
  try {
    const data = await getViljandiSchedule();
    const eventData = await getForumEvents();
    console.log(data);
    console.log(eventData);
    console.log(movie.movie);
    const filteredShows = await data.Schedule.Shows.Show.filter(
      (show) => show.Title.replace(/[\s:]+/g, "").toLowerCase() == movie.movie
    );
    const filteredEvents = await eventData.Events.Event.filter(
      (event) => event.Title.replace(/[\s:]+/g, "").toLowerCase() == movie.movie
    );
    const firstShow = await filteredEvents[0];
    console.log(firstShow);
    console.log(filteredEvents);
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
              <strong>Location:</strong> {show.Theatre}
            </p>
            <p>
              <strong>Auditorium:</strong> {show.TheatreAuditorium}
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
