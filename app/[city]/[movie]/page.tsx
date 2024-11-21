import OthersMovie from "@/components/movie/others";
import ViljandiMovie from "@/components/movie/viljandi";
import SearchResult from "@/components/search/searchresult";

export default async function Index({
  params,
}: {
  params: { city: string; movie: string };
}) {
  const { city, movie } = await params;

  if (city == "search") {
    return (
      <>
        <SearchResult movie={movie} />;
      </>
    );
  } else if (city == "viljandi") {
    return (
      <>
        <ViljandiMovie movie={movie} />;
      </>
    );
  } else {
    return (
      <>
        <OthersMovie movie={movie} city={city} />;
      </>
    );
  }
}
