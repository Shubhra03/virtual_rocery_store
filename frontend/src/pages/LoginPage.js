import Login from "../features/auth/components/Login"; 
import NavBar from "../features/navbar/Navbar"; 
import Footer from "../features/common/Footer"; 
// import "./Loginpage.css" 
 
function LoginPage() { 
    return ( <div className="main"> 
         
        {/* <NavBar></NavBar>  */} 
        {/* <div class="bg-yellow shadow-md rounded px-8 pt-6 pb-8 mb-4"> */} 
        <div className="bg-contain h-screen" 
  style={{ backgroundImage: "url('https://media.istockphoto.com/id/1198380802/vector/food-background-vegetables-seamless-pattern-healthy-eating-tomato-garlic-carrot-pepper.jpg?s=612x612&w=0&k=20&c=jHB3uTWZrakPyAgqSQfOApxSq_jIwHRx00LiOV2YHEk=')"}}> 
        <Login></Login> 
        </div> 
        {/* </div> */} 
         
        {/* <Footer></Footer> */} 
    </div>  ); 
} 
 
export default LoginPage;