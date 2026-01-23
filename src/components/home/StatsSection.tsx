export default function StatsSection() {
    const stats = [
        { label: "Years of Experience", value: "25+" },
        { label: "Happy Clients", value: "5000+" },
        { label: "Schools Served", value: "150+" },
        { label: "Corporate Partners", value: "300+" }
    ];

    return (
        <section className="py-16 bg-primary text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl font-extrabold mb-2">{stat.value}</span>
                            <span className="text-lg font-medium opacity-90">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
