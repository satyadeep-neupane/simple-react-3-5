import { UserContext } from "../App";
import { useContext } from "react";

function Comp3() {
    const user = useContext(UserContext);

    return(
        <div>
            <h1>Comp3 - {user}</h1>
        </div>
    );
}

export default Comp3;