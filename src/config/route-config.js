import EmailVerification from "../pages/EmailVerification";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import PendingWithdraw from "../pages/PendingWithdraw";
import Profile from "../pages/Profile";
import Assets from "../pages/Assets";
import RechargeQR from "../pages/RechargeQR";
import Share from "../pages/Share";
import SignUp from "../pages/SignUp";
import SubPackages from "../pages/SubPackages";
import UserDetails from "../pages/UserDetails";
import UserList from "../pages/ViewAllUsers";
import Withdraw from "../pages/Withdraw";
import Me from "../pages/Me";
import ExpensesRecord from "../pages/ExpensesRecord";
import Recharge from "../pages/Recharge";
import ActivityIncome from "../pages/ActivityIncome";
import AssetDetails from "../pages/AssetDetails";
import AboutUs from "../pages/AboutUs";
import CardManagement from "../pages/CardManagement";

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
    path: "/users",
    element: <UserList />,
    noAuth: true,
  },
  {
    id: 8,
    path: "/rechargeQR",
    element: <RechargeQR />,
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
    path: "/assets",
    element: <Assets />,
    noAuth: true,
  },
  {
    id: 12,
    path: "/userDetails",
    element: <UserDetails />,
    noAuth: true,
  },
  {
    id: 13,
    path: "/me",
    element: <Me />,
    noAuth: true,
  },
  {
    id: 14,
    path: "/expensesRecord",
    element: <ExpensesRecord />,
    noAuth: true,
  },
  {
    id: 15,
    path: "/withdraw",
    element: <Withdraw />,
    noAuth: true,
  },
  {
    id: 16,
    path: "/recharge",
    element: <Recharge />,
    noAuth: true,
  },
  {
    id: 17,
    path: "/activityIncome",
    element: <ActivityIncome />,
    noAuth: true,
  },
  {
    id: 18,
    path: "/assetDetails",
    element: <AssetDetails />,
    noAuth: true,
  },
  {
    id: 19,
    path: "/aboutUs",
    element: <AboutUs />,
    noAuth: true,
  },
  {
    id: 20,
    path: "/cardManagement",
    element: <CardManagement />,
    noAuth: true,
  },
];

export default routeConfig;