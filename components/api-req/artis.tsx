interface Show {
  ID: number;
  AvailableSeats: number | null;
  TotalSeats: number | null;
  dtAccounting: string;
  dttmShowStart: string;
  dttmShowStartUTC: string;
  dttmShowEnd: string;
  dttmShowEndUTC: string;
  ShowSalesStartTime: string;
  ShowSalesStartTimeUTC: string;
  ShowSalesEndTime: string;
  ShowSalesEndTimeUTC: string;
  ShowReservationStartTime: string;
  ShowReservationStartTimeUTC: string;
  ShowReservationEndTime: string;
  ShowReservationEndTimeUTC: string;
  EventID: number;
  Title: string;
  OriginalTitle: string;
  ProductionYear: number;
  LengthInMinutes: number;
  dtLocalRelease: string;
  Rating: string;
  RatingLabel: string;
  RatingImageUrl: string;
  EventType: string;
  Genres: string;
  TheatreID: number;
  TheatreAuditriumID: number;
  Theatre: string;
  TheatreAuditorium: string;
  TheatreAndAuditorium: string;
  PresentationMethod: string;
  EventSeries: string;
  ShowURL: string;
  EventURL: string;
  SpokenLanguage: {
    Name: string;
    NameInLanguage: string;
    ISOTwoLetterCode: string;
  };
  Images: {
    EventMediumImagePortrait: string | null;
  };
  ContentDescriptors: any[];
}

interface ScheduleData {
  PubDate: string;
  Shows: Show[];
}

export default async function Artis() {
  const url = "https://www.kino.ee/xml/Schedule";

  try {
    const response = await fetch(url, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const jsonData: ScheduleData = await response.json();

    return (
      <div>
        <h1>Schedule</h1>
        {jsonData.Shows.map((show, index) => (
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
