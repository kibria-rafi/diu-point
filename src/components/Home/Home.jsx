import { useLoaderData } from "react-router-dom";
import ServiceCard from "../serviceCard/ServiceCard";


const Home = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className="mb-20 section flex flex-col items-center justify-center h-full">
            <h1 className="text-3xl mt-4 mb-4 font-sans font-semibold text-white/90">Welcome to DIU Point!</h1>
            <p className="text-xl mb-5 text-center font-semibold">One-stop web toolkit for Daffodil International University</p>
            <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {
                    data.map((singleData => <ServiceCard singleData={singleData} key={singleData.id}></ServiceCard>))
                }
            </div>
        </div>
    );
};

export default Home;