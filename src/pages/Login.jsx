import { useContext, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { RxEyeClosed } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const Register = () => {
  const { signIn } = useContext(AuthContext);
  const [passwordShow, setPasswordShow] = useState("");
  const navigate = useNavigate('')
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });
    if (!/@gmail\.com$/.test(email)) {
      return setErrorEmail("Email must be end with @gmail.com");
    }
    if (password.length < 6) {
      setError("password must be at least 6 characters");
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Must have an Uppercase letter in the password");
      return;
    }
    if (!/(?=.*?[a-z])/.test(password)) {
      setError("Must have an lowercase letter in the password");
      return;
    }
    setError("");
    setSuccess("");
    setErrorEmail("");
    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        setSuccess("User Created Successfully");
      })
      navigate('/')
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="hero ">
      <div className="hero-content flex-col w-full">
        <div className="card shrink-0 xl:w-4/12 lg:w-5/12 md:w-6/12 sm:w-7/12 w-10/12  shadow-2xl bg-base-100">
          <h1 className="md:text-3xl text-2xl text-center pt-5 font-medium">
            Login Now
          </h1>
          <form onSubmit={handleLogin} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
              <div className="text-red-500 pt-3 text-center">
                {errorEmail && <p>{errorEmail}</p>}
              </div>
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={passwordShow ? "text" : "password"}
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <span
                className="absolute top-[51px] right-5 cursor-pointer"
                onClick={() => setPasswordShow(!passwordShow)}
              >
                {passwordShow ? <IoEyeOutline /> : <RxEyeClosed />}
              </span>
            </div>
            <div>
              <div className="text-red-500">{error && <p>{error}</p>}</div>
              <div className="text-green-500">
                {success && <p>{success}</p>}
              </div>
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div>
            <div className="flex items-center justify-center gap-2 text-base pb-4 font-medium">
              <p className="">Dont’t Have An Account ?</p>
              <Link to="/register" className=" text-blue-700">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
