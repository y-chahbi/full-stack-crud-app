import Link from "next/link";




const Register = () => {
    return (
        <div className="register page py-40 flex justify-center">
        <form className=" border-2 border-[rgb(0 0 0 / 12%)] flex rounded-md justify-center items-center flex-col px-20 py-10">
            <input className="border-2 p-2 w-60 my-2 outline-0" type="text" id="username" placeholder="Username"/>
            <input className="border-2 p-2 w-60 my-2 outline-0" type="text" id="email" placeholder="Email"/>
            <input className="border-2 p-2 w-60 my-2  outline-0" type="password" id="password" placeholder="Password"/>
            <div className="AceptTerms my-2">
                <input type="checkbox" id="Agree" name="vehicle3" value="Boat"></input>
                <label htmlFor="Agree"> <Link href={"/policy"}>I Agree on terms and Policy</Link></label>
            </div>
            <button className="p-2 bg-[var(--buttons-color)] text-white w-20 mt-4 rounded-sm"> Register</button>
        </form>
    </div>);
}


export default Register;