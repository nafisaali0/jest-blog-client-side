import PropTypes from "prop-types";
import useTotalLikes from "../../../hooks/useTotalLikes";

const TotalLikes = ({ id }) => {
    const { totalLikes, isLoading } = useTotalLikes(id);

    if (isLoading) return <span>Loading...</span>;

    return (
        <span className="flex items-center gap-1 text-gray-600">
            {totalLikes}
        </span>
    );
};

TotalLikes.propTypes = {
    id: PropTypes.string.isRequired,
};

export default TotalLikes;
