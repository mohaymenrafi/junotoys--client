import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import Review from '../Products/ProductDetails/Review/Review';
import AddAProduct from './Admin/AddAProduct/AddAProduct';
import MakeAdmin from './Admin/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Admin/ManageAllOrders/ManageAllOrders';
import ManageAllProducts from './Admin/ManageProducts/ManageAllProducts';
import DashboardMain from './DashboardMain/DashboardMain';
import MyOrders from './User/MyOrders/MyOrders';
import Pay from './User/Pay/Pay';

const Dashboard = () => {
  const { admin } = useAuth();
  const { path, url } = useRouteMatch();
  return (
    <div>
      <div className="bg-bgGray py-24 px-4 text-center">
        <h2>My Account</h2>
        <FontAwesomeIcon icon={faChevronDown} className="block mx-auto mt-5" />
      </div>
      <div className="grid lg:grid-cols-8 grid-cols-1">
        <aside className="col-span-2 bg-bgGray border-t-2">
          {!admin ? (
            <ul className="user">
              <Link to={`${url}`}>
                <li className="py-6 pl-16 border-b-2 font-semibold cursor-pointer hover:bg-paste hover:text-white text-xl">
                  Dashboard
                </li>
              </Link>
              <Link to={`${url}/my-orders`}>
                <li className="py-6 pl-16 border-b-2 font-semibold cursor-pointer hover:bg-paste hover:text-white text-xl">
                  My Orders
                </li>
              </Link>
              <Link to={`${url}/pay`}>
                <li className="py-6 pl-16 border-b-2 font-semibold cursor-pointer hover:bg-paste hover:text-white text-xl">
                  Pay
                </li>
              </Link>
              <Link to={`${url}/review`}>
                <li className="py-6 pl-16 border-b-2 font-semibold cursor-pointer hover:bg-paste hover:text-white text-xl">
                  Review
                </li>
              </Link>
            </ul>
          ) : (
            <ul className="admin">
              <Link to={`${url}`}>
                <li className="py-6 pl-16 border-b-2 font-semibold cursor-pointer hover:bg-paste hover:text-white text-xl">
                  Dashboard
                </li>
              </Link>
              <Link to={`${url}/manage-products`}>
                <li className="py-6 pl-16 border-b-2 font-semibold cursor-pointer hover:bg-paste hover:text-white text-xl">
                  Manage Products
                </li>
              </Link>
              <Link to={`${url}/manage-all-orders`}>
                <li className="py-6 pl-16 border-b-2 font-semibold cursor-pointer hover:bg-paste hover:text-white text-xl">
                  Manage All Orders
                </li>
              </Link>
              <Link to={`${url}/make-admin`}>
                <li className="py-6 pl-16 border-b-2 font-semibold cursor-pointer hover:bg-paste hover:text-white text-xl">
                  Make Admin
                </li>
              </Link>
              <Link to={`${url}/add-a-product`}>
                <li className="py-6 pl-16 border-b-2 font-semibold cursor-pointer hover:bg-paste hover:text-white text-xl">
                  Add A Product
                </li>
              </Link>
            </ul>
          )}
        </aside>
        <div className="lg:col-span-6 lg:p-16 px-4 py-8">
          <Switch>
            <Route exact path={path}>
              <DashboardMain />
            </Route>
            {/* user routes  */}
            <Route path={`${path}/my-orders`}>
              <MyOrders />
            </Route>
            <Route path={`${path}/pay`}>
              <Pay />
            </Route>
            <Route path={`${path}/review`}>
              <Review />
            </Route>
            {/* admin routes  */}
            <AdminRoute path={`${path}/manage-products`}>
              <ManageAllProducts />
            </AdminRoute>
            <AdminRoute path={`${path}/manage-all-orders`}>
              <ManageAllOrders />
            </AdminRoute>
            <AdminRoute path={`${path}/make-admin`}>
              <MakeAdmin />
            </AdminRoute>
            <AdminRoute path={`${path}/add-a-product`}>
              <AddAProduct />
            </AdminRoute>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
