export interface ForumXML {
  "?xml": string;
  Schedule: Schedule;
}

export interface Schedule {
  PubDate: string //Date;
  Shows: Shows;
}

export interface Shows {
  Show: Show[];
}

export interface Show {
  ID: number;
  dtAccounting: string //Date;
  dttmShowStart: string //Date;
  dttmShowStartUTC: string //Date;
  dttmShowEnd: string //Date;
  dttmShowEndUTC: string //Date;
  ShowSalesStartTime: string //Date;
  ShowSalesStartTimeUTC: string //Date;
  ShowSalesEndTime: string //Date;
  ShowSalesEndTimeUTC: string //Date;
  ShowReservationStartTime: string //Date;
  ShowReservationStartTimeUTC: string //Date;
  ShowReservationEndTime: string //Date;
  ShowReservationEndTimeUTC: string //Date;
  EventID: number;
  Title: string;
  OriginalTitle: string;
  ProductionYear: number;
  LengthInMinutes: number;
  dtLocalRelease: string //Date;
  Rating: string;
  RatingLabel: string;
  RatingImageUrl: string;
  EventType: EventType;
  Genres: string;
  TheatreID: number;
  TheatreAuditriumID: number;
  Theatre: Theatre;
  TheatreAuditorium: TheatreAuditorium;
  TheatreAndAuditorium: TheatreAndAuditorium;
  PresentationMethodAndLanguage: PresentationMethod;
  PresentationMethod: PresentationMethod;
  EventSeries: EventSeries;
  ShowURL: string;
  EventURL: string;
  SpokenLanguage: SpokenLanguage;
  SubtitleLanguage1?: SpokenLanguage;
  Images: Images;
  ContentDescriptors: string;
  SubtitleLanguage2?: SpokenLanguage;
}

export enum EventSeries {
  Empty = "",
  ViljandiKogukonnakinoErikolmapäev = "Viljandi Kogukonnakino - Erikolmapäev",
}

export enum EventType {
  Movie = "Movie",
}

export interface Images {
  EventMicroImagePortrait: string;
  EventSmallImagePortrait: string;
  EventMediumImagePortrait: string;
  EventLargeImagePortrait: string;
  EventLargeImageLandscape: string;
  EventSmallImageLandscape?: string;
}

export enum PresentationMethod {
  The2D = "2D",
  The2DEestiKeeles = "2D, Eesti keeles",
  The2DItaaliaKeeles = "2D, Itaalia keeles",
}

export interface SpokenLanguage {
  Name: Name;
  NameInLanguage: NameInLanguage;
  ISOTwoLetterCode: ISOTwoLetterCode;
}

export enum ISOTwoLetterCode {
  Empty = "",
  En = "en",
  Et = "et",
  Ru = "ru",
}

export enum Name {
  Eesti = "Eesti",
  Inglise = "Inglise",
  Itaalia = "Itaalia",
  Vene = "Vene",
}

export enum NameInLanguage {
  EestiKeeles = "Eesti keeles",
  IngliseKeeles = "Inglise keeles",
  ItaaliaKeeles = "Itaalia keeles",
  VeneKeeles = "Vene keeles",
}

export enum Theatre {
  ViljandiCentrum = "Viljandi Centrum",
}

export enum TheatreAndAuditorium {
  ViljandiCentrumSaal1 = "Viljandi Centrum, Saal 1",
  ViljandiCentrumSaal2 = "Viljandi Centrum, Saal 2",
}

export enum TheatreAuditorium {
  Saal1 = "Saal 1",
  Saal2 = "Saal 2",
}
