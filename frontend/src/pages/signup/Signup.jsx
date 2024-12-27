import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
    return(
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md 
            bg-gray-400 bg-clip-padding backdrop-filter 
            backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-200">
                    Sign Up <span className="text-orange-500"> ChatZone</span>
                </h1>

                <form action="">
                    <div>
                        <label className="label p-2">
                            <span className="text-base text-gray-200 label-text">Full Name</span>
                        </label>
                        <input type="text" 
                        placeholder="Enter your full name" 
                        className="w-full input input-bordered h-10"/>
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base text-gray-200 label-text">Username</span>
                        </label>
                        <input type="text" 
                        placeholder="Enter username" 
                        className="w-full input input-bordered h-10"/>
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base text-gray-200 label-text">Password</span>
                        </label>
                        <input type="password" 
                        placeholder="Enter password" 
                        className="w-full input input-bordered h-10"/>
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base text-gray-200 label-text">Confirm Password</span>
                        </label>
                        <input type="password" 
                        placeholder="Confirm Password" 
                        className="w-full input input-bordered h-10"/>
                    </div>

                    <GenderCheckbox />



                    <a href="#" className="text-sm text-gray-200 hover:underline 
                        hover:text-orange-500 mt-2 inline-block">
                        Already have an account?
                    </a>

                    <div>
                        <button className="btn btn-block btn-sm mt-2">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default SignUp;



// STARTER CODE FOR SIGNUP

// import GenderCheckbox from "./GenderCheckbox";

// const SignUp = () => {
//     return(
//         <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//             <div className="w-full p-6 rounded-lg shadow-md 
//             bg-gray-400 bg-clip-padding backdrop-filter 
//             backdrop-blur-lg bg-opacity-0">
//                 <h1 className="text-3xl font-semibold text-center text-gray-200">
//                     Sign Up <span className="text-orange-500"> ChatZone</span>
//                 </h1>

//                 <form action="">
//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base text-gray-200 label-text">Full Name</span>
//                         </label>
//                         <input type="text" 
//                         placeholder="Enter your full name" 
//                         className="w-full input input-bordered h-10"/>
//                     </div>

//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base text-gray-200 label-text">Username</span>
//                         </label>
//                         <input type="text" 
//                         placeholder="Enter username" 
//                         className="w-full input input-bordered h-10"/>
//                     </div>

//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base text-gray-200 label-text">Password</span>
//                         </label>
//                         <input type="password" 
//                         placeholder="Enter password" 
//                         className="w-full input input-bordered h-10"/>
//                     </div>

//                     <div>
//                         <label className="label p-2">
//                             <span className="text-base text-gray-200 label-text">Confirm Password</span>
//                         </label>
//                         <input type="password" 
//                         placeholder="Confirm Password" 
//                         className="w-full input input-bordered h-10"/>
//                     </div>

//                     <GenderCheckbox />



//                     <a href="#" className="text-sm text-gray-200 hover:underline 
//                         hover:text-orange-500 mt-2 inline-block">
//                         Already have an account?
//                     </a>

//                     <div>
//                         <button className="btn btn-block btn-sm mt-2">
//                             Sign Up
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// };

// export default SignUp;