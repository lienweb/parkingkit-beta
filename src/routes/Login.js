import { Outlet, Link } from "react-router-dom";

export default function Login() {
  return (
    <div id="detail">
      <Link to={'/'}>go back to home page</Link>
      <Link to={'/login/line'}>
        <button>Line Login</button>
      </Link>
      <Link to={'/login/google'}>
        <button>Google Login</button>
      </Link>
      {/* display nested route */}
      <Outlet />  
    </div>
  )
}