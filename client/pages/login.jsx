import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setFormData, setToken, setErrors, setLoading } from "../slices/userSlice";

export default function Login() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.user.formData);
  const loading = useSelector((state) => state.user.loading);
  const errors = useSelector((state) => state.user.errors);
  const router = useRouter();
  const handleInputChange = (field) => (e) => {
    dispatch(setFormData({ ...formData, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        formData
      );
      localStorage.setItem("token", response.data.token);
      dispatch(setToken(response.data.token));
      router.push("/home");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        dispatch(setErrors({ login: "Invalid username or password" }));
      } else {
        console.error("Error logging in:", error);
      } 
    } finally {
      dispatch(setLoading(false)); // Disattiva il loader
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-skyblue bg-opacity-20 backdrop-blur-sm p-4">
        <div className="px-6 py-4">
          <h2 className="font-bold text-deepblue text-xl mb-6 text-center">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.username}
                onChange={handleInputChange("username")}
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-6">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                value={formData.password}
                onChange={handleInputChange("password")}
                placeholder="Password"
                required
              />
              {errors.login && (
                <div className="text-scarlet text-sm">{errors.login}</div>
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-ocean hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <div className="w-28 h-28 border-5 border-solid border-white border-t-orange-500 rounded-full inline-block box-border animate-rotation"></div>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
