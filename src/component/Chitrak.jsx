import React from 'react'
import { GiBarbedCoil } from "react-icons/gi";
import DoshEffect from './DoshEffect';
import { FaLocationDot } from "react-icons/fa6";
import ChitrakIngredient from './ChitrakIngredient';

function BenefitCard({ icon, text }) {
    return (
        <div className=" bg-[#FFEEDB] p-4 rounded-xl flex flex-col items-start gap-3 shadow-sm">
            <img src={icon} className="text-2xl rounded-xl p-3 bg-[#FFD8A2]" />
            <p className="text-[16px] font-medium text-[#000000]">{text}</p>
        </div>
    );
}

export default function Chitrak() {
    const CitrakInfo = [
        {
            name: "Citrak - Plumbago zeylancia",
            sanskrit: "चित्रक",
            description: [
                "Also known as Ceylon Leadwort or Doctorbush",
                "Improves digestion, reduces inflammation, and detoxifies the body",
                "Boosts metabolism, enhances skin health, and eases joint pain"
            ],
            whyCitrak: [
                "Chitrak is valued as it helps lower blood sugar, boosts digestion, and reduces anxiety",
                "It also protects skin and speeds up wound healing with antioxidant and antimicrobial properties",
                "It is most used in Ayurvedic medicines for indigestion"
            ],
            doshaEffect: [
                { id: 1, icon: "/images/Coil.png", name: "Vata balance", percentage: "40" },
                { id: 2, icon: "/images/Leaf.png", name: "Pitta balance", percentage: "40" },
                { id: 3, icon: "/images/Fire.png", name: "Kapha balance", percentage: "40" }
            ],
            benefits: [
                { icon: "/images/Head.png", text: "Calms the nervous system and reduces anxiety" },
                { icon: "/images/Weight.png", text: "Reduces cholesterol and supports weight loss" },
                { icon: "/images/Blood.png", text: "Manages diabetes by lowering blood sugar levels" },
                { icon: "/images/Medicine2.png", text: "Beneficial in hemorrhoids of Vata origin" },
                { icon: "/images/Dish.png", text: "Improves digestion and boosts metabolism" },
                { icon: "/images/Heart.png", text: "Prevents deposits in arteries, supporting heart health" },
                { icon: "/images/Leaf.png", text: "Treats skin conditions like acne and dermatitis" },
                { icon: "/images/Dish.png", text: "Speeds up wound healing and promotes new skin growth" },
            ],
            ayurvedicProperties: [
                {
                    id: 1,
                    img: "/images/Frame.png",
                    name: "Rasa",
                    heading: "Katu (Pungent)",
                    title: "Stimulates salivation and digestion"
                },
                {
                    id: 2,
                    img: "/images/Fram1.png",
                    name: "Veerya",
                    heading: "Ushna (Hot)",
                    title: "Increases heat and energy in the body"
                },
                {
                    id: 3,
                    img: "/images/Guna.png",
                    name: "Guna",
                    heading: "Laghu (Light), Ruksha (Dry), Tikshna (Sharp)",
                    title: "Easy to digest, reduces heaviness"
                },
                {
                    id: 4,
                    img: "/images/Frame3.png",
                    name: "Vipaka",
                    heading: "Katu (Pungent)",
                    title: "Drying and stimulating even after digestion"
                },
            ],
            plant: [
                {
                    id: 1,
                    name: "Root",
                    img: "/images/Root.png",
                    title: "Digestion, skin conditions, manage blood sugar level"
                },
                {
                    id: 2,
                    name: "Root Bark",
                    img: "/images/Roots.png",
                    title: "Manage obesity, metabolism and assist in weight loss"
                },
                {
                    id: 3,
                    name: "Leaves",
                    img: "/images/Peal.png",
                    title: "Used externally for skin conditions and wounds"
                }
            ],
            importantFormulations: [
                { id: 1, img: "/images/Matcha.png", name: "Chitrak Haritaki" },
                { id: 2, img: "/images/Cream.png", name: "Chitrakadi Vati" },
                { id: 3, img: "/images/Medicine.png", name: "Kalyanagulam" },
                { id: 4, img: "/images/Match.png", name: "Chitrakadi Churna" }
            ],
            therapeuticUses: [
                {
                    name: "Agnimandya",
                    img  : "/images/thera1.png",
                   
                },
                {
                    name: "Grahani Rog",
                   img  : "/images/thera2.png",

                    
                },
                {
                    name: "Arsha",
                       img  : "/images/thera3.png",
                   
                },
                {
                    name: "Udara Shula",
                       img  : "/images/thera4.png",
                },
                {
                    name: "Gudasotha",
                       img  : "/images/thera5.png",
                }
            ]
        }
    ];

    return (
        <div className='mt-10'>
            <div className='w-full flex flex-col lg:flex-row max-w-5xl mx-auto gap-10'>

                <div className='w-full lg:w-1/2 p-10'>
                    <img
                        src="/images/Ingredients.png"
                        alt="Citrak"
                        className="rounded-xl w-full object-cover"
                    />
                </div>

                <div className='w-full lg:w-1/  p-10'>
                    {CitrakInfo.map((item, index) => (
                        <div key={index} className='flex flex-col gap-6'>

                            <h1 className='text-2xl lg:text-4xl font-bold text-[#000000] mb-3'>
                                {item.name} {item.sanskrit}
                            </h1>

                            <div className='flex flex-col gap-2'>
                                {item.description.map((desc, i) => (
                                    <p key={i} className="text-[18px] font-normal">{desc}</p>
                                ))}
                            </div>

                            <div className="bg-[#FFF6EB] p-4 rounded-xl shadow-sm">
                                <h2 className="text-xl font-semibold mb-2">🌿 Why Citrak?</h2>
                                <div>
                                    {item.whyCitrak.map((reason, i) => (
                                        <div key={i} className='flex items-center gap-3'>
                                            <img src="/images/Group1.png" className='w-[20px]' />
                                            <p>{reason}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <DoshEffect item={item} />

                            <h2 className="text-xl font-semibold mt-4 p-5 mb-1">Benefits</h2>

                            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4  p-5">
                                {item.benefits.map((benefit, i) => (
                                    <BenefitCard key={i} icon={benefit.icon} text={benefit.text} />
                                ))}
                            </div>

                            <div className="bg-[#FFF6EB] p-6 rounded-xl shadow-sm">
                                <h2 className="text-xl font-semibold mb-6">Ayurvedic Properties</h2>

                                <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
                                    {item.ayurvedicProperties.map((prop, i) => (
                                        <div
                                            key={i}
                                            className="flex flex-col items-center text-center p-4 rounded-lg"
                                        >
                                            <img src={prop.img} alt={prop.name} className="w-10 h-10 mb-2" />
                                            <p className="text-lg font-semibold capitalize">{prop.name}</p>
                                            <p className="text-base font-medium text-gray-800">{prop.heading}</p>
                                            <p className="text-sm text-gray-600 mt-1">{prop.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-[#FFF6EB] p-4 rounded-xl shadow-sm">
                                <h2 className="text-xl font-semibold mb-4">Important Formulations</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    {item.importantFormulations.map((form, i) => (
                                        <div key={i} className="flex flex-col items-center text-center p-2 rounded-lg">
                                            <img
                                                src={form.img}
                                                alt={form.name}
                                                className="w-16 h-16 object-contain mb-2"
                                            />
                                            <p className="text-[14px] font-medium">{form.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h1 className='text-xl font-semibold mb-4'>Therapeutic Use</h1>
                                <div className='grid grid-cols-3 lg:grid-cols-5 gap-3 bg-[#FFE9CB] p-4 rounded-2xl '>
                                    {
                                        item.therapeuticUses.map((thera, i) => (
                                            <div key={i} className='flex flex-col items-center gap-3'>
                                                <div className='flex items-center justify-center w-[100px] h-[100px] bg-white rounded-full '>
                                                    <div className='flex items-center justify-center w-[70px] h-[70px] bg-[#E0E8E2] rounded-full p-4'>
                                                        <img src={thera.img} />
                                                    </div>
                                                </div>
                                                <p className='text-base font-normal text-[#161616]'>{thera.name}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className='p-5'>
                                <h2 className='text-lg font-semibold text-[#000000]'>Plant Purposes and its Parts</h2>
                                <div className='grid grid-cols-2 lg:grid-cols-3 mt-5 gap-4'>
                                    {item.plant.map((plant, i) => (
                                        <div
                                            key={i}
                                            className='w-full flex flex-col items-center justify-center gap-1 max-w-[200px]'
                                        >
                                            <img src={plant.img} className='w-[50px]' />
                                            <p className='text-base font-bold text-center'>{plant.name}</p>
                                            <p className='max-w-[150px] lg:max-w-[250px] text-center'>{plant.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className='p-5'>
                                <h1 className='text-lg font-bold text-[#000000]'>Best combined with</h1>
                                <p className='text-base font-normal text-gray-700'>
                                    Pipplai, Haritakai, Guggulu, Punarnava, Amla, Giloy
                                </p>
                            </div>

                            <div className='p-5'>
                                <h1 className='text-lg font-bold text-[#000000]'>Geographical locations</h1>
                                <div className='flex items-center gap-1'>
                                    <span><FaLocationDot /></span>
                                    <p>It is native to tropical and subtropical regions worldwide, including India and Sri Lanka.</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <ChitrakIngredient />
            </div>
        </div>
    );
}
