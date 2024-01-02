import { Game } from '@/api';
import { BasicLayout } from '@/layouts'
import { HeaderWallpaper, Info, Media, Panel } from '../components/Game';
import { Separator } from '../components/Shared/Separator/Separator';


 async function getData(game) {

  const gameCtrl = new Game();
  const responseGame = await gameCtrl.getGamesBySlug(game.game);
console.log(responseGame, 'responseGame')
 return {
   props: {
     game: responseGame
   }
 }
}


export default async function GamePage ({ params, searchParams }) {

  const data = await getData(params);
console.log(data)
  return (
    <>
    <BasicLayout >
           <HeaderWallpaper image={data.props.game.attributes.wallpaper.data.attributes.url}/>

           <Panel gameId={data.props.game.id} game={data.props.game.attributes}/>

           <Separator height={50}/>

           <Info game={data.props.game.attributes}/>

           <Separator height={30}/>

           <Media video={data.props.game.attributes.video} screenshots={data.props.game.attributes.screenshots.data} />
           
           <Separator height={30}/>


    </BasicLayout>
    </>
  )
}
