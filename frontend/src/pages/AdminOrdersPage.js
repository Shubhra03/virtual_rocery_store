import AdminOrders from "../features/admin/components/AdminOrders";
import NavBar from "../features/navbar/Navbar";

function AdminOrdersPage() {
    return ( 
        <div className="bg-white">
            <NavBar>
                <AdminOrders></AdminOrders>
            </NavBar>
        </div>
     );
}

export default AdminOrdersPage;