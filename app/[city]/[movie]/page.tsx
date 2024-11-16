import ApolloMovie from "@/components/movie/apollo";
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
        <ApolloMovie city={city} movie={movie} />;
      </>
    );
  }
}
