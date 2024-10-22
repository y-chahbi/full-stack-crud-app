import Link from "next/link";



const Login = () => {
    return (
        <div className="Login page py-40 flex justify-center">
            <form className=" border-2 border-[rgb(0 0 0 / 12%)] rounded-md  flex justify-center items-center flex-col px-20 py-10">
                <input className="border-2 p-2 w-60 my-2 outline-0" type="text" id="username" placeholder="Username"/>
                <input className="border-2 p-2 w-60 my-2  outline-0" type="password" id="password" placeholder="Password"/>
                <button className="p-2 bg-[var(--buttons-color)] text-white w-20 mt-4 rounded-sm"> Login</button>
                <Link className="mt-6" href={"forget"}>forget your password?</Link>
            </form>
        </div>
    );
}


export default Login;