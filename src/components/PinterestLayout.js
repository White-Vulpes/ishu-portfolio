import React from 'react';

import Card from './Card.js';

function PinterestLayout() {
    return (
        <div style={styles.pin_container}>
            <Card size="small"/>
            <Card size="medium" />
            <Card size="large" />
            <Card size="large" />
            <Card size="small" />
            <Card size="medium" />
            <Card size="small" />
            <Card size="large" />
            <Card size="small" />
            <Card size="large" />
            <Card size="meduim" />
            <Card size="large" />
            <Card size="small" />
        </div>
    )
}

const styles = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        gridAutoRows: '10px',
        justifyContent: 'center',
        backgroundColor: 'black'
    }
}

export default PinterestLayout;