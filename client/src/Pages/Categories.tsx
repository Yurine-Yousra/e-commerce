import { useState } from "react";
import Card from '../Components/Card.tsx';
import Tab from "../Components/Tab.tsx";

const Categories = () => {
    const [tab, setTab] = useState('dior');
    
    return (
        <div className=" grid lg:grid-cols-4 grid-cols-1 w-[90%] m-auto gap-4">
            {/* This div will now appear on the left */}
            <div className=" col-span-1">
               <Tab tab={tab} setTab={setTab} />
            </div> 
            <div className="lg:col-span-3 col-span-1">
                <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-2">
                {[1, 2, 3, 4, 5].map((number) => (
                    <Card key={number} />
                ))}
                </div>
                
            </div>
        </div>
    );
}

export default Categories;
