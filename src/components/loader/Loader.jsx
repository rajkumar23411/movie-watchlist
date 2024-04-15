const CardLoader = () => {
    return <div className="h-72 w-60 rounded-xl bg-green-800" />;
};
const Loader = () => {
    return (
        <div className="grid grid-cols-5 gap-10">
            {Array(10)
                .fill(0)
                .map((_, index) => (
                    <CardLoader key={index} />
                ))}
        </div>
    );
};

export default Loader;
