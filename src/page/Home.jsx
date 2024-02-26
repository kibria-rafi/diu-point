import { useLoaderData } from "react-router-dom";
import ServiceCard from "../serviceCard/ServiceCard";


const Home = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className=" section flex flex-col items-center justify-center h-full">
            <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {
                data.map((singleData =><ServiceCard singleData={singleData} key={singleData.id}></ServiceCard> ))
            }
            </div>
        </div>
    );
};

export default Home;