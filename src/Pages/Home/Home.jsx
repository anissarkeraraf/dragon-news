import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSide/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/Right/RightSideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="lg:col-span-2">
                    <h2 className="text-4xl">News Coming Soon...</h2>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;