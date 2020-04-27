import React from 'react';
import PropTypes from 'prop-types';
import CandyCard from "./CandyCard";

const getCandy = (candies) => {
    return (
        <div className="card-deck">
            {
                candies.map(candy => <CandyCard key={candy.id} can={candy}/>)
            }
        </div>
    );
}

const CandyList = (props) => (
    <div>
        {getCandy(props.candy)}
    </div>
)

CandyList.defaultProps = {
    candy: []
};

CandyList.propTypes = {
    candy: PropTypes.array
};

export default CandyList;
