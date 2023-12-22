import { Game } from "@/api";
import { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import { GridGames } from "../../Shared";

const gameCtrl = new Game();
export function LatestGames({ title, limit = 9, platformId = null }) {
  const [games, setGames] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const result = await gameCtrl.getLatestPublished({ limit, platformId });
        setGames(result.data);
        console.log(games);
        console.log(result.data)
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);


  useEffect(() => {
    console.log(games);
  }, [games]);
  
  
  if (!games) return null;
  return (
    <div>
      <h2>{title}</h2>
      <GridGames games={games} />
    </div>
  );
}
