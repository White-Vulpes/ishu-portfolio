import React from 'react';

function Card(props) {
    let image = 'https://picsum.photos/500';
    return (
        <div key={Math.random()} style={{
            ...styles.card,
            ...styles[props.size]
        }}>
            <img alt='sample' height={'100%'} width={'100%'} src={image}/>
        </div>
    )
}

const styles = {
    card: {
        margin: '15px 10px',
        padding: 0,
    },
    small: {
        gridRowEnd: 'span 20'
    },
    medium: {
        gridRowEnd: 'span 27'
    },
    large: {
        gridRowEnd: 'span 39'
    }
}

export default Card;