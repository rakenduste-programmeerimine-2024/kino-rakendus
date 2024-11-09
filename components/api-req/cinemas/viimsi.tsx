import { getViimsiSchedule } from "@/lib/movie-data/cinemas/viimsi";
export default async function Viimsi() {
  try {
    const data = await getViimsiSchedule();
    return (
      <div>
        <h1>Schedule</h1>
        {data.Schedule.Shows.Show.map((show, index) => (
          <div key={index}>
            <h2>{show.Title}</h2>
            <p>
              <strong>Original Title:</strong> {show.OriginalTitle}
            </p>
            <p>
              <strong>Show Time:</strong> {show.dttmShowStart}
            </p>
            <p>
              <strong>Location:</strong> {show.TheatreAndAuditorium}
            </p>
            <p>
              <strong>Genres:</strong> {show.Genres}
            </p>
            {show.Images.EventMediumImagePortrait && (
              <img
                src={show.Images.EventMediumImagePortrait}
                alt={show.Title}
                width="100"
              />
            )}
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching schedule data:", error);
    return <p>Error loading schedule data</p>;
  }
}
