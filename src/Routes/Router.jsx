
import { createBrowserRouter } from 'react-router-dom';
import DashBoard from '../Layouts/DashBoard';
import DashBoardPage from '../Pages/DashBoardPage/DashBoardPage';


const router = createBrowserRouter([
    {
        path: "/",
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: "/",
                element: <DashBoardPage></DashBoardPage>
            }
        ]
    },
]);

export default router;
