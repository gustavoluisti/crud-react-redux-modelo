import React from 'react'


const Distance = ({ distance, metric }) => {
    let distanceStr = ''
    // considerar o padrao - metric
    if(metric==='metric'){
        distanceStr = distance + 'km'
    } else {
        // 1km = 0,621371mi
        const distanceMi = distance * 0.621371
        distanceStr = distanceMi.toFixed(2) + 'mi'
    }
    return <span>{distanceStr}</span>
}

export default Distance