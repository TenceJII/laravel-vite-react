import { Navigate, Outlet } from "react-router-dom";
import { UserStateContext } from "../context/ContextProvider";
export default function GuestLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
