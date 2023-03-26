import EmailVerification from "../pages/EmailVerification";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import PendingSub from "../pages/PendingSub";
import PendingWithdraw from "../pages/PendingWithdraw";
import Profile from "../pages/Profile";
import Share from "../pages/Share";
import SignUp from "../pages/SignUp";
import SubPackages from "../pages/SubPackages";
import ViewAllUsers from "../pages/ViewAllUsers";

const routeConfig = [
    {
        id: 1,
        path: '/login',
        element: <Login />,
        hideLayout: true,
        noAuth: true
    },
    {
        id: 2,
        path: '/signup',
        element: <SignUp />,
        hideLayout: true,
        noAuth: true
    },
    ,
    {
        id: 3,
        path: '/email-verification/:verificationToken',
        element: <EmailVerification />,
        hideLayout: true,
        noAuth: true
    },
    {
        id: 4,
        path: '/home',
        element: <HomePage />
    },
    {
        id: 5,
        path: '/share',
        element: <Share />
    },
    {
        id: 6,
        path: '/profile',
        element: <Profile />
    },
    {
        id: 7,
        path: '/viewAllUsers',
        element: <ViewAllUsers />
    },
    {
        id: 8,
        path: '/pendingSub',
        element: <PendingSub />
    },
    {
        id: 9,
        path: '/pendingWithdraw',
        element: <PendingWithdraw />
    },
    {
        id: 10,
        path: '/subPakages',
        element: <SubPackages />
    }
];

export default routeConfig;