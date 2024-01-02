import {ENV, authFetch} from '@/utils';



export class Wishlist {
async check (userId, gameId){
try {
    const filterUser = `filters[user][id][$eq][0]=${userId}`;
    const filterGame = `filters[game][id][$eq]=${gameId}`;

    const urlParams = `${filterUser}&${filterGame}`;
    const url = `${ENV.API_URL}${ENV.ENDPOINTS.WISHLIST}?${urlParams}`;




} catch (error) {
    
}
}

}