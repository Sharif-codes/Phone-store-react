import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "../Phones/PhoneCard";
import { useEffect, useState } from "react";
import PhoneDetailsCard from "./PhoneDetailsCard";


const PhoneDetails = () => {
    const [phone, setPhone] = useState([])
    const { id } = useParams()
    console.log(id)
    const phones = useLoaderData()

    useEffect(() => {
        const findPhone = phones.find(phone => phone.id === id)
        setPhone(findPhone)
    }, [phones, id])
    return (
        <div>
            <PhoneDetailsCard phone={phone}></PhoneDetailsCard>
        </div>
    );
};

export default PhoneDetails;