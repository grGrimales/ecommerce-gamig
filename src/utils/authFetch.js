import { Token } from "@/api";
import { useRouter } from "next/navigation";

export async function authFetch(url, params) {
  const tokenCtrl = new Token();
  const router = useRouter();
  const token = tokenCtrl.getToken();

  const logout = () => {
    tokenCtrl.removeToken();
    router.replace("/");
  };

  if (!token) {
    logout();
  }  else {
      if (tokenCtrl.hasExpired(token)) {
        logout();
      } else {
        const paramsTemp = {
          ...params,
          headers: {
            ...params?.headers,
            Authorization: `Bearer ${token}`,
          },
          cache: 'no-store'
        };

        try {
          return await fetch(url, paramsTemp);
        } catch (error) {
          return error;
        }
      }
    }
  }
