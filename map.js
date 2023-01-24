
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
    
    // Washington County boundaries
    map.addLayer(
        {
            id: 'county-outlines',
            type: 'line',
            source: {
                type: 'geojson',
                data: 'results-county.geojson'
            },
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
            id: 'CD-outlines',
            type: 'line',
            source: {
                type: 'geojson',
                data: 'results-CD.geojson'
            },
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
            id: 'LD-outlines',
            type: 'line',
            source: {
                type: 'geojson',
                data: 'results-LD.geojson'
            },
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

    // 2022 General: Secretary of State, county layer
    map.addLayer(
        {
            id: 'g2022-SoS-county',
            type: 'fill',
            source: {
                type: 'geojson',
                data: 'results-county.geojson'
            },
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'county_g2022_SoS_Party-1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#ffffff'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'county_g2022_SoS_Margin'],
                    0.5, 2.5,
                    0.6, 5,
                    0.7, 7.5,
                    0.8, 10,
                    0.9, 15,
                    1.0, 100,
                    0.1
                ]
            },
            maxzoom: MAXZOOM
        },
        'county-outlines'
    );
    
    // 2022 General: Secretary of State, precinct layer
    map.addLayer(
        {
            id: 'g2022-SoS-precinct',
            type: 'fill',
            source: {
                type: 'geojson',
                data: 'results-precinct.geojson'
            },
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'precinct_g2022_SoS_Party-1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#ffffff'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'precinct_g2022_SoS_Margin'],
                    0.5, 2.5,
                    0.6, 5,
                    0.7, 7.5,
                    0.8, 10,
                    0.9, 15,
                    1.0, 100,
                    0.1
                ]
            },
            minzoom: MINZOOM
        },
        'g2022-SoS-county'
    );

    // 2022 General: U.S. Senate, county layer
    map.addLayer(
        {
            id: 'g2022-FSen-county',
            type: 'fill',
            source: {
                type: 'geojson',
                data: 'results-county.geojson'
            },
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'county_g2022_FSen_Party-1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#ffffff'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'county_g2022_FSen_Margin'],
                    0.5, 2.5,
                    0.6, 5,
                    0.7, 7.5,
                    0.8, 10,
                    0.9, 15,
                    1.0, 100,
                    0.1
                ]
            },
            maxzoom: MAXZOOM
        },
        'county-outlines'
    );

    // 2022 General: U.S. Senate, precinct layer
    map.addLayer(
        {
            id: 'g2022-FSen-precinct',
            type: 'fill',
            source: {
                type: 'geojson',
                data: 'results-precinct.geojson'
            },
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'precinct_g2022_FSen_Party-1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#ffffff'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'precinct_g2022_FSen_Margin'],
                    0.5, 2.5,
                    0.6, 5,
                    0.7, 7.5,
                    0.8, 10,
                    0.9, 15,
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
            source: {
                type: 'geojson',
                data: 'results-CD.geojson'
            },
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'CD_g2022_FRep_Party-1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#ffffff'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'CD_g2022_FRep_Margin'],
                    0.5, 2.5,
                    0.6, 5,
                    0.7, 7.5,
                    0.8, 10,
                    0.9, 15,
                    1.0, 100,
                    0.1
                ]
            },
            maxzoom: MAXZOOM
        },
        'CD-outlines'
    );

    // 2022 General: U.S. Representative, precinct layer
    map.addLayer(
        {
            id: 'g2022-FRep-precinct',
            type: 'fill',
            source: {
                type: 'geojson',
                data: 'results-precinct.geojson'
            },
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'precinct_g2022_FRep_Party-1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#ffffff'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'precinct_g2022_FRep_Margin'],
                    0.5, 2.5,
                    0.6, 5,
                    0.7, 7.5,
                    0.8, 10,
                    0.9, 15,
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
            source: {
                type: 'geojson',
                data: 'results-LD.geojson'
            },
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'LD_g2022_SSen_Party-1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#ffffff'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'LD_g2022_SSen_Margin'],
                    0.5, 2.5,
                    0.6, 5,
                    0.7, 7.5,
                    0.8, 10,
                    0.9, 15,
                    1.0, 100,
                    0.1
                ]
            },
            maxzoom: MAXZOOM
        },
        'LD-outlines'
    );

    // 2022 General: State Senator, precinct layer
    map.addLayer(
        {
            id: 'g2022-SSen-precinct',
            type: 'fill',
            source: {
                type: 'geojson',
                data: 'results-precinct.geojson'
            },
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'precinct_g2022_SSen_Party-1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#ffffff'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'precinct_g2022_SSen_Margin'],
                    0.5, 2.5,
                    0.6, 5,
                    0.7, 7.5,
                    0.8, 10,
                    0.9, 15,
                    1.0, 100,
                    0.1
                ]
            },
            minzoom: MINZOOM
        },
        'g2022-SSen-LD'
    );

    // 2022 General: State Representative Pos. 1, LD layer
    map.addLayer(
        {
            id: 'g2022-SRep1-LD',
            type: 'fill',
            source: {
                type: 'geojson',
                data: 'results-LD.geojson'
            },
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'LD_g2022_SRep1_Party-1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#ffffff'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'LD_g2022_SRep1_Margin'],
                    0.5, 2.5,
                    0.6, 5,
                    0.7, 7.5,
                    0.8, 10,
                    0.9, 15,
                    1.0, 100,
                    0.1
                ]
            },
            maxzoom: MAXZOOM
        },
        'LD-outlines'
    );

    // 2022 General: State Representative Pos. 1, precinct layer
    map.addLayer(
        {
            id: 'g2022-SRep1-precinct',
            type: 'fill',
            source: {
                type: 'geojson',
                data: 'results-precinct.geojson'
            },
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'precinct_g2022_SRep1_Party-1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#ffffff'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'precinct_g2022_SRep1_Margin'],
                    0.5, 2.5,
                    0.6, 5,
                    0.7, 7.5,
                    0.8, 10,
                    0.9, 15,
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
            source: {
                type: 'geojson',
                data: 'results-LD.geojson'
            },
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'LD_g2022_SRep2_Party-1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#ffffff'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'LD_g2022_SRep2_Margin'],
                    0.5, 2.5,
                    0.6, 5,
                    0.7, 7.5,
                    0.8, 10,
                    0.9, 15,
                    1.0, 100,
                    0.1
                ]
            },
            maxzoom: MAXZOOM
        },
        'LD-outlines'
    );

    // 2022 General: State Representative Pos. 2, precinct layer
    map.addLayer(
        {
            id: 'g2022-SRep2-precinct',
            type: 'fill',
            source: {
                type: 'geojson',
                data: 'results-precinct.geojson'
            },
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match',
                    ['get', 'precinct_g2022_SRep2_Party-1'],
                    'Democratic', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#ffffff'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'precinct_g2022_SRep2_Margin'],
                    0.5, 2.5,
                    0.6, 5,
                    0.7, 7.5,
                    0.8, 10,
                    0.9, 15,
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
toggleLayer(['county-outlines', 'g2022-SoS-county', 'g2022-SoS-precinct'], 'Secretary of State');

toggleLayer(['county-outlines', 'g2022-FSen-county', 'g2022-FSen-precinct'], 'U.S. Senator')

toggleLayer(['CD-outlines', 'g2022-FRep-CD', 'g2022-FRep-precinct'], 'U.S. Representative')

toggleLayer(['LD-outlines', 'g2022-SSen-LD', 'g2022-SSen-precinct'], 'State Senator')

toggleLayer(['LD-outlines', 'g2022-SRep1-LD', 'g2022-SRep1-precinct'], 'State Representative Pos.1')

toggleLayer(['LD-outlines', 'g2022-SRep2-LD', 'g2022-SRep2-precinct'], 'State Representative Pos.2')




// toggleLayer(['wa_counties_g2022_FSen'], 'U.S. Senate');
// toggleLayer(['wa_counties_g2022_SoS'], 'Secretary of State')
// toggleLayer(['wa_cong_g2022_FRep'], 'U.S. Representative')


function toggleLayer(ids, name) {
    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
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



// var toggleableLayerIds = ['wa_counties_g2022_FSen', 'wa_counties_g2022_SoS'];

// for (var i = 0; i < toggleableLayerIds.length; i++) {
//     var id = toggleableLayerIds[i];

//     var link = document.createElement('a');
//     link.href = '#';
//     link.className = '';
//     link.textContent = id;

//     link.onclick = function(e) {
//         var clickedLayer = this.textContent;
//         e.preventDefault();
//         e.stopPropagation();
//         for (var j = 0; j < toggleableLayerIds.length; j++) {
//             if (clickedLayer === toggleableLayerIds[j]) {
//                     layers.children[j].className = 'active';
//                     map.setLayoutProperty(toggleableLayerIds[j], 'visibility', 'visible');
//             }
//             else {
//                     layers.children[j].className = '';
//                     map.setLayoutProperty(toggleableLayerIds[j], 'visibility', 'none');
//             }
//         }
//     };

//     var layers = document.getElementById('menu');
//     layers.appendChild(link);
// }


