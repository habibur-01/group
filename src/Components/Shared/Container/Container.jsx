import PropTypes from "prop-types"

const Container = ({children}) => {
    return (
        <div className="container mx-auto">
            {children}
        </div>
    );
};
Container.propTypes = {
    children: PropTypes.any
}

export default Container;