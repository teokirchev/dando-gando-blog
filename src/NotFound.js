import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>There's nothing to see here</p>
            <Link to={"/"}>Back to the homepage...</Link>
        </div>
    );
}