import PhoneCard from "./PhoneCard";

const Phones = ({phones}) => {
    return (
        <div>
            <h1 className="text-center">All category phones</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  my-5 mx-auto ">

           
            {
                // eslint-disable-next-line react/prop-types
                phones?.map(phone =><PhoneCard key={phone.id} phone={phone}></PhoneCard>
                    
                )
            }
             </div>
        </div>
    );
};

export default Phones;