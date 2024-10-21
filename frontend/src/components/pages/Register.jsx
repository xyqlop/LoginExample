import { Link, useNavigate } from "react-router-dom";
import Submit from "../buttons/Submit";
import Input from "../inputs/Input";
import PageLayout from "../layouts/PageLayout";
import { useState } from "react";
import { register } from "../../services/auth.service";

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [passLessThenSix, setPassLessThenSix] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setPassLessThenSix(true);
      setPasswordsMatch(true);
      setTimeout(() => {
        setPassLessThenSix(false);
      }, 3000);
      return;
    }

    if (password !== conPassword) {
      setPassLessThenSix(false);
      setPasswordsMatch(false);
      setTimeout(() => {
        setPasswordsMatch(true);
      }, 3000);
      return;
    }

    try {
      const result = register(userName, email, password);
      if (result) {
        setPassLessThenSix(false);
        setPasswordsMatch(true);
        navigate("/login");
        return;
      }
    } catch (error) {
      console.log("Error dari frontend: ", error);
    }
  };

  return (
    <PageLayout>
      <div className="py-10 px-10 bg-[#262626] border border-[#3F3F3F] rounded-md font-montserrat container max-w-96">
        <div className="mb-10 ">
          <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
          <p className="text-sm font-light">Please insert your details</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-10">
            <Input
              type="text"
              label="Username"
              placeholder="johndoe@example.com"
              name="name"
              onChange={(e) => setUserName(e.target.value)}
            />
            <Input
              type="email"
              label="Email"
              placeholder="johndoe@example.com"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              label="Password"
              placeholder="********"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              label="Confirm Password"
              placeholder="********"
              name="conPassword"
              onChange={(e) => setConPassword(e.target.value)}
            />
            {passLessThenSix && (
              <p className="text-red-500 text-sm">
                Password must be at least 6 characters
              </p>
            )}
            {!passwordsMatch && (
              <p className="text-red-500 text-sm">
                Password doesn&apos;t match
              </p>
            )}
          </div>

          <Submit type="submit">Sign Up</Submit>
        </form>
        <p className="mt-6 text-sm font-light">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-500 hover:underline font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </PageLayout>
  );
}

export default Register;
