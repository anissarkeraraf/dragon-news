import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaSquareTwitter } from "react-icons/fa6";
import app from "../../../firebase/firebase.config";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"


const RightSideNav = () => {

    const auth = getAuth(app);
    console.log(app)
    const provider = new GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })

    }


    return (
        <div className="border border-solid border-black rounded-lg">
            <div className="p-4">
                <h2 className="text-3xl">Login With</h2>
                <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full mt-4">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>

            </div>
            <div className="p-4">
                <h2 className="text-3xl">Find Us</h2>
                <a className="p-4 flex text-lg items-center border border-solid border-black rounded-t-lg  no-underline text-black" href="#">
                    <FaFacebook className="mr-3"></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className="p-4 flex text-lg items-center border border-solid border-black  no-underline text-black" href="#">
                    <FaSquareTwitter className="mr-3"></FaSquareTwitter>
                    <span>Twitter</span>
                </a>
                <a className="p-4 flex text-lg items-center border border-solid border-black rounded-b-lg  no-underline text-black" href="#">
                    <FaInstagram className="mr-3"></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>
            <div>
                <h2 className="text-3xl p-4">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;