import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import { ActionTable, NormalTable } from './components/Tables'
import Login from './pages/Login'
import Register from './pages/Register'
import PageNotFound from './pages/PageNotFound'
import Forms from './components/Forms'
import AdminDashboard from './components/admin/AdminDashboard'
import GuestDashboard from './components/guest/GuestDashboard'
import ManagerDashboard from './components/staff/manager/ManagerDashboard'
import ReceptionistDashboard from './components/staff/receptionist/ReceptionistDashboard'
import AddAdmin from './components/Admin/AddAdmin'
import UpdateAdmin from './components/admin/UpdateAdmin'
import UpdateGuest from './components/guest/UpdateGuest'
import UpdateHouseKeeper from './components/staff/housekeeper/UpdateHouseKeeper'
import HouseKeeperDashboard from './components/staff/housekeeper/HouseKeeperDashboard'
import UpdateReceptionist from './components/staff/receptionist/UpdateReceptionist'
import UpdateManager from './components/staff/manager/UpdateManager'
import AddRooms from './components/rooms/AddRooms'
import AllRooms from './components/rooms/AllRooms'
import UpdateRooms from './components/rooms/UpdateRooms'
import AllBooking from './components/booking/AllBooking'
import UpdateBooking from './components/booking/UpdateBooking'

const App = () => {

  const navigation = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: '/',
          element: <AdminDashboard />
        },
        {
          path: '/admin-dashboard',
          element: <AdminDashboard />
        },
        {
          path: '/add-admin',
          element: <AddAdmin />
        },
        {
          path: '/update-admin',
          element: <UpdateAdmin />
        },
        {
          path: '/guest-dashboard',
          element: <GuestDashboard />
        },
        {
          path: '/update-guest',
          element: <UpdateGuest />
        },
        {
          path: '/manager-dashboard',
          element: <ManagerDashboard />
        },
        {
          path: '/update-manager',
          element: <UpdateManager />
        },
        {
          path: '/house-keeper-dashboard',
          element: <HouseKeeperDashboard />
        },
        {
          path: '/update-house-keeper',
          element: <UpdateHouseKeeper />
        },
        {
          path: '/receptionist-dashboard',
          element: <ReceptionistDashboard />
        },
        {
          path: '/update-receptionist',
          element: <UpdateReceptionist />
        },
        {
          path: '/rooms',
          element: <AllRooms />
        },
        {
          path: '/add-rooms',
          element: <AddRooms />
        },
        {
          path: "/update-rooms/:id",
          element: <UpdateRooms />
        },
        {
          path: '/bookings',
          element: <AllBooking />
        },
        {
          path: '/update-booking',
          element: <UpdateBooking />
        },
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ])

  return (
    <div>
      <RouterProvider router={navigation} />

    </div>
  )
}

export default App
