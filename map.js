
mapboxgl.accessToken = 'pk.eyJ1IjoidGltb25lYWwiLCJhIjoiY2xjZm04YW5yMGFnYTNvcG1pZTNicGU2diJ9.eYwXLLfgApOlhZbiYYTWAA';
var map = new mapboxgl.Map(
    {
        container: 'map',
        style: 'mapbox://styles/timoneal/cld3l5xw2000001pa86676qrk',
        projection: 'mercator',
        zoom: 6,
        center: [-120.436571, 47.021330],
        maxZoom: 12,
        minZoom: 2
    }
);

const MINZOOM = 7;
const MAXZOOM = 7;


map.on('load', function () {

    // Add 2022 General County source data
    map.addSource('g2022-county', {
        type: 'geojson',
        data: 'Data/g2022_county.geojson'
        }
    );

    // Add 2022 General Congressional District source data
    map.addSource('g2022-CD', {
        type: 'geojson',
        data: 'Data/g2022_CD.geojson'
        }
    );

    // Add 2022 General Legislative District source data
    map.addSource('g2022-LD', {
        type: 'geojson',
        data: 'Data/g2022_LD.geojson'
        }
    );

    // Add 2022 General Precinct source data
    map.addSource('g2022-precinct', {
        type: 'geojson',
        data: 'Data/g2022_precinct.geojson'
        }
    );

    // Washington County boundaries
    map.addLayer(
        {
            id: 'outlines-county',
            type: 'line',
            source: 'g2022-county',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'line-color': '#ffffff',
                'line-width': 1
            }
        },
        'waterway-label'
    );

    // Washington Congressional District boundaries
    map.addLayer(
        {
            id: 'outlines-CD',
            type: 'line',
            source: 'g2022-CD',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'line-color': '#ffffff',
                'line-width': 1
            }
        },
        'waterway-label'
    );

    // Washington Legislative District boundaries
    map.addLayer(
        {
            id: 'outlines-LD',
            type: 'line',
            source: 'g2022-LD',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'line-color': '#ffffff',
                'line-width': 1
            }
        },
        'waterway-label'
    );

    // 2022 General: Turnout, county layer
    map.addLayer(
        {
            id: 'g2022-turnout-county',
            type: 'fill',
            source: 'g2022-county',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': '#179f92',
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'Total_Turnout'],
                    0.1, 10,
                    0.2, 20,
                    0.3, 30,
                    0.4, 40,
                    0.5, 50,
                    0.6, 60,
                    0.7, 70,
                    0.8, 80,
                    0.9, 90,
                    1.0, 100,
                    0
                ]
            },
            maxzoom: MAXZOOM
        },
        'outlines-county'
    );
    
    // 2022 General: Turnout, precinct layer
    map.addLayer(
        {
            id: 'g2022-turnout-precinct',
            type: 'fill',
            source: 'g2022-precinct',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': '#179f92',
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'Total_Turnout'],
                    0.1, 10,
                    0.2, 20,
                    0.3, 30,
                    0.4, 40,
                    0.5, 50,
                    0.6, 60,
                    0.7, 70,
                    0.8, 80,
                    0.9, 90,
                    1.0, 100,
                    0
                ]
            },
            minzoom: MINZOOM
        },
        'g2022-turnout-county'
    );

    // 2022 General: Secretary of State, county layer
    map.addLayer(
        {
            id: 'g2022-SoS-county',
            type: 'fill',
            source: 'g2022-county',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'SoS_Party_1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#dedede'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'SoS_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 25,
                    0.8, 30,
                    0.9, 35,
                    1.0, 100,
                    0.1
                ]
            },
            maxzoom: MAXZOOM
        },
        'outlines-county'
    );
    
    // 2022 General: Secretary of State, precinct layer
    map.addLayer(
        {
            id: 'g2022-SoS-precinct',
            type: 'fill',
            source: 'g2022-precinct',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'SoS_Party_1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#dedede'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'SoS_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 25,
                    0.8, 30,
                    0.9, 35,
                    1.0, 100,
                    0.1
                ]
            },
            minzoom: MINZOOM
        },
        'outlines-county'
    );

    // 2022 General: U.S. Senate, county layer
    map.addLayer(
        {
            id: 'g2022-FSen-county',
            type: 'fill',
            source: 'g2022-county',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'FSen_Party_1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#dedede'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'FSen_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 25,
                    0.8, 30,
                    0.9, 35,
                    1.0, 100,
                    0.1
                ]
            },
            maxzoom: MAXZOOM
        },
        'outlines-county'
    );

    // 2022 General: U.S. Senate, precinct layer
    map.addLayer(
        {
            id: 'g2022-FSen-precinct',
            type: 'fill',
            source: 'g2022-precinct',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'FSen_Party_1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#dedede'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'FSen_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 25,
                    0.8, 30,
                    0.9, 35,
                    1.0, 100,
                    0.1
                ]
            },
            minzoom: MINZOOM
        },
        'g2022-FSen-county'
    );
 
    // 2022 General: U.S. Representative, CD layer
    map.addLayer(
        {
            id: 'g2022-FRep-CD',
            type: 'fill',
            source: 'g2022-CD',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'FRep_Party_1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#dedede'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'FRep_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 25,
                    0.8, 30,
                    0.9, 35,
                    1.0, 100,
                    0.1
                ]
            },
            maxzoom: MAXZOOM
        },
        'outlines-CD'
    );

    // 2022 General: U.S. Representative, precinct layer
    map.addLayer(
        {
            id: 'g2022-FRep-precinct',
            type: 'fill',
            source: 'g2022-precinct',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'FRep_Party_1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#dedede'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'FRep_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 25,
                    0.8, 30,
                    0.9, 35,
                    1.0, 100,
                    0.1
                ]
            },
            minzoom: MINZOOM
        },
        'g2022-FRep-CD'
    );

    // 2022 General: State Senator, LD layer
    map.addLayer(
        {
            id: 'g2022-SSen-LD',
            type: 'fill',
            source: 'g2022-LD',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'SSen_Party_1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#dedede'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'SSen_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 25,
                    0.8, 30,
                    0.9, 35,
                    1.0, 100,
                    0
                ],
            },
            maxzoom: MAXZOOM
        },
        'outlines-LD'
    );

    // 2022 General: State Senator, precinct layer
    map.addLayer(
        {
            id: 'g2022-SSen-precinct',
            type: 'fill',
            source: 'g2022-precinct',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'SSen_Party_1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#dedede'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'SSen_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 25,
                    0.8, 30,
                    0.9, 35,
                    1.0, 100,
                    1
                ]
            },
            minzoom: MINZOOM
        },
        'outlines-LD'
    );

    // 2022 General: State Representative Pos. 1, LD layer
    map.addLayer(
        {
            id: 'g2022-SRep1-LD',
            type: 'fill',
            source: 'g2022-LD',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'SRep1_Party_1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#dedede'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'SRep1_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 25,
                    0.8, 30,
                    0.9, 35,
                    1.0, 100,
                    0.1
                ]
            },
            maxzoom: MAXZOOM
        },
        'outlines-LD'
    );

    // 2022 General: State Representative Pos. 1, precinct layer
    map.addLayer(
        {
            id: 'g2022-SRep1-precinct',
            type: 'fill',
            source: 'g2022-precinct',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'SRep1_Party_1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#dedede'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'SRep1_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 25,
                    0.8, 30,
                    0.9, 35,
                    1.0, 100,
                    0.1
                ]
            },
            minzoom: MINZOOM
        },
        'g2022-SRep1-LD'
    );

    // 2022 General: State Representative Pos. 2, LD layer
    map.addLayer(
        {
            id: 'g2022-SRep2-LD',
            type: 'fill',
            source: 'g2022-LD',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'SRep2_Party_1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#dedede'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'SRep2_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 25,
                    0.8, 30,
                    0.9, 35,
                    1.0, 100,
                    0.1
                ]
            },
            maxzoom: MAXZOOM
        },
        'outlines-LD'
    );

    // 2022 General: State Representative Pos. 2, precinct layer
    map.addLayer(
        {
            id: 'g2022-SRep2-precinct',
            type: 'fill',
            source: 'g2022-precinct',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'SRep2_Party_1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#dedede'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'SRep2_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 25,
                    0.8, 30,
                    0.9, 35,
                    1.0, 100,
                    0.1
                ]
            },
            minzoom: MINZOOM
        },
        'g2022-SRep2-LD'
    );
        

})


// Toggle layers for 2022 General Election
toggleLayer(['outlines-county', 'g2022-SoS-county', 'g2022-SoS-precinct'], 'Secretary of State');

toggleLayer(['outlines-county', 'g2022-FSen-county', 'g2022-FSen-precinct'], 'U.S. Senator');

toggleLayer(['outlines-CD', 'g2022-FRep-CD', 'g2022-FRep-precinct'], 'U.S. Representative');

toggleLayer(['outlines-LD', 'g2022-SSen-LD', 'g2022-SSen-precinct'], 'State Senator');

toggleLayer(['outlines-LD', 'g2022-SRep1-LD', 'g2022-SRep1-precinct'], 'State Representative Pos. 1');

toggleLayer(['outlines-LD', 'g2022-SRep2-LD', 'g2022-SRep2-precinct'], 'State Representative Pos. 2');

toggleLayer(['outlines-county', 'g2022-turnout-county', 'g2022-turnout-precinct'], 'Turnout');

function toggleLayer(ids, name) {
    var link = document.createElement('a');
    link.href = '#';
    link.className = '';
    link.textContent = name;

    link.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        for (layers in ids) {
            var visibility = map.getLayoutProperty(ids[layers], 'visibility');
            if (visibility === 'visible') {
                map.setLayoutProperty(ids[layers], 'visibility', 'none');
                this.className = '';
            }
            else {
                this.className = 'active';
                map.setLayoutProperty(ids[layers], 'visibility', 'visible');
            }
        }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
}



// Popup controls for 2022 General: Turnout, county layer
map.on('mouseenter', 'g2022-turnout-county', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-turnout-county', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-turnout-county', function (e) {
    var countyName = e.features[0].properties.NAMELSAD;
    countyName = countyName.toUpperCase();

    var turnout = e.features[0].properties.Total_Turnout;
    var turnoutYouth = e.features[0].properties.Youth_Turnout;
    var turnoutBIPOC = e.features[0].properties.BIPOC_Turnout;

    turnout = Math.round(turnout * 100) / 100;
    turnoutYouth = Math.round(turnoutYouth * 100) / 100;
    turnoutBIPOC = Math.round(turnoutBIPOC * 100) / 100;

    message = 
        '<h>' + countyName + '</h>'
        + '<p>Overall turnout: ' + turnout + '%</p>'
        + '<p>BIPOC turnout: ' + turnoutBIPOC + '%</p>'
        + '<p>Youth turnout: ' + turnoutYouth + '%</p>'

    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});


// Popup controls for 2022 General: Turnout, precinct layer
map.on('mouseenter', 'g2022-turnout-precinct', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-turnout-precinct', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-turnout-precinct', function (e) {
    var precinctID = e.features[0].properties.Precinct;

    precinctID = precinctID.toUpperCase();

    var turnoutOverall = e.features[0].properties.Total_Turnout;
    var turnoutYouth = e.features[0].properties.Youth_Turnout;
    var turnoutBIPOC = e.features[0].properties.BIPOC_Turnout;

    turnout = Math.round(turnoutOverall * 100) / 100;
    turnoutYouth = Math.round(turnoutYouth * 100) / 100;
    turnoutBIPOC = Math.round(turnoutBIPOC * 100) / 100;

    let message;

    if (turnoutOverall == null) {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>No data available</p>'
    }
    else {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>Overall turnout: ' + turnout + '%</p>'
        + '<p>BIPOC turnout: ' + turnoutBIPOC + '%</p>'
        + '<p>Youth turnout: ' + turnoutYouth + '%</p>'
    }
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});



// Popup controls for 2022 General: Secretary of State, county layer
map.on('mouseenter', 'g2022-SoS-county', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-SoS-county', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-SoS-county', function (e) {
    var countyName = e.features[0].properties.NAMELSAD;
    countyName = countyName.toUpperCase();

    var nameFirst = e.features[0].properties.SoS_Name_1;
    var votesFirst = e.features[0].properties.SoS_Votes_1;
    var pctFirst = e.features[0].properties.SoS_Pct_1;

    var nameSecond = e.features[0].properties.SoS_Name_2;
    var votesSecond = e.features[0].properties.SoS_Votes_2;
    var pctSecond = e.features[0].properties.SoS_Pct_2;

    var nameThird = e.features[0].properties.SoS_Name_3;
    var votesThird = e.features[0].properties.SoS_Votes_3;
    var pctThird = e.features[0].properties.SoS_Pct_3;
    
    var turnout = e.features[0].properties.Total_Turnout;

    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    let message;

    if (nameThird == 'None') {
        message = 
        '<h>' + countyName + '</h>'
        + '<p>' + nameFirst + ': ' + pctFirst + '% (' + votesFirst + ' votes)</p>'
        + '<p>' + nameSecond + ': ' + pctSecond + '% (' + votesSecond + ' votes)</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + countyName + '</h>'
        + '<p>' + nameFirst + ': ' + pctFirst + '% (' + votesFirst + ' votes)</p>'
        + '<p>' + nameSecond + ': ' + pctSecond + '% (' + votesSecond + ' votes)</p>'
        + '<p>' + nameThird + ': ' + pctThird + '% (' + votesThird + ' votes)</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    }

    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});


// Popup controls for 2022 General: Secretary of State, precinct layer
map.on('mouseenter', 'g2022-SoS-precinct', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-SoS-precinct', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-SoS-precinct', function (e) {
    var precinctID = e.features[0].properties.Precinct;

    var nameFirst = e.features[0].properties.SoS_Name_1;
    var votesFirst = e.features[0].properties.SoS_Votes_1;
    var pctFirst = e.features[0].properties.SoS_Pct_1;

    var nameSecond = e.features[0].properties.SoS_Name_2;
    var votesSecond = e.features[0].properties.SoS_Votes_2;
    var pctSecond = e.features[0].properties.SoS_Pct_2;

    var nameThird = e.features[0].properties.SoS_Name_3;
    var votesThird = e.features[0].properties.SoS_Votes_3;
    var pctThird = e.features[0].properties.SoS_Pct_3;

    precinctID = precinctID.toUpperCase();

    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    var turnout = e.features[0].properties.Total_Turnout;

    let message;

    if (nameFirst == null) {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>No data available</p>'
    }
    else if (nameThird == 'None') {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ': ' + pctFirst + '% (' + votesFirst + ' votes)</p>'
        + '<p>' + nameSecond + ': ' + pctSecond + '% (' + votesSecond + ' votes)</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ': ' + pctFirst + '% (' + votesFirst + ' votes)</p>'
        + '<p>' + nameSecond + ': ' + pctSecond + '% (' + votesSecond + ' votes)</p>'
        + '<p>' + nameThird + ': ' + pctThird + '% (' + votesThird + ' votes)</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    }
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});


// Popup controls for 2022 General: U.S. Senate, county layer
map.on('mouseenter', 'g2022-FSen-county', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-FSen-county', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-FSen-county', function (e) {
    var countyName = e.features[0].properties.NAMELSAD;
    countyName = countyName.toUpperCase();

    var nameFirst = e.features[0].properties.FSen_Name_1;
    var votesFirst = e.features[0].properties.FSen_Votes_1;
    var pctFirst = e.features[0].properties.FSen_Pct_1;

    var nameSecond = e.features[0].properties.FSen_Name_2;
    var votesSecond = e.features[0].properties.FSen_Votes_2;
    var pctSecond = e.features[0].properties.FSen_Pct_2;

    var nameThird = e.features[0].properties.FSen_Name_3;
    var votesThird = e.features[0].properties.FSen_Votes_3;
    var pctThird = e.features[0].properties.FSen_Pct_3;
    
    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    var turnout = e.features[0].properties.Total_Turnout;

    let message;

    if (nameThird == 'None') {
        message = 
        '<h>' + countyName + '</h>'
        + '<p>' + nameFirst + ': ' + pctFirst + '% (' + votesFirst + ' votes)</p>'
        + '<p>' + nameSecond + ': ' + pctSecond + '% (' + votesSecond + ' votes)</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + countyName + '</h>'
        + '<p>' + nameFirst + ': ' + pctFirst + '% (' + votesFirst + ' votes)</p>'
        + '<p>' + nameSecond + ': ' + pctSecond + '% (' + votesSecond + ' votes)</p>'
        + '<p>' + nameThird + ': ' + pctThird + '% (' + votesThird + ' votes)</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    }

    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});


// Popup controls for 2022 General: U.S. Senate, precinct layer
map.on('mouseenter', 'g2022-FSen-precinct', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-FSen-precinct', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-FSen-precinct', function (e) {
    var precinctID = e.features[0].properties.Precinct;

    var nameFirst = e.features[0].properties.FSen_Name_1;
    var votesFirst = e.features[0].properties.FSen_Votes_1;
    var pctFirst = e.features[0].properties.FSen_Pct_1;

    var nameSecond = e.features[0].properties.FSen_Name_2;
    var votesSecond = e.features[0].properties.FSen_Votes_2;
    var pctSecond = e.features[0].properties.FSen_Pct_2;

    var nameThird = e.features[0].properties.FSen_Name_3;
    var votesThird = e.features[0].properties.FSen_Votes_3;
    var pctThird = e.features[0].properties.FSen_Pct_3;

    precinctID = precinctID.toUpperCase();

    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    var turnout = e.features[0].properties.Total_Turnout;

    let message;
    if (nameFirst == null) {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>No data available</p>'
    }
    else if (nameThird == 'None') {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ': ' + pctFirst + '% (' + votesFirst + ' votes)</p>'
        + '<p>' + nameSecond + ': ' + pctSecond + '% (' + votesSecond + ' votes)</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ': ' + pctFirst + '% (' + votesFirst + ' votes)</p>'
        + '<p>' + nameSecond + ': ' + pctSecond + '% (' + votesSecond + ' votes)</p>'
        + '<p>' + nameThird + ': ' + pctThird + '% (' + votesThird + ' votes)</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    }
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});


// Popup controls for 2022 General: U.S. Representative, CD layer
map.on('mouseenter', 'g2022-FRep-CD', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-FRep-CD', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-FRep-CD', function (e) {
    var districtNumber = e.features[0].properties.DISTRICT;

    var nameFirst = e.features[0].properties.FRep_Name_1;
    var votesFirst = e.features[0].properties.FRep_Votes_1;
    var pctFirst = e.features[0].properties.FRep_Pct_1;

    var nameSecond = e.features[0].properties.FRep_Name_2;
    var votesSecond = e.features[0].properties.FRep_Votes_2;
    var pctSecond = e.features[0].properties.FRep_Pct_2;

    var nameThird = e.features[0].properties.FRep_Name_3;
    var votesThird = e.features[0].properties.FRep_Votes_3;
    var pctThird = e.features[0].properties.FRep_Pct_3;

    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    var turnout = e.features[0].properties.Total_Turnout;

    let message;

    if (nameThird == 'None') {
        message = 
        '<h>CONGRESSIONAL DISTRICT ' + districtNumber + '</h>'
        + '<p>' + nameFirst + ': ' + pctFirst + '% (' + votesFirst + ' votes)</p>'
        + '<p>' + nameSecond + ': ' + pctSecond + '% (' + votesSecond + ' votes)</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>CONGRESSIONAL DISTRICT ' + districtNumber + '</h>'
        + '<p>' + nameFirst + ': ' + pctFirst + '% (' + votesFirst + ' votes)</p>'
        + '<p>' + nameSecond + ': ' + pctSecond + '% (' + votesSecond + ' votes)</p>'
        + '<p>' + nameThird + ': ' + pctThird + '% (' + votesThird + ' votes)</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    }

    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});


// Popup controls for 2022 General: U.S. Representative, precinct layer
map.on('mouseenter', 'g2022-FRep-precinct', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-FRep-precinct', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-FRep-precinct', function (e) {
    var precinctID = e.features[0].properties.Precinct;

    var nameFirst = e.features[0].properties.FRep_Name_1;
    var votesFirst = e.features[0].properties.FRep_Votes_1;
    var pctFirst = e.features[0].properties.FRep_Pct_1;

    var nameSecond = e.features[0].properties.FRep_Name_2;
    var votesSecond = e.features[0].properties.FRep_Votes_2;
    var pctSecond = e.features[0].properties.FRep_Pct_2;

    var nameThird = e.features[0].properties.FRep_Name_3;
    var votesThird = e.features[0].properties.FRep_Votes_3;
    var pctThird = e.features[0].properties.FRep_Pct_3;

    precinctID = precinctID.toUpperCase();

    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    var turnout = e.features[0].properties.Total_Turnout;

    let message;
    if (nameFirst == null) {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>No data available</p>'
    }
    else if (nameThird == 'None') {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ': ' + pctFirst + '% (' + votesFirst + ' votes)</p>'
        + '<p>' + nameSecond + ': ' + pctSecond + '% (' + votesSecond + ' votes)</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ': ' + pctFirst + '% (' + votesFirst + ' votes)</p>'
        + '<p>' + nameSecond + ': ' + pctSecond + '% (' + votesSecond + ' votes)</p>'
        + '<p>' + nameThird + ': ' + pctThird + '% (' + votesThird + ' votes)</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    }
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});


// Popup controls for 2022 General: State Senator, LD layer
map.on('mouseenter', 'g2022-SSen-LD', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-SSen-LD', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-SSen-LD', function (e) {
    var districtNumber = e.features[0].properties.DISTRICT;

    var nameFirst = e.features[0].properties.SSen_Name_1;
    var votesFirst = e.features[0].properties.LSSen_Votes_1;
    var pctFirst = e.features[0].properties.SSen_Pct_1;

    var nameSecond = e.features[0].properties.SSen_Name_2;
    var votesSecond = e.features[0].properties.SSen_Votes_2;
    var pctSecond = e.features[0].properties.SSen_Pct_2;

    var nameThird = e.features[0].properties.SSen_Name_3;
    var votesThird = e.features[0].properties.SSen_Votes_3;
    var pctThird = e.features[0].properties.SSen_Pct_3;

    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    var turnout = e.features[0].properties.Total_Turnout;

    let message;

    if (nameFirst == null) {
        message = 
        '<h>LEGISLATIVE DISTRICT ' + districtNumber + '</h>'
        + '<p>State Senate seat not up for re-election</p>'
    }
    else if (nameThird == 'None') {
        message = 
        '<h>LEGISLATIVE DISTRICT ' + districtNumber + '</h>'
            + '<p>' + nameFirst + ': ' + pctFirst + '% (' + votesFirst + ' votes)</p>'
            + '<p>' + nameSecond + ': ' + pctSecond + '% (' + votesSecond + ' votes)</p>'
            + '<p>Voter turnout: ' + turnout + '%</p>'
    } 
    else {
        message = 
        '<h>LEGISLATIVE DISTRICT ' + districtNumber + '</h>'
            + '<p>' + nameFirst + ': ' + pctFirst + '% (' + votesFirst + ' votes)</p>'
            + '<p>' + nameSecond + ': ' + pctSecond + '% (' + votesSecond + ' votes)</p>'
            + '<p>' + nameThird + ': ' + pctThird + '% (' + votesThird + ' votes)</p>'
            + '<p>Voter turnout: ' + turnout + '%</p>'
    }

    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});


// Popup controls for 2022 General: U.S. Representative, precinct layer
map.on('mouseenter', 'g2022-SSen-precinct', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-SSen-precinct', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-SSen-precinct', function (e) {
    var precinctID = e.features[0].properties.Precinct;

    var nameFirst = e.features[0].properties.SSen_Name_1;
    var votesFirst = e.features[0].properties.SSen_Votes_1;
    var pctFirst = e.features[0].properties.SSen_Pct_1;

    var nameSecond = e.features[0].properties.SSen_Name_2;
    var votesSecond = e.features[0].properties.SSen_Votes_2;
    var pctSecond = e.features[0].properties.SSen_Pct_2;

    var nameThird = e.features[0].properties.SSen_Name_3;
    var votesThird = e.features[0].properties.SSen_Votes_3;
    var pctThird = e.features[0].properties.SSen_Pct_3;

    precinctID = precinctID.toUpperCase();

    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    var turnout = e.features[0].properties.Total_Turnout;

    let message;
    if (nameFirst == null) {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>No data available</p>'
    }
    else if (nameThird == 'None') {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ': ' + pctFirst + '% (' + votesFirst + ' votes)</p>'
        + '<p>' + nameSecond + ': ' + pctSecond + '% (' + votesSecond + ' votes)</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ': ' + pctFirst + '% (' + votesFirst + ' votes)</p>'
        + '<p>' + nameSecond + ': ' + pctSecond + '% (' + votesSecond + ' votes)</p>'
        + '<p>' + nameThird + ': ' + pctThird + '% (' + votesThird + ' votes)</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    }
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});


// Popup controls for 2022 General: State Representative Pos. 1, LD layer
map.on('mouseenter', 'g2022-SRep1-LD', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-SRep1-LD', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-SRep1-LD', function (e) {
    var districtNumber = e.features[0].properties.DISTRICT;

    var nameFirst = e.features[0].properties.SRep1_Name_1;
    var votesFirst = e.features[0].properties.SRep1_Votes_1;
    var pctFirst = e.features[0].properties.SRep1_Pct_1;

    var nameSecond = e.features[0].properties.SRep1_Name_2;
    var votesSecond = e.features[0].properties.SRep1_Votes_2;
    var pctSecond = e.features[0].properties.SRep1_Pct_2;

    var nameThird = e.features[0].properties.SRep1_Name_3;
    var votesThird = e.features[0].properties.SRep1_Votes_3;
    var pctThird = e.features[0].properties.SRep1_Pct_3;
    
    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    var turnout = e.features[0].properties.Total_Turnout;

    let message;

    if (nameThird == 'None') {
        message = 
        '<h>LEGISLATIVE DISTRICT ' + districtNumber + '</h>'
            + '<p>' + nameFirst + ': ' + pctFirst + '% (' + votesFirst + ' votes)</p>'
            + '<p>' + nameSecond + ': ' + pctSecond + '% (' + votesSecond + ' votes)</p>'
            + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>LEGISLATIVE DISTRICT ' + districtNumber + '</h>'
            + '<p>' + nameFirst + ': ' + pctFirst + '% (' + votesFirst + ' votes)</p>'
            + '<p>' + nameSecond + ': ' + pctSecond + '% (' + votesSecond + ' votes)</p>'
            + '<p>' + nameThird + ': ' + pctThird + '% (' + votesThird + ' votes)</p>'
            + '<p>Voter turnout: ' + turnout + '%</p>'
    }

    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});


// Popup controls for 2022 General: State Representative Pos. 1, precinct layer
map.on('mouseenter', 'g2022-SRep1-precinct', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-SRep1-precinct', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-SRep1-precinct', function (e) {
    var precinctID = e.features[0].properties.Precinct;

    var nameFirst = e.features[0].properties.SRep1_Name_1;
    var votesFirst = e.features[0].properties.SRep1_Votes_1;
    var pctFirst = e.features[0].properties.SRep1_Pct_1;

    var nameSecond = e.features[0].properties.SRep1_Name_2;
    var votesSecond = e.features[0].properties.SRep1_Votes_2;
    var pctSecond = e.features[0].properties.SRep1_Pct_2;

    var nameThird = e.features[0].properties.SRep1_Name_3;
    var votesThird = e.features[0].properties.SRep1_Votes_3;
    var pctThird = e.features[0].properties.SRep1_Pct_3;

    precinctID = precinctID.toUpperCase();
    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    var turnout = e.features[0].properties.Total_Turnout;

    let message;

    if (nameFirst == null) {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>No data available</p>'
    }
    else if (nameThird == 'None') {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ': ' + pctFirst + '% (' + votesFirst + ' votes)</p>'
        + '<p>' + nameSecond + ': ' + pctSecond + '% (' + votesSecond + ' votes)</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ': ' + pctFirst + '% (' + votesFirst + ' votes)</p>'
        + '<p>' + nameSecond + ': ' + pctSecond + '% (' + votesSecond + ' votes)</p>'
        + '<p>' + nameThird + ': ' + pctThird + '% (' + votesThird + ' votes)</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    }
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});


// Popup controls for 2022 General: State Representative Pos. 2, LD layer
map.on('mouseenter', 'g2022-SRep2-LD', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-SRep2-LD', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-SRep2-LD', function (e) {
    var districtNumber = e.features[0].properties.DISTRICT;

    var nameFirst = e.features[0].properties.SRep2_Name_1;
    var votesFirst = e.features[0].properties.SRep2_Votes_1;
    var pctFirst = e.features[0].properties.SRep2_Pct_1;

    var nameSecond = e.features[0].properties.SRep2_Name_2;
    var votesSecond = e.features[0].properties.SRep2_Votes_2;
    var pctSecond = e.features[0].properties.SRep2_Pct_2;

    var nameThird = e.features[0].properties.SRep2_Name_3;
    var votesThird = e.features[0].properties.SRep2_Votes_3;
    var pctThird = e.features[0].properties.SRep2_Pct_3;

    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    var turnout = e.features[0].properties.Total_Turnout;

    let message;

    if (nameThird == 'None') {
        message = 
        '<h>LEGISLATIVE DISTRICT ' + districtNumber + '</h>'
            + '<p>' + nameFirst + ': ' + pctFirst + '% (' + votesFirst + ' votes)</p>'
            + '<p>' + nameSecond + ': ' + pctSecond + '% (' + votesSecond + ' votes)</p>'
            + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>LEGISLATIVE DISTRICT ' + districtNumber + '</h>'
            + '<p>' + nameFirst + ': ' + pctFirst + '% (' + votesFirst + ' votes)</p>'
            + '<p>' + nameSecond + ': ' + pctSecond + '% (' + votesSecond + ' votes)</p>'
            + '<p>' + nameThird + ': ' + pctThird + '% (' + votesThird + ' votes)</p>'
            + '<p>Voter turnout: ' + turnout + '%</p>'
    }

    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});


// Popup controls for 2022 General: State Representative Pos. 2, precinct layer
map.on('mouseenter', 'g2022-SRep2-precinct', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-SRep2-precinct', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-SRep2-precinct', function (e) {
    var precinctID = e.features[0].properties.Precinct;

    var nameFirst = e.features[0].properties.SRep2_Name_1;
    var votesFirst = e.features[0].properties.SRep2_Votes_1;
    var pctFirst = e.features[0].properties.SRep2_Pct_1;

    var nameSecond = e.features[0].properties.SRep2_Name_2;
    var votesSecond = e.features[0].properties.SRep2_Votes_2;
    var pctSecond = e.features[0].properties.SRep2_Pct_2;

    var nameThird = e.features[0].properties.SRep2_Name_3;
    var votesThird = e.features[0].properties.SRep2_Votes_3;
    var pctThird = e.features[0].properties.SRep2_Pct_3;

    precinctID = precinctID.toUpperCase();

    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    var turnout = e.features[0].properties.Total_Turnout;

    let message;

    if (nameFirst == null) {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>No data available</p>'
    }
    else if (nameThird == 'None') {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ': ' + pctFirst + '% (' + votesFirst + ' votes)</p>'
        + '<p>' + nameSecond + ': ' + pctSecond + '% (' + votesSecond + ' votes)</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ': ' + pctFirst + '% (' + votesFirst + ' votes)</p>'
        + '<p>' + nameSecond + ': ' + pctSecond + '% (' + votesSecond + ' votes)</p>'
        + '<p>' + nameThird + ': ' + pctThird + '% (' + votesThird + ' votes)</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    }
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});








