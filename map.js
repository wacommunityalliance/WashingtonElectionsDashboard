
mapboxgl.accessToken = 'pk.eyJ1IjoidGltb25lYWwiLCJhIjoiY2xjZm04YW5yMGFnYTNvcG1pZTNicGU2diJ9.eYwXLLfgApOlhZbiYYTWAA';
var map = new mapboxgl.Map(
    {
        container: 'map',
        style: 'mapbox://styles/timoneal/cld3l5xw2000001pa86676qrk',
        projection: 'mercator',
        zoom: 6.5,
        center: [-121.436571, 47.021330],
        maxZoom: 15,
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

    // Washington County outlines
    map.addLayer(
        {
            id: 'outlines-county',
            type: 'line',
            source: 'g2022-county',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'line-color': '#000',
                'line-width': 1.25
            }
        }
    );

     // Washington County boundaries
     map.addLayer(
        {
            id: 'boundaries-county',
            type: 'line',
            source: 'g2022-county',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'line-color': '#000',
                'line-width': 1.25
            }
        }
    );

    // Washington Congressional District outlines
    map.addLayer(
        {
            id: 'outlines-CD',
            type: 'line',
            source: 'g2022-CD',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'line-color': '#000',
                'line-width': 1.25
            }
        }
    );

    // Washington Congressional District boundaries
    map.addLayer(
        {
            id: 'boundaries-CD',
            type: 'line',
            source: 'g2022-CD',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'line-color': '#000',
                'line-width': 1.25
            }
        }
    );

    // Washington Legislative District outlines
    map.addLayer(
        {
            id: 'outlines-LD',
            type: 'line',
            source: 'g2022-LD',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'line-color': '#000',
                'line-width': 1.25
            }
        }
    );

     // Washington Legislative District boundaries
     map.addLayer(
        {
            id: 'boundaries-LD',
            type: 'line',
            source: 'g2022-LD',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'line-color': '#000',
                'line-width': 1.25
            }
        }
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
                    0.7, 30,
                    0.8
                ]
            },
            maxzoom: MAXZOOM
        },
        'waterway-label'
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
                    0.7, 101,
                    0
                ]
            },
            minzoom: MINZOOM
        },
        'waterway-label'
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
                    0.7, 30,
                    0.8
                ]
            },
            maxzoom: MAXZOOM
        },
        'waterway-label'
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
                    0.7, 101,
                    0
                ]
            },
            minzoom: MINZOOM
        },
        'waterway-label'
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
                    0.7, 30,
                    0.8
                ]
            },
            maxzoom: MAXZOOM
        },
        'waterway-label'
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
                    0.7, 101,
                    0
                ]
            },
            minzoom: MINZOOM
        },
        'waterway-label'
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
                    'case',
                    ['==', ['get', 'SSen_Margin'], null],
                    0,
                    ['step',
                    ['get', 'SSen_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 101,
                    0]
                ],
            },
            maxzoom: MAXZOOM
        },
        'waterway-label'
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
                    'Other', '#4abfaa',
                    'Democratic2', '#9398bb',
                    'Republican2', '#f37021',
                    'Independent2', '#4abfaa',
                    'Other2', '#fdb614',
                    '#dedede'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'case',
                    ['==', ['get', 'SSen_Margin'], null],
                    0,
                    ['step',
                    ['get', 'SSen_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 101,
                    1]
                ]
            },
            minzoom: MINZOOM
        },
        'waterway-label'
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
                    0.7, 30,
                    0.8
                ]
            },
            maxzoom: MAXZOOM
        },
        'waterway-label'
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
                    'Other', '#4abfaa',
                    'Democratic2', '#9398bb',
                    'Republican2', '#f37021',
                    'Independent2', '#4abfaa',
                    'Other2', '#fdb614',
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
                    0.7, 101,
                    0
                ]
            },
            minzoom: MINZOOM
        },
        'waterway-label'
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
                    0.7, 30,
                    0.8
                ]
            },
            maxzoom: MAXZOOM
        },
        'waterway-label'
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
                    'Other', '#4abfaa',
                    'Democratic2', '#9398bb',
                    'Republican2', '#f37021',
                    'Independent2', '#4abfaa',
                    'Other2', '#fdb614',
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
                    0.7, 101,
                    0
                ]
            },
            minzoom: MINZOOM
        },
        'waterway-label'
    );
        
    // 2022 General: County Assessor, County layer
    map.addLayer(
        {
            id: 'g2022-CAss-county',
            type: 'fill',
            source: 'g2022-county',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'CAss_Party_1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#9398bb',
                    'None', '#9398bb',
                    '#dedede'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'case',
                    ['==', ['get', 'CAss_Margin'], null],
                    0,
                    ['step',
                    ['get', 'CAss_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 101,
                    0]
                ]
            },
            maxzoom: MAXZOOM
        },
        'waterway-label'
    );

    // 2022 General: County Assessor, precinct layer
    map.addLayer(
        {
            id: 'g2022-CAss-precinct',
            type: 'fill',
            source: 'g2022-precinct',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'CAss_Party_1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#4abfaa',
                    'None', '#9398bb',
                    'Democratic2', '#9398bb',
                    'Republican2', '#f37021',
                    'Independent2', '#4abfaa',
                    'Other2', '#9398bb',
                    'None2', '#4abfaa',
                    '#dedede'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'case',
                    ['==', ['get', 'CAss_Margin'], null],
                    0,
                    ['step',
                    ['get', 'CAss_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 101,
                    0]
                ]
            },
            minzoom: MINZOOM
        },
        'waterway-label'
    );

    // 2022 General: County Auditor, County layer
    map.addLayer(
        {
            id: 'g2022-CAud-county',
            type: 'fill',
            source: 'g2022-county',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'CAud_Party_1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#9398bb',
                    'None', '#9398bb',
                    '#dedede'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'case',
                    ['==', ['get', 'CAud_Margin'], null],
                    0,
                    ['step',
                    ['get', 'CAud_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 100,
                    0]
                ]
            },
            maxzoom: MAXZOOM
        },
        'waterway-label'
    );

    // 2022 General: County Auditor, precinct layer
    map.addLayer(
        {
            id: 'g2022-CAud-precinct',
            type: 'fill',
            source: 'g2022-precinct',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'CAud_Party_1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#4abfaa',
                    'None', '#9398bb',
                    'Democratic2', '#9398bb',
                    'Republican2', '#f37021',
                    'Independent2', '#4abfaa',
                    'Other2', '#9398bb',
                    'None2', '#4abfaa',
                    '#dedede'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'case',
                    ['==', ['get', 'CAud_Margin'], null],
                    0,
                    ['step',
                    ['get', 'CAud_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 101,
                    0]
                ]
            },
            minzoom: MINZOOM
        },
        'waterway-label'
    );

    // 2022 General: County Clerk, County layer
    map.addLayer(
        {
            id: 'g2022-CCler-county',
            type: 'fill',
            source: 'g2022-county',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'case',
                    ['match',
                    ['get', 'CCler_Party_1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#9398bb',
                    'None', '#9398bb',
                    '#dedede']
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'case',
                    ['==', ['get', 'CCler_Margin'], null],
                    0,
                    ['step',
                    ['get', 'CCler_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 101,
                    0]
                ]
            },
            maxzoom: MAXZOOM
        },
        'waterway-label'
    );

    // 2022 General: County Clerk, precinct layer
    map.addLayer(
        {
            id: 'g2022-CCler-precinct',
            type: 'fill',
            source: 'g2022-precinct',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'CCler_Party_1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#4abfaa',
                    'None', '#9398bb',
                    'Democratic2', '#9398bb',
                    'Republican2', '#f37021',
                    'Independent2', '#4abfaa',
                    'Other2', '#9398bb',
                    'None2', '#4abfaa',
                    '#dedede'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'case',
                    ['==', ['get', 'CCler_Margin'], null],
                    0,
                    ['step',
                    ['get', 'CCler_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 101,
                    0]
                ]
            },
            minzoom: MINZOOM
        },
        'waterway-label'
    );
    
    // 2022 General: County Prosecutor, County layer
    map.addLayer(
        {
            id: 'g2022-CPros-county',
            type: 'fill',
            source: 'g2022-county',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'CPros_Party_1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#9398bb',
                    'None', '#9398bb',
                    '#dedede'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'case',
                    ['==', ['get', 'CPros_Margin'], null],
                    0,
                    ['step',
                    ['get', 'CPros_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 100,
                    0]
                ]
            },
            maxzoom: MAXZOOM
        },
        'waterway-label'
    );

    // 2022 General: County Prosecutor, precinct layer
    map.addLayer(
        {
            id: 'g2022-CPros-precinct',
            type: 'fill',
            source: 'g2022-precinct',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'CPros_Party_1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#4abfaa',
                    'None', '#9398bb',
                    'Democratic2', '#9398bb',
                    'Republican2', '#f37021',
                    'Independent2', '#4abfaa',
                    'Other2', '#9398bb',
                    'None2', '#4abfaa',
                    '#dedede'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'case',
                    ['==', ['get', 'CPros_Margin'], null],
                    0,
                    ['step',
                    ['get', 'CPros_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 101,
                    0]
                ]
            },
            minzoom: MINZOOM
        },
        'waterway-label'
    );

    // 2022 General: County Sheriff, County layer
    map.addLayer(
        {
            id: 'g2022-CSher-county',
            type: 'fill',
            source: 'g2022-county',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'CSher_Party_1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#9398bb',
                    'None', '#9398bb',
                    '#dedede'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'case',
                    ['==', ['get', 'CSher_Margin'], null],
                    0,
                    ['step',
                    ['get', 'CSher_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 101,
                    0]
                ]
            },
            maxzoom: MAXZOOM
        },
        'waterway-label'
    );

    // 2022 General: County Sheriff, precinct layer
    map.addLayer(
        {
            id: 'g2022-CSher-precinct',
            type: 'fill',
            source: 'g2022-precinct',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'CSher_Party_1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#4abfaa',
                    'None', '#9398bb',
                    'Democratic2', '#9398bb',
                    'Republican2', '#f37021',
                    'Independent2', '#4abfaa',
                    'Other2', '#9398bb',
                    'None2', '#4abfaa',
                    '#dedede'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'case',
                    ['==', ['get', 'CSher_Margin'], null],
                    0,
                    ['step',
                    ['get', 'CSher_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 101,
                    0]
                ]
            },
            minzoom: MINZOOM
        },
        'waterway-label'
    );

    // 2022 General: County Treasurer, County layer
    map.addLayer(
        {
            id: 'g2022-CTre-county',
            type: 'fill',
            source: 'g2022-county',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'CTre_Party_1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#9398bb',
                    'None', '#9398bb',
                    '#dedede'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'case',
                    ['==', ['get', 'CTre_Margin'], null],
                    0,
                    ['step',
                    ['get', 'CTre_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 25,
                    0.8, 101,
                    0]
                ]
            },
            maxzoom: MAXZOOM
        },
        'waterway-label'
    );

    // 2022 General: County Treasurer, precinct layer
    map.addLayer(
        {
            id: 'g2022-CTre-precinct',
            type: 'fill',
            source: 'g2022-precinct',
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'CTre_Party_1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#4abfaa',
                    'None', '#9398bb',
                    'Democratic2', '#9398bb',
                    'Republican2', '#f37021',
                    'Independent2', '#4abfaa',
                    'Other2', '#9398bb',
                    'None2', '#4abfaa',
                    '#dedede'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'case',
                    ['==', ['get', 'CTre_Margin'], null],
                    0,
                    ['step',
                    ['get', 'CTre_Margin'],
                    0.1, 2.5,
                    0.2, 5,
                    0.3, 7.5,
                    0.4, 10,
                    0.5, 15,
                    0.6, 20,
                    0.7, 25,
                    0.8, 101,
                    0]
                ]
            },
            minzoom: MINZOOM
        },
        'waterway-label'
    );

})


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
    var partyFirst = e.features[0].properties.SoS_Party_1;

    var nameSecond = e.features[0].properties.SoS_Name_2;
    var votesSecond = e.features[0].properties.SoS_Votes_2;
    var pctSecond = e.features[0].properties.SoS_Pct_2;
    var partySecond = e.features[0].properties.SoS_Party_2;

    var nameThird = e.features[0].properties.SoS_Name_3;
    var votesThird = e.features[0].properties.SoS_Votes_3;
    var pctThird = e.features[0].properties.SoS_Pct_3;
    
    var turnout = e.features[0].properties.Total_Turnout;
    var totalVotes = e.features[0].properties.SoS_Votes_total;

    partyFirst = partyFirst.charAt(0);
    partySecond = partySecond.charAt(0);

    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    let message;

    if (nameThird == 'None') {
        message = 
        '<h>' + countyName + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + countyName + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p>' + nameThird + ': ' + votesThird + ' votes (' + pctThird + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
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
    var partyFirst = e.features[0].properties.SoS_Party_1;

    var nameSecond = e.features[0].properties.SoS_Name_2;
    var votesSecond = e.features[0].properties.SoS_Votes_2;
    var pctSecond = e.features[0].properties.SoS_Pct_2;
    var partySecond = e.features[0].properties.SoS_Party_2;

    var nameThird = e.features[0].properties.SoS_Name_3;
    var votesThird = e.features[0].properties.SoS_Votes_3;
    var pctThird = e.features[0].properties.SoS_Pct_3;

    var turnout = e.features[0].properties.Total_Turnout;
    var totalVotes = e.features[0].properties.SoS_Votes_total;

    partyFirst = partyFirst.charAt(0);
    partySecond = partySecond.charAt(0);

    precinctID = precinctID.toUpperCase();

    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    let message;

    if (nameFirst == null) {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>No data available</p>'
    }
    else if (nameThird == 'None') {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p>' + nameThird + ': ' + votesThird + ' votes (' + pctThird + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
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
    var partyFirst = e.features[0].properties.FSen_Party_1;

    var nameSecond = e.features[0].properties.FSen_Name_2;
    var votesSecond = e.features[0].properties.FSen_Votes_2;
    var pctSecond = e.features[0].properties.FSen_Pct_2;
    var partySecond = e.features[0].properties.FSen_Party_2;

    var nameThird = e.features[0].properties.FSen_Name_3;
    var votesThird = e.features[0].properties.FSen_Votes_3;
    var pctThird = e.features[0].properties.FSen_Pct_3;
    
    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    var turnout = e.features[0].properties.Total_Turnout;
    var totalVotes = e.features[0].properties.FSen_Votes_total;

    partyFirst = partyFirst.charAt(0);
    partySecond = partySecond.charAt(0);

    let message;

    if (nameThird == 'None') {
        message = 
        '<h>' + countyName + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + countyName + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p>' + nameThird + ': ' + votesThird + ' votes (' + pctThird + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
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
    precinctID = precinctID.toUpperCase();

    var nameFirst = e.features[0].properties.FSen_Name_1;
    var votesFirst = e.features[0].properties.FSen_Votes_1;
    var pctFirst = e.features[0].properties.FSen_Pct_1;
    var partyFirst = e.features[0].properties.FSen_Party_1;

    var nameSecond = e.features[0].properties.FSen_Name_2;
    var votesSecond = e.features[0].properties.FSen_Votes_2;
    var pctSecond = e.features[0].properties.FSen_Pct_2;
    var partySecond = e.features[0].properties.FSen_Party_2;

    var nameThird = e.features[0].properties.FSen_Name_3;
    var votesThird = e.features[0].properties.FSen_Votes_3;
    var pctThird = e.features[0].properties.FSen_Pct_3;
    
    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    var turnout = e.features[0].properties.Total_Turnout;
    var totalVotes = e.features[0].properties.FSen_Votes_total;

    partyFirst = partyFirst.charAt(0);
    partySecond = partySecond.charAt(0);

    let message;

    if (nameFirst == null) {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>No data available</p>'
    }
    else if (nameThird == 'None') {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p>' + nameThird + ': ' + votesThird + ' votes (' + pctThird + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
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
    var districtNumber = e.features[0].properties.CD;

    var nameFirst = e.features[0].properties.FRep_Name_1;
    var votesFirst = e.features[0].properties.FRep_Votes_1;
    var pctFirst = e.features[0].properties.FRep_Pct_1;
    var partyFirst = e.features[0].properties.FRep_Party_1;

    var nameSecond = e.features[0].properties.FRep_Name_2;
    var votesSecond = e.features[0].properties.FRep_Votes_2;
    var pctSecond = e.features[0].properties.FRep_Pct_2;
    var partySecond = e.features[0].properties.FRep_Party_2;

    var nameThird = e.features[0].properties.FRep_Name_3;
    var votesThird = e.features[0].properties.FRep_Votes_3;
    var pctThird = e.features[0].properties.FRep_Pct_3;

    var turnout = e.features[0].properties.Total_Turnout;
    var totalVotes = e.features[0].properties.FRep_Votes_total;

    partyFirst = partyFirst.charAt(0);
    partySecond = partySecond.charAt(0);

    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    let message;

    if (nameThird == 'None') {
        message = 
        '<h>CONGRESSIONAL DISTRICT ' + districtNumber + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>CONGRESSIONAL DISTRICT ' + districtNumber + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p>' + nameThird + ': ' + votesThird + ' votes (' + pctThird + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
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
    var partyFirst = e.features[0].properties.FRep_Party_1;

    var nameSecond = e.features[0].properties.FRep_Name_2;
    var votesSecond = e.features[0].properties.FRep_Votes_2;
    var pctSecond = e.features[0].properties.FRep_Pct_2;
    var partySecond = e.features[0].properties.FRep_Party_2;

    var nameThird = e.features[0].properties.FRep_Name_3;
    var votesThird = e.features[0].properties.FRep_Votes_3;
    var pctThird = e.features[0].properties.FRep_Pct_3;

    var turnout = e.features[0].properties.Total_Turnout;
    var totalVotes = e.features[0].properties.FRep_Votes_total;

    partyFirst = partyFirst.charAt(0);
    partySecond = partySecond.charAt(0);

    precinctID = precinctID.toUpperCase();

    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    let message;

    if (nameFirst == null) {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>No data available</p>'
    }
    else if (nameThird == 'None') {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p>' + nameThird + ': ' + votesThird + ' votes (' + pctThird + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
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
    var districtNumber = e.features[0].properties.LD;

    var nameFirst = e.features[0].properties.SSen_Name_1;
    var votesFirst = e.features[0].properties.SSen_Votes_1;
    var pctFirst = e.features[0].properties.SSen_Pct_1;
    var partyFirst = e.features[0].properties.SSen_Party_1;

    var nameSecond = e.features[0].properties.SSen_Name_2;
    var votesSecond = e.features[0].properties.SSen_Votes_2;
    var pctSecond = e.features[0].properties.SSen_Pct_2;
    var partySecond = e.features[0].properties.SSen_Party_2;

    var nameThird = e.features[0].properties.SSen_Name_3;
    var votesThird = e.features[0].properties.SSen_Votes_3;
    var pctThird = e.features[0].properties.SSen_Pct_3;

    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    var turnout = e.features[0].properties.Total_Turnout;
    var totalVotes = e.features[0].properties.SSen_Votes_total;

    partyFirst = partyFirst.charAt(0);
    partySecond = partySecond.charAt(0);

    let message;

    if (nameFirst === null) {
        message = 
        '<h>LEGISLATIVE DISTRICT ' + districtNumber + '</h>'
        + '<p>State Senate seat not up for re-election</p>'
    }
    else if (nameThird == 'None') {
        message = 
        '<h>LEGISLATIVE DISTRICT ' + districtNumber + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } 
    else {
        message = 
        '<h>LEGISLATIVE DISTRICT ' + districtNumber + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p>' + nameThird + ': ' + votesThird + ' votes (' + pctThird + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    }

    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});


// Popup controls for 2022 General: State Senator, precinct layer
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
    var partyFirst = e.features[0].properties.SSen_Party_1;

    var nameSecond = e.features[0].properties.SSen_Name_2;
    var votesSecond = e.features[0].properties.SSen_Votes_2;
    var pctSecond = e.features[0].properties.SSen_Pct_2;
    var partySecond = e.features[0].properties.SSen_Party_2;

    var nameThird = e.features[0].properties.SSen_Name_3;
    var votesThird = e.features[0].properties.SSen_Votes_3;
    var pctThird = e.features[0].properties.SSen_Pct_3;

    var turnout = e.features[0].properties.Total_Turnout;
    var totalVotes = e.features[0].properties.SSen_Votes_total;

    precinctID = precinctID.toUpperCase();
    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;
    partyFirst = partyFirst.charAt(0);
    partySecond = partySecond.charAt(0);

    let message;

    if (nameFirst == null) {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>No data available</p>'
    }
    else if (nameThird == 'None') {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p>' + nameThird + ': ' + votesThird + ' votes (' + pctThird + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
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
    var districtNumber = e.features[0].properties.LD;

    var nameFirst = e.features[0].properties.SRep1_Name_1;
    var votesFirst = e.features[0].properties.SRep1_Votes_1;
    var pctFirst = e.features[0].properties.SRep1_Pct_1;
    var partyFirst = e.features[0].properties.SRep1_Party_1;

    var nameSecond = e.features[0].properties.SRep1_Name_2;
    var votesSecond = e.features[0].properties.SRep1_Votes_2;
    var pctSecond = e.features[0].properties.SRep1_Pct_2;
    var partySecond = e.features[0].properties.SRep1_Party_2;

    var nameThird = e.features[0].properties.SRep1_Name_3;
    var votesThird = e.features[0].properties.SRep1_Votes_3;
    var pctThird = e.features[0].properties.SRep1_Pct_3;
    
    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    var turnout = e.features[0].properties.Total_Turnout;
    var totalVotes = e.features[0].properties.SRep1_Votes_total;

    partyFirst = partyFirst.charAt(0);
    partySecond = partySecond.charAt(0);

    let message;

    if (nameThird == 'None') {
        message = 
        '<h>LEGISLATIVE DISTRICT ' + districtNumber + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>LEGISLATIVE DISTRICT ' + districtNumber + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p>' + nameThird + ': ' + votesThird + ' votes (' + pctThird + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
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
    var partyFirst = e.features[0].properties.SRep1_Party_1;

    var nameSecond = e.features[0].properties.SRep1_Name_2;
    var votesSecond = e.features[0].properties.SRep1_Votes_2;
    var pctSecond = e.features[0].properties.SRep1_Pct_2;
    var partySecond = e.features[0].properties.SRep1_Party_2;

    var nameThird = e.features[0].properties.SRep1_Name_3;
    var votesThird = e.features[0].properties.SRep1_Votes_3;
    var pctThird = e.features[0].properties.SRep1_Pct_3;

    var turnout = e.features[0].properties.Total_Turnout;
    var totalVotes = e.features[0].properties.SRep1_Votes_total;

    precinctID = precinctID.toUpperCase();
    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;
    partyFirst = partyFirst.charAt(0);
    partySecond = partySecond.charAt(0);

    let message;

    if (nameFirst == null) {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>No data available</p>'
    }
    else if (nameThird == 'None') {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p>' + nameThird + ': ' + votesThird + ' votes (' + pctThird + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
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
    var districtNumber = e.features[0].properties.LD;

    var nameFirst = e.features[0].properties.SRep2_Name_1;
    var votesFirst = e.features[0].properties.SRep2_Votes_1;
    var pctFirst = e.features[0].properties.SRep2_Pct_1;
    var partyFirst = e.features[0].properties.SRep2_Party_1;

    var nameSecond = e.features[0].properties.SRep2_Name_2;
    var votesSecond = e.features[0].properties.SRep2_Votes_2;
    var pctSecond = e.features[0].properties.SRep2_Pct_2;
    var partySecond = e.features[0].properties.SRep2_Party_2;

    var nameThird = e.features[0].properties.SRep2_Name_3;
    var votesThird = e.features[0].properties.SRep2_Votes_3;
    var pctThird = e.features[0].properties.SRep2_Pct_3;

    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    var turnout = e.features[0].properties.Total_Turnout;
    var totalVotes = e.features[0].properties.SRep2_Votes_total;

    partyFirst = partyFirst.charAt(0);
    partySecond = partySecond.charAt(0);

    let message;

    if (nameThird == 'None') {
        message = 
        '<h>LEGISLATIVE DISTRICT ' + districtNumber + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>LEGISLATIVE DISTRICT ' + districtNumber + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p>' + nameThird + ': ' + votesThird + ' votes (' + pctThird + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
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
    var partyFirst = e.features[0].properties.SRep2_Party_1;

    var nameSecond = e.features[0].properties.SRep2_Name_2;
    var votesSecond = e.features[0].properties.SRep2_Votes_2;
    var pctSecond = e.features[0].properties.SRep2_Pct_2;
    var partySecond = e.features[0].properties.SRep2_Party_2;

    var nameThird = e.features[0].properties.SRep2_Name_3;
    var votesThird = e.features[0].properties.SRep2_Votes_3;
    var pctThird = e.features[0].properties.SRep2_Pct_3;

    var turnout = e.features[0].properties.Total_Turnout;
    var totalVotes = e.features[0].properties.SRep2_Votes_total;

    precinctID = precinctID.toUpperCase();
    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;
    partyFirst = partyFirst.charAt(0);
    partySecond = partySecond.charAt(0);

    let message;

    if (nameFirst == null) {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>No data available</p>'
    }
    else if (nameThird == 'None') {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p>' + nameThird + ': ' + votesThird + ' votes (' + pctThird + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    }
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});


// Popup controls for 2022 General: County Assessor, county layer
map.on('mouseenter', 'g2022-CAss-county', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-CAss-county', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-CAss-county', function (e) {
    var countyName = e.features[0].properties.NAMELSAD;
    countyName = countyName.toUpperCase();

    var nameFirst = e.features[0].properties.CAss_Name_1;
    var votesFirst = e.features[0].properties.CAss_Votes_1;
    var pctFirst = e.features[0].properties.CAss_Pct_1;
    var partyFirst = e.features[0].properties.CAss_Party_1;

    var nameSecond = e.features[0].properties.CAss_Name_2;
    var votesSecond = e.features[0].properties.CAss_Votes_2;
    var pctSecond = e.features[0].properties.CAss_Pct_2;
    var partySecond = e.features[0].properties.CAss_Party_2;

    var nameThird = e.features[0].properties.CAss_Name_3;
    var votesThird = e.features[0].properties.CAss_Votes_3;
    var pctThird = e.features[0].properties.CAss_Pct_3;
    
    var turnout = e.features[0].properties.Total_Turnout;
    var totalVotes = e.features[0].properties.CAss_Votes_total;

    partyFirst = partyFirst.charAt(0);
    partySecond = partySecond.charAt(0);

    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    let message;

    if (nameThird == 'None') {
        message = 
        '<h>' + countyName + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + countyName + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p>' + nameThird + ': ' + votesThird + ' votes (' + pctThird + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    }

    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});


// Popup controls for 2022 General: County Assessor, precinct layer
map.on('mouseenter', 'g2022-CAss-precinct', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-CAss-precinct', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-CAss-precinct', function (e) {
    var precinctID = e.features[0].properties.Precinct;

    var nameFirst = e.features[0].properties.CAss_Name_1;
    var votesFirst = e.features[0].properties.CAss_Votes_1;
    var pctFirst = e.features[0].properties.CAss_Pct_1;
    var partyFirst = e.features[0].properties.CAss_Party_1;

    var nameSecond = e.features[0].properties.CAss_Name_2;
    var votesSecond = e.features[0].properties.CAss_Votes_2;
    var pctSecond = e.features[0].properties.CAss_Pct_2;
    var partySecond = e.features[0].properties.CAss_Party_2;

    var nameThird = e.features[0].properties.CAss_Name_3;
    var votesThird = e.features[0].properties.CAss_Votes_3;
    var pctThird = e.features[0].properties.CAss_Pct_3;

    var turnout = e.features[0].properties.Total_Turnout;
    var totalVotes = e.features[0].properties.CAss_Votes_total;

    partyFirst = partyFirst.charAt(0);
    partySecond = partySecond.charAt(0);

    precinctID = precinctID.toUpperCase();

    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    let message;

    if (nameFirst == null) {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>No data available</p>'
    }
    else if (nameThird == 'None') {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p>' + nameThird + ': ' + votesThird + ' votes (' + pctThird + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    }
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});



// Popup controls for 2022 General: County Auditor, county layer
map.on('mouseenter', 'g2022-CAud-county', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-CAud-county', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-CAud-county', function (e) {
    var countyName = e.features[0].properties.NAMELSAD;
    countyName = countyName.toUpperCase();

    var nameFirst = e.features[0].properties.CAud_Name_1;
    var votesFirst = e.features[0].properties.CAud_Votes_1;
    var pctFirst = e.features[0].properties.CAud_Pct_1;
    var partyFirst = e.features[0].properties.CAud_Party_1;

    var nameSecond = e.features[0].properties.CAud_Name_2;
    var votesSecond = e.features[0].properties.CAud_Votes_2;
    var pctSecond = e.features[0].properties.CAud_Pct_2;
    var partySecond = e.features[0].properties.CAud_Party_2;

    var nameThird = e.features[0].properties.CAud_Name_3;
    var votesThird = e.features[0].properties.CAud_Votes_3;
    var pctThird = e.features[0].properties.CAud_Pct_3;
    
    var turnout = e.features[0].properties.Total_Turnout;
    var totalVotes = e.features[0].properties.CAud_Votes_total;

    partyFirst = partyFirst.charAt(0);
    partySecond = partySecond.charAt(0);

    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    let message;

    if (nameThird == 'None') {
        message = 
        '<h>' + countyName + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + countyName + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p>' + nameThird + ': ' + votesThird + ' votes (' + pctThird + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    }

    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});


// Popup controls for 2022 General: County Auditor, precinct layer
map.on('mouseenter', 'g2022-CAud-precinct', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-CAud-precinct', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-CAud-precinct', function (e) {
    var precinctID = e.features[0].properties.Precinct;

    var nameFirst = e.features[0].properties.CAud_Name_1;
    var votesFirst = e.features[0].properties.CAud_Votes_1;
    var pctFirst = e.features[0].properties.CAud_Pct_1;
    var partyFirst = e.features[0].properties.CAud_Party_1;

    var nameSecond = e.features[0].properties.CAud_Name_2;
    var votesSecond = e.features[0].properties.CAud_Votes_2;
    var pctSecond = e.features[0].properties.CAud_Pct_2;
    var partySecond = e.features[0].properties.CAud_Party_2;

    var nameThird = e.features[0].properties.CAud_Name_3;
    var votesThird = e.features[0].properties.CAud_Votes_3;
    var pctThird = e.features[0].properties.CAud_Pct_3;
    
    var turnout = e.features[0].properties.Total_Turnout;
    var totalVotes = e.features[0].properties.CAud_Votes_total;

    precinctID = precinctID.toUpperCase();
    partyFirst = partyFirst.charAt(0);
    partySecond = partySecond.charAt(0);
    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;


    let message;

    if (nameFirst == null) {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>No data available</p>'
    }
    else if (nameThird == 'None') {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p>' + nameThird + ': ' + votesThird + ' votes (' + pctThird + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    }
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});



// Popup controls for 2022 General: County Clerk, county layer
map.on('mouseenter', 'g2022-CCler-county', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-CCler-county', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-CCler-county', function (e) {
    var countyName = e.features[0].properties.NAMELSAD;

    var nameFirst = e.features[0].properties.CCler_Name_1;
    var votesFirst = e.features[0].properties.CCler_Votes_1;
    var pctFirst = e.features[0].properties.CCler_Pct_1;
    var partyFirst = e.features[0].properties.CCler_Party_1;

    var nameSecond = e.features[0].properties.CCler_Name_2;
    var votesSecond = e.features[0].properties.CCler_Votes_2;
    var pctSecond = e.features[0].properties.CCler_Pct_2;
    var partySecond = e.features[0].properties.CCler_Party_2;

    var nameThird = e.features[0].properties.CCler_Name_3;
    var votesThird = e.features[0].properties.CCler_Votes_3;
    var pctThird = e.features[0].properties.CCler_Pct_3;
    
    var turnout = e.features[0].properties.Total_Turnout;
    var totalVotes = e.features[0].properties.CCler_Votes_total;

    countyName = countyName.toUpperCase();
    partyFirst = partyFirst.charAt(0);
    partySecond = partySecond.charAt(0);
    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    let message;

    if (nameThird == 'None') {
        message = 
        '<h>' + countyName + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + countyName + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p>' + nameThird + ': ' + votesThird + ' votes (' + pctThird + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    }

    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});


// Popup controls for 2022 General: County Clerk, precinct layer
map.on('mouseenter', 'g2022-CCler-precinct', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-CCler-precinct', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-CCler-precinct', function (e) {
    var precinctID = e.features[0].properties.Precinct;

    var nameFirst = e.features[0].properties.CCler_Name_1;
    var votesFirst = e.features[0].properties.CCler_Votes_1;
    var pctFirst = e.features[0].properties.CCler_Pct_1;
    var partyFirst = e.features[0].properties.CCler_Party_1;

    var nameSecond = e.features[0].properties.CCler_Name_2;
    var votesSecond = e.features[0].properties.CCler_Votes_2;
    var pctSecond = e.features[0].properties.CCler_Pct_2;
    var partySecond = e.features[0].properties.CCler_Party_2;

    var nameThird = e.features[0].properties.CCler_Name_3;
    var votesThird = e.features[0].properties.CCler_Votes_3;
    var pctThird = e.features[0].properties.CCler_Pct_3;
    
    var turnout = e.features[0].properties.Total_Turnout;
    var totalVotes = e.features[0].properties.CCler_Votes_total;

    precinctID = precinctID.toUpperCase();
    partyFirst = partyFirst.charAt(0);
    partySecond = partySecond.charAt(0);
    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    let message;

   if (nameFirst == null) {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>No data available</p>'
    }
    else if (nameThird == 'None') {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p>' + nameThird + ': ' + votesThird + ' votes (' + pctThird + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    }
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});



// Popup controls for 2022 General: County Prosecutor, county layer
map.on('mouseenter', 'g2022-CPros-county', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-CPros-county', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-CPros-county', function (e) {
    var countyName = e.features[0].properties.NAMELSAD;

    var nameFirst = e.features[0].properties.CPros_Name_1;
    var votesFirst = e.features[0].properties.CPros_Votes_1;
    var pctFirst = e.features[0].properties.CPros_Pct_1;
    var partyFirst = e.features[0].properties.CPros_Party_1;

    var nameSecond = e.features[0].properties.CPros_Name_2;
    var votesSecond = e.features[0].properties.CPros_Votes_2;
    var pctSecond = e.features[0].properties.CPros_Pct_2;
    var partySecond = e.features[0].properties.CPros_Party_2;

    var nameThird = e.features[0].properties.CPros_Name_3;
    var votesThird = e.features[0].properties.CPros_Votes_3;
    var pctThird = e.features[0].properties.CPros_Pct_3;
    
    var turnout = e.features[0].properties.Total_Turnout;
    var totalVotes = e.features[0].properties.CPros_Votes_total;

    countyName = countyName.toUpperCase();
    partyFirst = partyFirst.charAt(0);
    partySecond = partySecond.charAt(0);
    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    let message;

    if (nameThird == 'None') {
        message = 
        '<h>' + countyName + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + countyName + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p>' + nameThird + ': ' + votesThird + ' votes (' + pctThird + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    }

    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});


// Popup controls for 2022 General: County Prosecutor, precinct layer
map.on('mouseenter', 'g2022-CPros-precinct', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-CPros-precinct', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-CPros-precinct', function (e) {
    var precinctID = e.features[0].properties.Precinct;

    var nameFirst = e.features[0].properties.CPros_Name_1;
    var votesFirst = e.features[0].properties.CPros_Votes_1;
    var pctFirst = e.features[0].properties.CPros_Pct_1;
    var partyFirst = e.features[0].properties.CPros_Party_1;

    var nameSecond = e.features[0].properties.CPros_Name_2;
    var votesSecond = e.features[0].properties.CPros_Votes_2;
    var pctSecond = e.features[0].properties.CPros_Pct_2;
    var partySecond = e.features[0].properties.CPros_Party_2;

    var nameThird = e.features[0].properties.CPros_Name_3;
    var votesThird = e.features[0].properties.CPros_Votes_3;
    var pctThird = e.features[0].properties.CPros_Pct_3;

    var turnout = e.features[0].properties.Total_Turnout;
    var totalVotes = e.features[0].properties.CPros_Votes_total;

    precinctID = precinctID.toUpperCase();
    partyFirst = partyFirst.charAt(0);
    partySecond = partySecond.charAt(0);
    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    let message;

    if (nameFirst == null) {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>No data available</p>'
    }
    else if (nameThird == 'None') {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p>' + nameThird + ': ' + votesThird + ' votes (' + pctThird + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    }
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});


// Popup controls for 2022 General: County Sheriff, county layer
map.on('mouseenter', 'g2022-CSher-county', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-CSher-county', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-CSher-county', function (e) {
    var countyName = e.features[0].properties.NAMELSAD;

    var nameFirst = e.features[0].properties.CSher_Name_1;
    var votesFirst = e.features[0].properties.CSher_Votes_1;
    var pctFirst = e.features[0].properties.CSher_Pct_1;
    var partyFirst = e.features[0].properties.CSher_Party_1;

    var nameSecond = e.features[0].properties.CSher_Name_2;
    var votesSecond = e.features[0].properties.CSher_Votes_2;
    var pctSecond = e.features[0].properties.CSher_Pct_2;
    var partySecond = e.features[0].properties.CSher_Party_2;

    var nameThird = e.features[0].properties.CSher_Name_3;
    var votesThird = e.features[0].properties.CSher_Votes_3;
    var pctThird = e.features[0].properties.CSher_Pct_3;
    
    var turnout = e.features[0].properties.Total_Turnout;
    var totalVotes = e.features[0].properties.CSher_Votes_total;

    countyName = countyName.toUpperCase();
    partyFirst = partyFirst.charAt(0);
    partySecond = partySecond.charAt(0);
    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    let message;

    if (nameThird == 'None') {
        message = 
        '<h>' + countyName + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + countyName + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p>' + nameThird + ': ' + votesThird + ' votes (' + pctThird + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    }

    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});


// Popup controls for 2022 General: County Sheriff, precinct layer
map.on('mouseenter', 'g2022-CSher-precinct', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-CSher-precinct', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-CSher-precinct', function (e) {
    var precinctID = e.features[0].properties.Precinct;

    var nameFirst = e.features[0].properties.CSher_Name_1;
    var votesFirst = e.features[0].properties.CSher_Votes_1;
    var pctFirst = e.features[0].properties.CSher_Pct_1;
    var partyFirst = e.features[0].properties.CSher_Party_1;

    var nameSecond = e.features[0].properties.CSher_Name_2;
    var votesSecond = e.features[0].properties.CSher_Votes_2;
    var pctSecond = e.features[0].properties.CSher_Pct_2;
    var partySecond = e.features[0].properties.CSher_Party_2;

    var nameThird = e.features[0].properties.CSher_Name_3;
    var votesThird = e.features[0].properties.CSher_Votes_3;
    var pctThird = e.features[0].properties.CSher_Pct_3;

    var turnout = e.features[0].properties.Total_Turnout;
    var totalVotes = e.features[0].properties.CSher_Votes_total;

    precinctID = precinctID.toUpperCase();
    partyFirst = partyFirst.charAt(0);
    partySecond = partySecond.charAt(0);
    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    let message;

    if (nameFirst == null) {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>No data available</p>'
    }
    else if (nameThird == 'None') {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p>' + nameThird + ': ' + votesThird + ' votes (' + pctThird + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    }
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});



// Popup controls for 2022 General: County Treasurer, county layer
map.on('mouseenter', 'g2022-CTre-county', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-CTre-county', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-CTre-county', function (e) {
    var countyName = e.features[0].properties.NAMELSAD;

    var nameFirst = e.features[0].properties.CTre_Name_1;
    var votesFirst = e.features[0].properties.CTre_Votes_1;
    var pctFirst = e.features[0].properties.CTre_Pct_1;
    var partyFirst = e.features[0].properties.CTre_Party_1;

    var nameSecond = e.features[0].properties.CTre_Name_2;
    var votesSecond = e.features[0].properties.CTre_Votes_2;
    var pctSecond = e.features[0].properties.CTre_Pct_2;
    var partySecond = e.features[0].properties.CTre_Party_2;

    var nameThird = e.features[0].properties.CTre_Name_3;
    var votesThird = e.features[0].properties.CTre_Votes_3;
    var pctThird = e.features[0].properties.CTre_Pct_3;
    
    var turnout = e.features[0].properties.Total_Turnout;
    var totalVotes = e.features[0].properties.CTre_Votes_total;

    countyName = countyName.toUpperCase();
    partyFirst = partyFirst.charAt(0);
    partySecond = partySecond.charAt(0);
    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    let message;

    if (nameThird == 'None') {
        message = 
        '<h>' + countyName + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + countyName + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p>' + nameThird + ': ' + votesThird + ' votes (' + pctThird + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    }

    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});


// Popup controls for 2022 General: County Treasurer, precinct layer
map.on('mouseenter', 'g2022-CTre-precinct', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'g2022-CTre-precinct', function () {
    map.getCanvas().style.cursor = '';
});

map.on('click', 'g2022-CTre-precinct', function (e) {
    var precinctID = e.features[0].properties.Precinct;

    var nameFirst = e.features[0].properties.CTre_Name_1;
    var votesFirst = e.features[0].properties.CTre_Votes_1;
    var pctFirst = e.features[0].properties.CTre_Pct_1;
    var partyFirst = e.features[0].properties.CTre_Party_1;

    var nameSecond = e.features[0].properties.CTre_Name_2;
    var votesSecond = e.features[0].properties.CTre_Votes_2;
    var pctSecond = e.features[0].properties.CTre_Pct_2;
    var partySecond = e.features[0].properties.CTre_Party_2;

    var nameThird = e.features[0].properties.CTre_Name_3;
    var votesThird = e.features[0].properties.CTre_Votes_3;
    var pctThird = e.features[0].properties.CTre_Pct_3;

    var turnout = e.features[0].properties.Total_Turnout;
    var totalVotes = e.features[0].properties.CTre_Votes_total;

    precinctID = precinctID.toUpperCase();
    partyFirst = partyFirst.charAt(0);
    partySecond = partySecond.charAt(0);
    pctFirst = Math.round(pctFirst * 100) / 100;
    pctSecond = Math.round(pctSecond * 100) / 100;
    pctThird = Math.round(pctThird * 100) / 100;

    let message;
    
    if (nameFirst == null) {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>No data available</p>'
    }
    else if (nameThird == 'None') {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    } else {
        message = 
        '<h>' + precinctID + '</h>'
        + '<p>' + nameFirst + ' (' + partyFirst + '): ' + votesFirst + ' votes (' + pctFirst + '%)</p>'
        + '<p>' + nameSecond + ' (' + partySecond + '): ' + votesSecond + ' votes (' + pctSecond + '%)</p>'
        + '<p>' + nameThird + ': ' + votesThird + ' votes (' + pctThird + '%)</p>'
        + '<p> -- </p>'
        + '<p>Total votes: ' + totalVotes + '</p>'
        + '<p>Voter turnout: ' + turnout + '%</p>'
    }
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map);
});




// Toggle layers for 2022 General Election
toggleLayerStateExec(['outlines-county', 'g2022-SoS-county', 'g2022-SoS-precinct'], 'Secretary of State');

toggleLayerFederalLeg(['outlines-county', 'g2022-FSen-county', 'g2022-FSen-precinct'], 'U.S. Senator');

toggleLayerFederalLeg(['outlines-CD', 'g2022-FRep-CD', 'g2022-FRep-precinct'], 'U.S. Representative');

toggleLayerStateLeg(['outlines-LD', 'g2022-SSen-LD', 'g2022-SSen-precinct'], 'State Senator');

toggleLayerStateLeg(['outlines-LD', 'g2022-SRep1-LD', 'g2022-SRep1-precinct'], 'State Representative Pos. 1');

toggleLayerStateLeg(['outlines-LD', 'g2022-SRep2-LD', 'g2022-SRep2-precinct'], 'State Representative Pos. 2');

toggleLayerCountyExec(['outlines-county', 'g2022-CAss-county', 'g2022-CAss-precinct'], 'County Assessor');

toggleLayerCountyExec(['outlines-county', 'g2022-CAud-county', 'g2022-CAud-precinct'], 'County Auditor');

toggleLayerCountyExec(['outlines-county', 'g2022-CCler-county', 'g2022-CCler-precinct'], 'County Clerk');

toggleLayerCountyExec(['outlines-county', 'g2022-CPros-county', 'g2022-CPros-precinct'], 'County Prosecutor');

toggleLayerCountyExec(['outlines-county', 'g2022-CSher-county', 'g2022-CSher-precinct'], 'County Sheriff');

toggleLayerCountyExec(['outlines-county', 'g2022-CTre-county', 'g2022-CTre-precinct'], 'County Treasurer');

toggleLayerBoundaries(['boundaries-county'], 'Counties')

toggleLayerBoundaries(['boundaries-CD'], 'Congressional Districts')

toggleLayerBoundaries(['boundaries-LD'], 'Legislative Districts')



function toggleLayerBoundaries(ids, name) {
    var link = document.createElement('a');
    link.href = '';
    link.className = 'menu';
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

    var layers = document.getElementById('menu-boundaries');
    layers.appendChild(link);
}

function toggleLayerFederalLeg(ids, name) {
    var link = document.createElement('a');
    link.href = '';
    link.className = 'menu';
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

    var layers = document.getElementById('menu-federal-leg');
    layers.appendChild(link);
}

function toggleLayerStateExec(ids, name) {
    var link = document.createElement('a');
    link.href = '';
    link.className = 'menu';
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

    var layers = document.getElementById('menu-state-exec');
    layers.appendChild(link);
}

function toggleLayerStateLeg(ids, name) {
    var link = document.createElement('a');
    link.href = '';
    link.className = 'menu';
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

    var layers = document.getElementById('menu-state-leg');
    layers.appendChild(link);
}

function toggleLayerCountyExec(ids, name) {
    var link = document.createElement('a');
    link.href = '';
    link.className = 'menu';
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

    var layers = document.getElementById('menu-county-exec');
    layers.appendChild(link);
}
