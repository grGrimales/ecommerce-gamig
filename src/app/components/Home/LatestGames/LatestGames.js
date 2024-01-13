
'use client';
import { Game } from "@/api";
import {  Suspense, useEffect, useState } from "react";
import { GridGames } from "../../Shared";
import { LoadingPage } from "../../Shared/Loading/Loading";

const gameCtrl = new Game();
export function LatestGames({ title, limit = 9, platformId = null }) {
  const [games, setGames] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const result = await gameCtrl.getLatestPublished({ limit, platformId });
        setGames(result.data);
       
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  
  
  if (!games) return null;
  return (
    <div>
      <h2>{title}</h2>
      <Suspense fallback={<LoadingPage />}>
        <GridGames games={games} />
      </Suspense>
    </div>
  );
}
