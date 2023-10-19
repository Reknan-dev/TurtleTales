import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  setFormData,
  setErrors,
  setRegistrationSuccess,
  clearFormData,
} from "../slices/userSlice";

export default function Register() {
  const dispatch = useDispatch();
  const router = useRouter();
 

  const formData = useSelector((state) => state.user.formData);
  const errors = useSelector((state) => state.user.errors);
  const registrationSuccess = useSelector(
    (state) => state.user.registrationSuccess
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`, formData);
      dispatch(setRegistrationSuccess(true));
      dispatch(clearFormData());
    } catch (error) {
      if (error.response && error.response.status === 409) {
        validationErrors = { ...validationErrors, ...error.response.data };
      } else {
        console.error("Error during registration:", error);
      }
    }

    if (Object.keys(validationErrors).length > 0) {
      dispatch(setErrors(validationErrors));
    }
  };

  if (registrationSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-skyblue bg-opacity-20 backdrop-blur-sm p-4 mt-[-150px]">
          <div className="px-6 py-4">
            <h2 className="font-bold text-deepblue text-xl mb-6 text-center">
              Registrazione avvenuta con successo!
            </h2>
            <p className="text-center">
              Effettua il{" "}
              <Link className="text-blue-500 hover:text-blue-700" href="/login">
                Login
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-skyblue bg-opacity-20 backdrop-blur-sm p-4 mt-[-150px]">
        <div className="px-6 py-4">
          <h2 className="font-bold text-deepblue text-xl mb-6 text-center">
            Registrazione
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={formData.username}
                onChange={(e) =>
                  dispatch(setFormData({ ...formData, username: e.target.value }))
                }
                placeholder="Username"
                required
              />
              {errors.username && (
                <div className="text-scarlet text-sm">{errors.username}</div>
              )}
            </div>
            <div className="mb-6">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  dispatch(setFormData({ ...formData, email: e.target.value }))
                }
                placeholder="Email"
                required
              />
              {errors.email && (
                <div className="text-scarlet text-sm">{errors.email}</div>
              )}
            </div>
            <div className="mb-6">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                value={formData.password}
                onChange={(e) =>
                  dispatch(setFormData({ ...formData, password: e.target.value }))
                }
                placeholder="Password"
                required
              />
              {errors.password && (
                <div className="text-scarlet text-sm">{errors.password}</div>
              )}
            </div>
            <div className="mb-6">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  dispatch(setFormData({ ...formData, confirmPassword: e.target.value }))
                }
                placeholder="Conferma Password"
                required
              />
              {errors.confirmPassword && (
                <div className="text-scarlet text-sm">
                  {errors.confirmPassword}
                </div>
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-ocean hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Registrati
              </button>
            </div>
          </form>
          <div className="mt-4">
            Sei già registrato? Effettua il{" "}
            <Link className="text-skyblue hover:text-ocean" href="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
