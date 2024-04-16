const CardLoader = () => {
    return (
        <div className="h-56 w-40 sm:h-64 sm:w-60  lg:h-72 lg:w-60 rounded-xl bg-dark-4" />
    );
};
const Loader = () => {
    return (
        <div className="grid-layout">
            {Array(10)
                .fill(0)
                .map((_, index) => (
                    <CardLoader key={index} />
                ))}
        </div>
    );
};

export default Loader;
