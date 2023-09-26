import NavBar from '../features/navbar/Navbar';
import UserOrders from '../features/user/components/UserOrders';

function UserOrdersPage() {
  return (
    <div className='bg-white'>
      <NavBar>
        
        <UserOrders></UserOrders>
      </NavBar>
    </div>
  );
}

export default UserOrdersPage;
