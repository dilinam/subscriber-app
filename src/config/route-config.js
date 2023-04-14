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
    icon: <HomeIcon fontSize="large" />,
    label: 'Home',
    noAuth: true,
    menu: true
  },
  {
    id: 5,
    path: "/share",
    element: <Share />,
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
    path: "/assets",
    element: <Assets />,
    icon: <PaidIcon fontSize="large" />,
    label: 'Assets',
    noAuth: true,
    menu: true
  },
  {
    id: 11,
    path: "/subPackages",
    element: <SubPackages />,
    icon: <Inventory2OutlinedIcon fontSize="large" />,
    label: 'Sub Packages',
    noAuth: true,
    menu: true
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
    icon: <DescriptionIcon fontSize="large" />,
    label: 'Me',
    noAuth: true,
    menu: true
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
  {
    id: 21,
    path: "/teamActivity",
    element: <TeamActivity />,
    noAuth: true,
  },
  {
    id: 22,
    path: "/promotionBonus",
    element: <PromotionBonus />,
    noAuth: true,
  },
  {
    id: 23,
    path: "/newRegistration",
    element: <NewRegistration />,
    noAuth: true,
  },
  {
    id: 24,
    path: "/newTopUps",
    element: <NewTopUps />,
    noAuth: true,
  },
  {
    id: 25,
    path: "/totalWithdrawals",
    element: <TotalWithdrawals />,
    noAuth: true,
  },
  {
    id: 26,
    path: "/promotionCode",
    element: <PromotionCode />,
    noAuth: true,
  },
  {
    id: 27,
    path: "/myTeam",
    element: <MyTeam />,
    noAuth: true,
  },
  {
    id: 28,
    path: "/customerService",
    element: <CustomerService />,
    noAuth: true,
  },
  {
    id: 29,
    path: "/profile",
    element: <Profile />,
    icon: <AccountCircleIcon fontSize="large" />,
    label: 'Profile',
    noAuth: true,
    menu: true
  }
];

export default routeConfig;