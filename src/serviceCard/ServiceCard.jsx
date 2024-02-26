

const ServiceCard = ({singleData}) => {
    const {id,name,logo,description}=singleData;
    return (
        <div className="card w-[300px] h-[320px] bg-[#0A1D56] shadow-xl">
  <figure className="px-10 pt-10">
    <img src={logo} alt="Shoes" className="rounded-xl h-20" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="card-actions">
      <button className="px-6 text-white rounded-md py-1 bg-[#492E87]">Explore</button>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;