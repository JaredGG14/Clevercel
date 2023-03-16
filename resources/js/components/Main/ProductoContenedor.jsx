import { Outlet } from "react-router-dom";

function Contenedor() {
    return (
        <>
            <div>
                <section>
                    <Outlet/>
                </section>
            </div>
        </>
    );
}

export default Contenedor;