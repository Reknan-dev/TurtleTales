import { useDispatch, useSelector } from "react-redux";
import { setToken, setUsername, logoutUser } from "../slices/userSlice";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const username = useSelector((state) => state.user.username);

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token");
    dispatch(setToken(tokenFromStorage));
  }, []);

  useEffect(() => {
    if (token) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/get-user-info`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
         
          dispatch(setUsername(response.data.username));
        })
        .catch((error) => {
          console.error("Error requesting:", error);
        });
    }
  }, [token]);

  const handleLogout = () => {
    dispatch(logoutUser());
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-ocean p-4 text-white border-b-8 border-deepbrown">
      <div className="w-full justify-between flex">
        <Link href="/home">
          <div className="flex">
            <img src="/images/logo.png" alt="Logo" className="w-20 h-auto" />
            <div className="self-center text-xl font-medium">TurtleTales</div>
          </div>
        </Link>
        {username && (
          <div className="flex flex-col justify-center items-center">
            <div className="user-welcome">Welcome, {username}!</div>
            <button
              className="font-bold mt-3 w-20 px-4 hover:bg-scarlet hover:border-scarlet border-2 border-white rounded-3xl text-white duration-500"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
