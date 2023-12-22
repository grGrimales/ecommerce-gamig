import { ENV } from "@/utils";

export class Game {
  async getLastPublished(gameId) {
    try {
      const sort = "sort=publishedAt:desc";
      const pagination = "pagination[limit]=1";
      const populate = "populate=*";

      const url = `${ENV.API_URL}${ENV.ENDPOINTS.GAME}?${sort}&${pagination}&${populate}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();

      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }

   async getLatestPublished({limit = 9, platformId = null}){
       try {
        const filterPlatform = platformId && `filters[platform][id][$eq]=${platformId}`;

        const limitFilter =  `pagination[limit]=${limit}`;	
        const sort = "sort[0]=publishedAt:desc";
        const populate = "populate=*";

        const urlParams = `${sort}&${limitFilter}&${filterPlatform}&${populate}`;
        const url = `${ENV.API_URL}${ENV.ENDPOINTS.GAME}?${urlParams}`;
       const response = await fetch(url, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        if(response.status !== 200) throw result;
        return result;
       
       } catch (error) {
       throw error;
       }
   }


   async getGmaesByPlatformSlug(platformSlug, page){
 try {
  const filters = `filters[platform][slug][$eq]=${platformSlug}`;
  const pagination = `pagination[page]=${page}&pagination[pageSize]=30`;
  const populate = "populate=*";
  const urlParams = `${filters}&${pagination}&${populate}`;

  const url  = `${ENV.API_URL}${ENV.ENDPOINTS.GAME}?${urlParams}`;

  const response = await fetch(url)
  const result = await response.json();
  if(response.status !== 200) throw result;
  return result;
 } catch (error) {
  throw error;
 }
   }
  // async createGame(game){
  //     try {
  //     const response = await fetch(`${this.env.getApiUrl()}/games`, {
  //         method: "POST",
  //         headers: {
  //         "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(game),
  //     });
  //     const data = await response.json();
  //     return data;
  //     } catch (error) {
  //     throw error;
  //     }
  // }

  // async updateGame(gameId, game){
  //     try {
  //     const response = await fetch(`${this.env.getApiUrl()}/games/${gameId}`, {
  //         method: "PUT",
  //         headers: {
  //         "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(game),
  //     });
  //     const data = await response.json();
  //     return data;
  //     } catch (error) {
  //     throw error;
  //     }
  // }

  // async deleteGame(gameId){
  //     try {
  //     const response = await fetch(`${this.env.getApiUrl()}/games/${gameId}`, {
  //         method: "DELETE",
  //         headers: {
  //         "Content-Type": "application/json",
  //         },
  //     });
  //     const data = await response.json();
  //     return data;
  //     } catch (error) {
  //     throw error;
  //     }
  // }
}
