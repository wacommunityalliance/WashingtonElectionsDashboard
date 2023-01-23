import { workerClass } from 'mapbox-gl';
import workerLoader from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

workerClass = workerLoader;

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

map.on('load', function () {
    map.addLayer(
        {
            id: 'wa_counties_outlines',
            type: 'line',
            source: {
                type: 'geojson',
                data: 'countyResults.geojson'
            },
            paint: {
                'line-color': '#ffffff',
                'line-width': 0.7
            },
            maxzoom: 7
        },
        'waterway-label'
    );

    map.addLayer(
        {
            id: 'wa_counties_g2022_FSen',
            type: 'fill',
            source: {
                type: 'geojson',
                data: 'countyResults.geojson'
            },
            layout: {
                'visibility': 'visible'
            },
            paint: {
                'fill-color': [
                    'match', 
                    ['get', 'county_g2022_FSen_Winner'],
                    'Democrat', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#ffffff'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'county_g2022_FSen_Winner_pct'],
                    0.5, 50,
                    0.6, 60,
                    0.7, 70,
                    0.8, 80,
                    0.9, 90,
                    1.0, 100,
                    0.1
                ]
            },
            maxzoom: 7
        },
        'wa_counties_outlines'
    );

    map.addLayer(
        {
            id: 'wa_counties_g2022_SoS',
            type: 'fill',
            source: {
                type: 'geojson',
                data: 'countyResults.geojson'
            },
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match', 
                    ['get', 'county_g2022_SoS_Winner'],
                    'Democrat', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#ffffff'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'county_g2022_SoS_Winner_pct'],
                    0.5, 50,
                    0.6, 60,
                    0.7, 70,
                    0.8, 80,
                    0.9, 90,
                    1.0, 100,
                    0.1
                ]
            },
            maxzoom: 7
        },
        'wa_counties_g2022_FSen'
    );
    
    map.addLayer(
        {
            id: 'wa_precincts_outlines',
            type: 'line',
            source: {
                type: 'geojson',
                data: 'precinctResults.geojson',
            },
            paint: {
                'line-color': '#ffffff',
                'line-width': 0.0,
            },
            minzoom: 7
        },
        'wa_counties_g2022_FSen'
    );

    map.addLayer(
        {
            id: 'wa_precincts_g2022_FSen',
            type: 'fill',
            source: {
                type: 'geojson',
                data: 'precinctResults.geojson',
            },
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match', 
                    ['get', 'precinct_g2022_FSen_Winner'],
                    'Democrat', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#c7c7c7'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'precinct_g2022_FSen_Winner_pct'],
                    0.5, 50,
                    0.6, 60,
                    0.7, 70,
                    0.8, 80,
                    0.9, 90,
                    1.0, 100,
                    0.1
                ]
            },
            minzoom: 7
        },
        'wa_precincts_outlines'
    );

    map.addLayer(
        {
            id: 'wa_precincts_g2022_SoS',
            type: 'fill',
            source: {
                type: 'geojson',
                data: 'precinctResults.geojson',
            },
            layout: {
                'visibility': 'none'
            },
            paint: {
                'fill-color': [
                    'match', 
                    ['get', 'precinct_g2022_SoS_Winner'],
                    'Democrat', '#6193c7',
                    'Republican', '#cf635d',
                    'Independent', '#fdb614',
                    'Other', '#88939b',
                    '#c7c7c7'
                ],
                'fill-outline-color': '#ffffff',
                'fill-opacity': [
                    'step',
                    ['get', 'precinct_g2022_SoS_Winner_pct'],
                    0.5, 50,
                    0.6, 60,
                    0.7, 70,
                    0.8, 80,
                    0.9, 90,
                    1.0, 100,
                    0.1
                ]
            },
            minzoom: 7
        },
        'wa_precincts_g2022_FSen'
    );
});

toggleLayer(['wa_counties_g2022_FSen', 'wa_precincts_g2022_FSen'], 'U.S. Senate');
toggleLayer(['wa_counties_g2022_SoS', 'wa_precincts_g2022_SoS'], 'Secretary of State')

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


