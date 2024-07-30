import PropTypes from 'prop-types';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center space-y-4'>
            <h1 className="text-4xl font-bold">{heading}</h1>
            <p className="text-base font-medium">{subHeading}</p>
        </div>
    );
};
SectionTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string
}

export default SectionTitle;