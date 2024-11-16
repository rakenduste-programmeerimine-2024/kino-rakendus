import { getNarvaSchedule } from "@/lib/movie-data/cities/narva";

export default async function Index({ params }: { params: { movie: string } }) {
  const { movie } = await params;

  try {
    const data = await getNarvaSchedule();
    const filteredShows = await data.Shows.filter(
      (show) => show.Title.replace(/[\s:]+/g, "").toLowerCase() == movie
    );
    const firstShow = await filteredShows[0];
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
              <strong>Location:</strong> {show.TheatreAndAuditorium}
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
