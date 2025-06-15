import React, { useState } from "react";

const events = [
    {
        id: 1,
        image: "https://i0.wp.com/blog.okfn.org/wp-content/uploads/2024/04/nepal16.jpg?w=1200&ssl=1",
        title: "React Conference 2023",
        date: "March 2023",
        description: "Attended React Conference 2023 to learn about the latest trends in React and network with industry professionals.",
        link: "https://blog.okfn.org/2024/04/25/oddstories-2024-kathmandu-nepal/", // Add your event link here
    },
    {
        id: 2,
        image: "https://scontent.fktm3-1.fna.fbcdn.net/v/t39.30808-6/476817210_122208768332079006_8096115897188659795_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=CoO21rhVJVwQ7kNvwEdgD4-&_nc_oc=AdlX_4kp4syBVKq778ifHNaHUWl5zRWZ_3XtuqvKSjWGkLJIiYABnwTDCcD0wUIncl40Wg83i9p2PvBl9og-2x1y&_nc_zt=23&_nc_ht=scontent.fktm3-1.fna&_nc_gid=zXyDRL4cgOix1j2t6Fj8fA&oh=00_AfP6Hoq7VobW1I4FlA9b1sSE-oAlymMN0LOE6hOUbPSU-Q&oe=685424D7",
        title: "Hackathon XYZ",
        date: "July 2022",
        description: "Participated in Hackathon XYZ and built a real-time collaboration tool with a team of developers.",
        link: "https://www.facebook.com/photo/?fbid=122209077938079006&set=-exciting-news-for-students-in-partnership-with-nepal-telecom-we-are-thrilled-to",
    },
    {
        id: 3,
        image: "https://via.placeholder.com/100x100?text=Event+3",
        title: "Web Dev Meetup",
        date: "November 2021",
        description: "Joined local web development meetup to share knowledge and collaborate on open-source projects.",
        link: "https://ictframe.com/ascol-hackfest-2024-concludes/",
    },
    {
        id: 4,
        image: "/woman-jacket.jpg",
        title: "Web Dev Meetup",
        date: "November 2021",
        description: "Joined local web development meetup to share knowledge and collaborate on open-source projects.",
        link: "https://ictframe.com/ascol-hackfest-2024-concludes/",
    },
    {
        id: 5,
        image: "/woman-jacket.jpg",
        title: "Web Dev Meetup",
        date: "November 2021",
        description: "Joined local web development meetup to share knowledge and collaborate on open-source projects.",
        link: "https://ictframe.com/ascol-hackfest-2024-concludes/",
    },
];

const Events = () => {
    const [hoveredIdx, setHoveredIdx] = useState(null);
    const [imgHoveredIdx, setImgHoveredIdx] = useState(null);

    return (
        <main className="px-[1rem] py-[4rem]">
            <h2 className="mb-8 text-center text-gray-800">Events & Conferences</h2>
            <div className="grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-3 grid-cols-2 gap-10">
                {events.map((event, idx) => (
                    <div key={event.id} className="flex flex-col items-center transition-shadow">
                        <a
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative lg:w-100 lg:h-100 md:w-60 md:h-60 w-40 h-40 block"
                            onMouseEnter={() => setImgHoveredIdx(idx)}
                            onMouseLeave={() => setImgHoveredIdx(null)}
                        >
                            <img
                                src={event.image}
                                alt={event.title}
                                className="lg:w-100 lg:h-100 md:w-60 md:h-60 w-40 h-40 object-cover border border-gray-200"
                                style={{ borderRadius: 0 }}
                            />
                            {imgHoveredIdx === idx && (
                                <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] bg-opacity-60 flex items-center justify-center text-white text-center p-4 transition-opacity duration-200">
                                    <sp>{event.description}</sp>
                                </div>
                            )}
                        </a>
                        <div className="flex flex-col items-center mt-4 w-full">
                            <h7 className="text-xl font-semibold text-gray-900 text-center">{event.title}</h7>
                            <div
                                className="relative mt-1 mb-2 text-sm text-gray-500 cursor-pointer"
                                onMouseEnter={() => setHoveredIdx(idx)}
                                onMouseLeave={() => setHoveredIdx(null)}
                            >
                                {event.date}
                                {hoveredIdx === idx && (
                                    <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 p-3 bg-gray-100 border border-gray-300 text-xs text-gray-700 rounded shadow-lg z-10">
                                        {event.description}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                {/* Fill empty grid cells if less than 6 events */}
                {Array.from({ length: 6 - events.length }).map((_, i) => (
                    <div key={`empty-${i}`} />
                ))}
            </div>
        </main>
    );
};

export default Events;