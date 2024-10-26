import React from 'react';

interface TabProps {
    tab: string;
    setTab: (tab: string) => void;
}

const Tab: React.FC<TabProps> = ({ tab, setTab }) => {
    const marquesDeParfum = [
        { id: 1, nom: "Chanel" },
        { id: 2, nom: "Dior" },
        { id: 3, nom: "Guerlain" },
        { id: 4, nom: "Yves Saint Laurent" },
        { id: 5, nom: "Hermès" },
        { id: 6, nom: "Tom Ford" },
        { id: 7, nom: "Jo Malone" },
        { id: 8, nom: "Marc Jacobs" },
        { id: 9, nom: "Burberry" },
        { id: 10, nom: "Prada" },
        { id: 11, nom: "Versace" },
        { id: 12, nom: "Givenchy" },
        { id: 13, nom: "Dolce & Gabbana" },
        { id: 14, nom: "Calvin Klein" },
        { id: 15, nom: "Armani" },
        { id: 16, nom: "Lanvin" },
        { id: 17, nom: "Bvlgari" },
        { id: 18, nom: "Cartier" },
        { id: 19, nom: "Acqua di Parma" },
        { id: 20, nom: "Narciso Rodriguez" },
    ];
    
    return (
        <div className="flex flex-col bg-black gap-4 text-center p-4  ">
            {marquesDeParfum.map((marque) => (
                <div 
                    key={marque.id} 
                    onClick={() => setTab(marque.nom)}
                    className={`${marque.nom === tab ? "bg-white text-black" : "text-white bg-inherit"} p-2 rounded-xl font-dancing capitalize text-[20px] font-bold `}
                >
                    {marque.nom}
                </div>
            ))}
        </div>
    );
}

export default Tab;
