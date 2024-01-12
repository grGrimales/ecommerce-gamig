// import { Token } from "@/api";
// import { useRouter } from "next/navigation";

// export async function authFetch(url, params) {
//   const tokenCtrl = new Token();

//   const token = tokenCtrl.getToken();
// const router = useRouter();
//   const logout = () => {
//     tokenCtrl.removeToken();
//     window.location.replace("/");
//     //router.push("/join/sign-in");
//   };

//   if (!token) {
//     console.log('---1---')
//     logout();
//   } else {
//     console.log('---2---')
//     if (!token) {
//       console.log('---3-----')
//       logout(); 
//     } else {
//       console.log('---4---')
//       if (tokenCtrl.hasExpired(token)) {
//         console.log('---5---')
//         logout();
//       } else {
//         console.log('---6---')
//         const paramsTemp = {
//           ...params,
//           headers: {
//             ...params?.headers,
//             Authorization: `Bearer ${token}`,
//           },
//           cache: 'no-store'
//         };

//         try {
//           return await fetch(url, paramsTemp);
//         } catch (error) {
//           return error;
//         }
//       }
//     }
//   }
// }


import { Token } from "@/api";

export async function authFetch(url, params) {
  const tokenCtrl = new Token();
  const token = tokenCtrl.getToken();

  const logout = () => {
    tokenCtrl.removeToken();
  };

  if (!token || tokenCtrl.hasExpired(token)) { 
    console.log('Token no válido o expirado, redirigiendo a login...');
    logout();
    return; // Asegúrate de salir de la función después de llamar a logout
  }

  const paramsTemp = {
    ...params,
    headers: {
      ...params?.headers,
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store'
  };

  try {

    console.log('Realizando petición autenticada...');
    return await fetch(url, paramsTemp);
  } catch (error) {
    console.error('Error en fetch:', error);
    return error;
  }
}
