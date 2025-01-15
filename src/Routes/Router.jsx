
import { createBrowserRouter, Outlet } from 'react-router-dom';
import DashBoard from '../Layouts/MainLayout';
import DashBoardPage from '../Pages/DashBoardPage/DashBoardPage';
import AddParcel from '../Pages/AddParcel/AddParcel';
import RequestList from '../Pages/RequestList/RequestList';
import AllParcelList from '../Pages/AllParcelList/AllParcelList';
import LoginPage from '../Pages/LoginPage/LoginPage';
import Register from '../Pages/Register/Register';
import PaymentInvoiceList from '../Pages/PaymentInvoiceList/PaymentInvoiceList';
import ProfileLayout from '../Pages/ProfileLayout/ProfileLayout';
import ProfileDetails from '../Pages/ProfileDetails/ProfileDetails';
import EditProfile from '../Pages/EditProfile/EditProfileLayout';
import EditProfilePage from '../Pages/EditProfile/EditProfilePage';
import EditProfileLayout from '../Pages/EditProfile/EditProfileLayout';
import ChangePasswordPage from '../Pages/EditProfile/ChangePasswordpage';
import PaymentUpdate from '../Pages/PaymentUpdate/PaymentUpdate';
import ParcelView from '../Pages/ParcelView/ParcelView';
import PaymentChildrenView from '../Pages/PaymentChildrenView/PaymentChildrenView';



const router = createBrowserRouter([
    {
        path: "/",
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: "/",
                element: <DashBoardPage></DashBoardPage>
            },
            {
                path: "/addParcel",
                element: <AddParcel></AddParcel>
            },
            {
                path: "/requestList",
                element: <> <Outlet></Outlet> </>,
                children: [
                    {
                        path: "",
                        element: <RequestList></RequestList>,
                    },
                    {
                        path: "parcelView",
                        element: <ParcelView></ParcelView>
                    },

                ]
            },
            {
                path: "/allParcelList",
                element: <AllParcelList></AllParcelList>
            },
            {
                path: "/paymentInvoiceList",
                element: <> <Outlet></Outlet> </>,
                children: [{
                    path: "",
                    element: <PaymentInvoiceList></PaymentInvoiceList>
                },
                {
                    path: "paymentChildrenView",
                    element: <PaymentChildrenView></PaymentChildrenView>
                },


                ]
            },
            {
                path: "profile",
                element: <ProfileLayout></ProfileLayout>,
                children: [{
                    path: "",
                    element: <ProfileDetails></ProfileDetails>
                },
                {
                    path: "",
                    element: <EditProfileLayout></EditProfileLayout>,
                    children: [
                        {
                            path: 'editProfile',
                            element: <EditProfilePage></EditProfilePage>
                        },
                        {
                            path: 'changePassword',
                            element: <ChangePasswordPage></ChangePasswordPage>
                        },
                    ]
                },
                {
                    path: "paymentUpdate",
                    element: <PaymentUpdate></PaymentUpdate>
                }
                ]
            }

        ]
    },
    {
        path: "/login",
        element: <LoginPage></LoginPage>
    },
    {
        path: "/register",
        element: <Register></Register>
    }
]);

export default router;
