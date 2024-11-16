import { getApolloEvents } from "@/lib/event-data/cinemas/apollo-events";
import { getNarvaSchedule } from "@/lib/movie-data/cities/narva";
import { getTallinnSchedule } from "@/lib/movie-data/cities/tallinn";
import { getTartuSchedule } from "@/lib/movie-data/cities/tartu";

interface Data {
  dttmShowStart: String; //Date;
  Title: String;
  ShowURL: String;
  Theatre: String;
  TheatreAuditorium: String;
}

export default async function ApolloMovie(city: any, movie: any) {
  try {
    let data: Data[] = [];
    if (city == "tallinn") {
      const [dataApollo, dataArtis, dataViimsi] =
        await Promise.all(getTallinnSchedule());
      dataApollo.Shows.forEach((element) => {
        data.push({
          dttmShowStart: element.dttmShowStart,
          Title: element.Title,
          ShowURL: element.ShowURL,
          Theatre: element.Theatre,
          TheatreAuditorium: element.TheatreAuditorium,
        });
      });
      dataArtis.Shows.forEach((element) => {
        data.push({
          dttmShowStart: element.dttmShowStart,
          Title: element.Title,
          ShowURL: element.ShowURL,
          Theatre: element.Theatre,
          TheatreAuditorium: element.TheatreAuditorium,
        });
      });
      dataViimsi.Schedule.Shows.Show.forEach((element) => {
        data.push({
          dttmShowStart: element.dttmShowStart,
          Title: element.Title,
          ShowURL: element.ShowURL,
          Theatre: element.Theatre,
          TheatreAuditorium: element.TheatreAuditorium,
        });
      });
    } else if (city == "narva") {
      const initialData = await getNarvaSchedule();
      initialData.Shows.forEach((element) => {
        data.push({
          dttmShowStart: element.dttmShowStart,
          Title: element.Title,
          ShowURL: element.ShowURL,
          Theatre: element.Theatre,
          TheatreAuditorium: element.TheatreAuditorium,
        });
      });
    } else {
      console.log("Code on this website is bad");
      //const initialData = await getTartuSchedule();
    }

    const eventData = await getApolloEvents();
    const filteredShows = await data.filter(
      (show) => show.Title.replace(/[\s:]+/g, "").toLowerCase() == movie
    );
    const filteredEvents = await eventData.filter(
      (event) => event.Title.replace(/[\s:]+/g, "").toLowerCase() == movie
    );
    const firstShow = await filteredEvents[0];
    console.log(firstShow.Title);
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
              <strong>Location:</strong> {show.TheatreAuditorium}
            </p>
            <p>
              <strong>Location:</strong> {show.Theatre}
            </p>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching schedule data:", error);
    return <p>Error loading schedule data</p>;
  }
}
