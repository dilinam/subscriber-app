import EmailVerification from "../pages/EmailVerification";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";

import Profile from "../pages/Profile";
import Assets from "../pages/Assets";
import RechargeQR from "../pages/RechargeQR";
import Share from "../pages/Share";
import SignUp from "../pages/SignUp";
import SubPackages from "../pages/SubPackages";
import UserDetails from "../pages/UserDetails";

import Withdraw from "../pages/Withdraw";
import Me from "../pages/Me";
import ExpensesRecord from "../pages/ExpensesRecord";
import Recharge from "../pages/Recharge";
import ActivityIncome from "../pages/ActivityIncome";
import AssetDetails from "../pages/AssetDetails";
import AboutUs from "../pages/AboutUs";
import CardManagement from "../pages/CardManagement";
import TeamActivity from "../pages/TeamActivity";
import PromotionBonus from "../pages/PromotionBonus";
import NewRegistration from "../pages/NewRegistration";
import NewTopUps from "../pages/NewTopUps";
import TotalWithdrawals from "../pages/TotalWithdrawals";
import PromotionCode from "../pages/PromotionCode";
import MyTeam from "../pages/MyTeam";
import CustomerService from "../pages/CustomerService";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import PaidIcon from "@mui/icons-material/Paid";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import ViewAllNotAccepted from "../pages/ViewAllNotAccepted";
import UserList from "../pages/ViewAllUsers";
import PendingWithdraw from "../pages/PendingWithdraw";
import Rules from "../pages/Rules";

const routeConfig = [
  {
    id: 1,
    path: "/",
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
    icon: <HomeIcon fontSize="large" />,
    label: "Home",
    menu: true,
    roles: ["USER", "ADMIN"],
  },
  {
    id: 5,
    path: "/share",
    element: <Share />,
    roles: ["USER"],
  },
  {
    id: 7,
    path: "/users",
    element: <UserList />,
    icon: <HomeIcon fontSize="large" />,
    menu: true,
    label: "Users",
    roles: ["ADMIN"],
  },
  {
    id: 8,
    path: "/rechargeQR",
    element: <RechargeQR />,
    roles: ["USER"],
  },
  {
    id: 9,
    path: "/pendingWithdraw",
    element: <PendingWithdraw />,
    roles: ["ADMIN"],
  },
  {
    id: 10,
    path: "/assets",
    element: <Assets />,
    icon: <PaidIcon fontSize="large" />,
    label: "Assets",
    menu: true,
    roles: ["USER"],
  },
  {
    id: 11,
    path: "/subPackages",
    element: <SubPackages />,
    icon: <Inventory2OutlinedIcon fontSize="large" />,
    label: "Packages",
    menu: true,
    roles: ["USER"],
  },
  {
    id: 12,
    path: "/userDetails",
    element: <UserDetails />,
    roles: ["USER", "ADMIN"],
  },
  {
    id: 13,
    path: "/me",
    element: <Me />,
    icon: <DescriptionIcon fontSize="large" />,
    label: "Me",
    menu: true,
    roles: ["USER"],
  },
  {
    id: 14,
    path: "/expensesRecord",
    element: <ExpensesRecord />,
    roles: ["USER"],
  },
  {
    id: 15,
    path: "/withdraw",
    element: <Withdraw />,
    noAuth: true,
    roles: ["USER"],
  },
  {
    id: 16,
    path: "/recharge",
    element: <Recharge />,
    roles: ["USER"],
  },
  {
    id: 17,
    path: "/activityIncome",
    element: <ActivityIncome />,
    roles: ["USER"],
  },
  {
    id: 18,
    path: "/assetDetails",
    element: <AssetDetails />,
    roles: ["USER"],
  },
  {
    id: 19,
    path: "/aboutUs",
    element: <AboutUs />,
    roles: ["USER"],
  },
  {
    id: 20,
    path: "/cardManagement",
    element: <CardManagement />,
    roles: ["USER"],
  },
  {
    id: 21,
    path: "/teamActivity",
    element: <TeamActivity />,
    roles: ["USER"],
  },
  {
    id: 22,
    path: "/promotionBonus",
    element: <PromotionBonus />,
    roles: ["USER"],
  },
  {
    id: 23,
    path: "/newRegistration",
    element: <NewRegistration />,
    roles: ["USER"],
  },
  {
    id: 24,
    path: "/newTopUps",
    element: <NewTopUps />,
    roles: ["USER"],
  },
  {
    id: 25,
    path: "/totalWithdrawals",
    element: <TotalWithdrawals />,
    roles: ["USER"],
  },
  {
    id: 26,
    path: "/promotionCode",
    element: <PromotionCode />,
    roles: ["USER"],
  },
  {
    id: 27,
    path: "/myTeam",
    element: <MyTeam />,
    roles: ["USER"],
  },

  {
    id: 28,
    path: "/customerService",
    element: <CustomerService />,
    roles: ["USER", "ADMIN"],
  },
  {
    id: 29,
    path: "/profile",
    element: <Profile />,
    icon: <AccountCircleIcon fontSize="large" />,
    label: "Profile",
    menu: true,
    roles: ["USER", "ADMIN"],
  },
  {
    id: 30,
    path: "/viewAllNotAccepted",
    element: <ViewAllNotAccepted />,
    roles: ["ADMIN"],
    menu: true,
    icon: <AccountCircleIcon fontSize="large" />,
    label: "Not Accepted",
  },
  {
    id: 31,
    path: "/rules",
    element: <Rules />,
    roles: ["USER"],
  },
];

export default routeConfig;