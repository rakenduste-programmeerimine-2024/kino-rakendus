import { getForumEvents } from "@/lib/event-data/cinemas/forum-events";

export default async function Forum() {
  try {
    const data = await getForumEvents();
    return (
      <div>
        <h1>Schedule</h1>
        {data.Events.Event.map((event, index) => (
          <div key={index}>
            <h2>{event.Title}</h2>
            <p>
              <strong>Original Title:</strong> {event.OriginalTitle}
            </p>
            <p>
              <strong>Movie Rating:</strong> {event.Rating}
            </p>
            <p>
              <strong>Short description:</strong> {event.ShortSynopsis}
            </p>
            <p>
              <strong>Genres:</strong> {event.Genres}
            </p>
            {event.Images.EventMediumImagePortrait && (
              <img
                src={event.Images.EventMediumImagePortrait}
                alt={event.Title}
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
