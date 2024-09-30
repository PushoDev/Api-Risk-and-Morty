export const Pagination = ({ prev, next, onPrevious, onNext }) => {

    const handlePrevious = () => {
        onPrevious();
    };

    const handleNext = () => {
        onNext();
    };

    return (
        <div className="w-full mx-auto">
            <div className="join grid grid-cols-8">
                {
                    prev ? (
                        <button className="join-item btn btn-outline" onClick={handlePrevious}>Anterior</button>
                    ) : null
                }
                {
                    next ? (
                        <button className="join-item btn btn-outline" onClick={handleNext}>Siguiente</button>
                    ) : null
                }
            </div>
        </div>
    )
}

export default Pagination