import Signup from "../features/auth/components/Signup";

function SignupPage() {
  return (
    <div>
      <div
        className="bg-contain h-screen"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1198380802/vector/food-background-vegetables-seamless-pattern-healthy-eating-tomato-garlic-carrot-pepper.jpg?s=612x612&w=0&k=20&c=jHB3uTWZrakPyAgqSQfOApxSq_jIwHRx00LiOV2YHEk=')",
        }}
      >
        <Signup></Signup>
      </div>
    </div>
  );
}

export default SignupPage;
