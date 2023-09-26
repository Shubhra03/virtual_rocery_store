import ProductForm from "../features/admin/components/ProductForm";
import NavBar from "../features/navbar/Navbar";
function AdminProductFormPage() {
    return ( 
        <div className="bg-white">
            <NavBar>
                <ProductForm></ProductForm>
            </NavBar>
        </div>
     );
}

export default AdminProductFormPage;