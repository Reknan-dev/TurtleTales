import React from "react";
import { useRouter } from "next/router";

function withAuth(WrappedComponent) {
  return function (props) {
    const router = useRouter();
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
