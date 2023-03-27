import EmailVerification from "../pages/EmailVerification";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import PendingSub from "../pages/PendingSub";
import PendingWithdraw from "../pages/PendingWithdraw";
import Profile from "../pages/Profile";
import Recharge from "../pages/Recharge";
import Share from "../pages/Share";
import SignUp from "../pages/SignUp";
import SubPackages from "../pages/SubPackages";
import ViewAllUsers from "../pages/ViewAllUsers";

const routeConfig = [
  {
    id: 1,
    path: "/login",
    element: <Login />,
    hideLayout: true,
    noAuth: true,
  },
  {
    id: 2,
    path: "/signup",
    element: <SignUp />,
    hideLayout: true,
    noAuth: true,
  },
  {
    id: 3,
    path: "/email-verification/:verificationToken",
    element: <EmailVerification />,
    hideLayout: true,
    noAuth: true,
  },
  {
    id: 4,
    path: "/home",
    element: <HomePage />,
    noAuth: true,
  },
  {
    id: 5,
    path: "/share",
    element: <Share />,
    noAuth: true,
  },
  {
    id: 6,
    path: "/profile",
    element: <Profile />,
    noAuth: true,
  },
  {
    id: 7,
    path: "/viewAllUsers",
    element: <ViewAllUsers />,
    noAuth: true,
  },
  {
    id: 8,
    path: "/pendingSub",
    element: <PendingSub />,
    noAuth: true,
  },
  {
    id: 9,
    path: "/pendingWithdraw",
    element: <PendingWithdraw />,
    noAuth: true,
  },
  {
    id: 10,
    path: "/subPackages",
    element: <SubPackages />,
    noAuth: true,
  },
  {
    id: 11,
    path: "/recharge",
    element: <Recharge />,
    noAuth: true,
  }
];

export default routeConfig;