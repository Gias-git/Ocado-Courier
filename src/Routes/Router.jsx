
import { createBrowserRouter } from 'react-router-dom';
import DashBoard from '../Layouts/MainLayout';
import DashBoardPage from '../Pages/DashBoardPage/DashBoardPage';
import AddParcel from '../Pages/AddParcel/AddParcel';
import RequestList from '../Pages/RequestList/RequestList';
import AllParcelList from '../Pages/AllParcelList/AllParcelList';


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
                element: <RequestList></RequestList>
            },
            {
                path: "/allParcelList",
                element: <AllParcelList></AllParcelList>
            }

        ]
    },
]);

export default router;
