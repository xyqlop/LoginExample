import { Link, useNavigate } from "react-router-dom";
import Submit from "../buttons/Submit";
import Input from "../inputs/Input";
import PageLayout from "../layouts/PageLayout";
import { useState } from "react";
import { login } from "../../services/auth.service";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await login(email, password);

      if (!result) {
        setInvalid(true);
        setTimeout(() => {
          setInvalid(false);
        }, 3000);
        return;
      }

      navigate("/home");
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <PageLayout>
      <div className="py-10 px-10 bg-[#262626] border border-[#3F3F3F] rounded-md font-montserrat container max-w-96">
        <div className="mb-10 ">
          <h2 className="text-3xl font-bold mb-4">Login</h2>
          <p className="text-sm font-thin">Please insert your details</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-10">
            <Input
              type="email"
              label="Email"
              placeholder="johndoe@example.com"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type={"password"}
              label="Password"
              placeholder="********"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            {invalid && (
              <p className="text-red-500 text-sm">Invalid email or password</p>
            )}
          </div>

          <Submit type="submit">Login</Submit>
        </form>
        <p className="mt-6 font-light text-sm">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="text-green-500 hover:underline font-semibold"
          >
            Register
          </Link>
        </p>
      </div>
    </PageLayout>
  );
}

export default Login;
