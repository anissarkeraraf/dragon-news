import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn bg-[#ef47bc]">Secondary</button>
            <Marquee pauseOnHover={true} speed={100}>
                <div className="mr-12">
                    I can be a React component, multiple React components...
                </div>
                <div className="mr-12">
                    I can be a React component, multiple React components...
                </div>
                <div className="mr-12">
                    I can be a React component, multiple React components...
                </div>
                <div className="mr-12">
                    I can be a React component, multiple React components...
                </div>
            </Marquee>
        </div>
    );
};

export default BreakingNews;