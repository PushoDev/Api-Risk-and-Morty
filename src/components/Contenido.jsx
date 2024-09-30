import Pagination from './layout/Pagination';

const Contenido = ({ characters = [] }) => {

    const columns = 4;
    const columnWidth = 100 / columns;

    return (
        <>
            <div className="pt-10">

                <div className="grid grid-cols-4 gap-4 xl-4">
                    {
                        characters.map((item, index) => (
                            <div key={index} className="card  bg-base-100 w-96 shadow-xl" style={{ minWidth: "200px" }}>
                                <figure className="px-10 pt-10">
                                    <img
                                        src={item.image} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {item.name}
                                    </h2>
                                    <p className="justify-center">Localidad: {item.location.name}</p>
                                    <div className="card-actions justify-center">
                                        <div className="badge badge-secondary">{item.species}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Contenido