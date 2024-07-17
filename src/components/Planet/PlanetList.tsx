import React, { useCallback, useEffect } from "react";
import PlanetItem from "./PlanetItem";
import InfiniteScroll from "react-infinite-scroll-component";
import { ScaleLoader } from "react-spinners";
import useFetch from "../../hooks/useFetch";
import {
  EndMessage,
  ErrorMessage,
  LoaderContainer,
  PlanetContainer,
} from "../../assets/styles/PlanetStyles";

const PlanetList: React.FC = () => {
  const [nextQuery, setNextQuery] = React.useState("");
  const [planets, setPlanets] = React.useState<Planet[]>([]);

  const { data, error } = useFetch<{
    results: Planet[];
    count: number;
    next: string;
  }>(`https://swapi.dev/api/planets?${nextQuery}`);

  useEffect(() => {
    if (data?.results) {
      setPlanets(data.results);
    }
  }, [data]);

  const fetchNext = useCallback(async () => {
    if (data?.next) {
      const nextPage = data?.next.split("?")[1];
      setNextQuery(nextPage || "");
      setPlanets((prevPlanets) => [...prevPlanets, ...(data?.results || [])]);
    }
  }, [data?.next, setNextQuery]);

  if (error) return <ErrorMessage>Error: {error.message}</ErrorMessage>;

  return (
    <InfiniteScroll
      dataLength={planets.length}
      next={fetchNext}
      hasMore={!!data?.next}
      loader={
        <LoaderContainer>
          <ScaleLoader color="#fff" />
        </LoaderContainer>
      }
      endMessage={
        <EndMessage>
          {planets.length === 0 ? "No planets found" : "No more planets"}
        </EndMessage>
      }
    >
      <PlanetContainer>
        {planets.map((planet) => (
          <PlanetItem key={planet.name} planet={planet} />
        ))}
      </PlanetContainer>
    </InfiniteScroll>
  );
};

export default PlanetList;
