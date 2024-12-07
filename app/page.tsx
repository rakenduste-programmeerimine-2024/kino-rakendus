import ApolloKino from "@/components/api-req/cinemas/apollokino";
import Artis from "@/components/api-req/cinemas/artis";
import Thule from "@/components/api-req/cinemas/thule";
import Viimsi from "@/components/api-req/cinemas/viimsi";
import MainPageMovie, { IMovie } from "@/components/movie/MainpageMovie";
import SearchComponent from "@/components/search/search";
import Link from "next/link";

export default async function Index() {
  const movie: IMovie = {
    OriginalTitle: "Interstellar",
    Title: "Tähtedevaheline",
    Rating: "Alla 12 a. mittesoovitatav",
    Genres: "Ulmefilm, Põnevus",
    ShortSynopsis:
      ' Kuna meie aeg Maal hakkab otsa saama, saadetakse uurijate meeskond inimajaloo tähtsaimale missioonile. Nad peavad rändama meie galaktikast väljapoole, uurimaks, kas inimkonna tulevik võib peituda tähtede vahel. Filmi lavastaja ja kaasstsenarist on Christopher Nolan (“Algus”, “Pimeda rüütli" triloogia).',
    EventMediumImagePortrait:
      "http://mcswebsites.blob.core.windows.net/1013/Event_5593/portrait_medium/InterstellarRe-Issue_B1_OV_Preview.jpg",
  };

  const secondMovie: IMovie = {
    OriginalTitle: "Moana 2",
    Title: "Vaiana 2",
    Rating: "Perefilm",
    Genres: "Komöödia, Seiklus, Animatsioon",
    ShortSynopsis:
      "Ootamatu kutse kaugetelt esivanematelt saadab noore kartmatu meresõitja Vaiana Okeaania kõige kaugematesse nurkadesse, seniavastamata vetele. Nii ohtuderikkale teekonnale ei lähe aga keegi üksi, seetõttu tuleb appi ka Vaiana vana sõber, edev pooljumal Maui, pluss hulk muid värvikaid tüüpe.",
    EventMediumImagePortrait:
      "http://mcswebsites.blob.core.windows.net/1013/Event_8926/portrait_medium/Vaiana2_2592x3840.jpg",
  };

  const movies: IMovie[] = [movie, secondMovie];

  function pickMovie(movies: IMovie[]) {
    const rand = Math.random();
    if (rand < 0.5) {
      return movies[0];
    }
    return movies[1];
  }
  const allMovies: IMovie[] = Array.from({ length: 100 }, () => {
    const randomMovie = pickMovie(movies);
    return randomMovie;
  });

  return (
    <>
      <SearchComponent />
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {allMovies.map((movie, index) => (
          <MainPageMovie key={index} {...movie} />
        ))}
        {/* <h1 className="bold text-pink-500">Apollokino</h1>
        <ApolloKino />
        <hr />
        <h1 className="bold text-pink-500">Artis</h1>
        <Artis />
        <hr />
        <h1 className="bold text-pink-500">Viimsi</h1>
        <Viimsi />
        <hr />
        <h1 className="bold text-pink-500">Thule</h1>
        <Thule /> */}
      </main>
    </>
  );
}
