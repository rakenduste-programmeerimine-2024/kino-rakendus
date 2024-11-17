import OthersMovie from "@/components/movie/others";
import ViljandiMovie from "@/components/movie/viljandi";

export default async function Index({
  params,
}: {
  params: { city: string; movie: string };
}) {
  const { city, movie } = await params;
  if (city == "viljandi") {
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
