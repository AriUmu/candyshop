import React from 'react';
import PropTypes from 'prop-types'; //проверка типов

const CandyCard = (props) => (
    <div className="movie-card">
        <div className="movie-card card">
            <img className="card-img-top" src={props.candy.imageUrl} alt=""/>
            <div className="card-body">
                <h4 className="card-title">{props.candy.title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">{props.candy.subtitle}</h6>
                <p className="text-justify" style={{fontSize: '14px'}}>{props.candy.description}</p>
            </div>
            <div className="card-footer">

            </div>
        </div>
    </div>
)

CandyCard.defaultProps = {
    candy: {}
}

CandyCard.propTypes = {
    candy: PropTypes.object
};

export default CandyCard;