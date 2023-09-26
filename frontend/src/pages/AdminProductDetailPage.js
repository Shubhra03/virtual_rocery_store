import AdminProductDetail from "../features/admin/components/AdminProductDetail";
import NavBar from "../features/navbar/Navbar";
function AdminProductDetailPage() {
    return ( 
        <div className="bg-white">
            <NavBar>
                <AdminProductDetail></AdminProductDetail>
            </NavBar>
        </div>
     );
}

export default AdminProductDetailPage;