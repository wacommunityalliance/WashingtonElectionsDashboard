function _log(message) {
    // TODO - uncomment this when deploying
    // return;

    console.log(message);
}

// Initialize mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoidGltb25lYWwiLCJhIjoiY2xjZm04YW5yMGFnYTNvcG1pZTNicGU2diJ9.eYwXLLfgApOlhZbiYYTWAA';

// Initialize the map
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/timoneal/clgf75tew00ch01mk1b0zwb1g',
    projection: 'mercator',
    zoom: 6.5,
    center: [-120.8, 47.6],
    maxZoom: 17,
    minZoom: 2
});

function makeDetailsPopup(meta) {
    const candidateListHtml = meta.candidates.map(candidate => `<li>${candidate.name} ${candidate.votes}</li>`).join('');
    return `<h3>${meta.title}</h3><ol>${candidateListHtml}</ol>`;
}



map.on('click', 'selectedLayer', (e) => {
    _log(e);

    const label = e.features[0].properties.Title.toUpperCase();
    const totalVotes = e.features[0].properties.Votes_total;

    const candidate1 = e.features[0].properties.Name_1;
    const party1 = e.features[0].properties.Party_1;
    const votes1 = e.features[0].properties.Votes_1;
    const pct1 = Math.round(e.features[0].properties.Pct_1 * 100) / 100;

    const candidate2 = e.features[0].properties.Name_2;
    const party2 = e.features[0].properties.Party_2;
    const votes2 = e.features[0].properties.Votes_2;
    const pct2 = Math.round(e.features[0].properties.Pct_2 * 100) / 100;

    const candidate3 = e.features[0].properties.Name_3;
    const party3 = e.features[0].properties.Party_3;
    const votes3 = e.features[0].properties.Votes_3;
    const pct3 = Math.round(e.features[0].properties.Pct_3 * 100) / 100;

    const candidate4 = e.features[0].properties.Name_4;
    const party4 = e.features[0].properties.Party_4;
    const votes4 = e.features[0].properties.Votes_4;
    const pct4 = Math.round(e.features[0].properties.Pct_4 * 100) / 100;

    const candidate5 = e.features[0].properties.Name_5;
    const party5 = e.features[0].properties.Party_5;
    const votes5 = e.features[0].properties.Votes_5;
    const pct5 = Math.round(e.features[0].properties.Pct_5 * 100) / 100;
    
    let message;

    if (candidate1 == null) {
        message = 
        '<h3>' + label + '</h3>'
        + '<p>No data available</p>'
    }

    else if (votes2 == 0) {
        message = 
        '<h3>' + label + '</h3>'
        + '<p>' + candidate1 + ' (' + party1.charAt(0) + '): ' + votes1 + ' votes (' + pct1 + '%)<br></p'
        + '<p>Total votes: ' + totalVotes + '</p>' 
    }

    else if (votes3 == 0) {
        if (candidate2 == 'Write-In') {
            message = 
            '<h3>' + label + '</h3>'
            + '<p>' + candidate1 + ' (' + party1.charAt(0) + '): ' + votes1 + ' votes (' + pct1 + '%)<br></p'
            + '<p>' + candidate2 + ': ' + votes2 + ' votes (' + pct2 + '%)<br></p'
            + '<p>Total votes: ' + totalVotes + '</p>' 
        }
        else {
            message = 
            '<h3>' + label + '</h3>'
            + '<p>' + candidate1 + ' (' + party1.charAt(0) + '): ' + votes1 + ' votes (' + pct1 + '%)<br></p'
            + '<p>' + candidate2 + ' (' + party2.charAt(0) + '): ' + votes2 + ' votes (' + pct2 + '%)<br></p'
            + '<p>Total votes: ' + totalVotes + '</p>' 
        }
    }

    else if (votes4 == 0) {
        if (candidate3 == 'Write-In') {
            message = 
            '<h3>' + label + '</h3>'
            + '<p>' + candidate1 + ' (' + party1.charAt(0) + '): ' + votes1 + ' votes (' + pct1 + '%)<br></p'
            + '<p>' + candidate2 + ' (' + party2.charAt(0) + '): ' + votes2 + ' votes (' + pct2 + '%)<br></p'
            + '<p>' + candidate3 + ': ' + votes3.charAt(0) + ' votes (' + pct3 + '%)<br></p'
            + '<p>Total votes: ' + totalVotes + '</p>' 
        }
        else {
            message = 
            '<h3>' + label + '</h3>'
            + '<p>' + candidate1 + ' (' + party1.charAt(0) + '): ' + votes1 + ' votes (' + pct1 + '%)<br></p'
            + '<p>' + candidate2 + ' (' + party2.charAt(0) + '): ' + votes2 + ' votes (' + pct2 + '%)<br></p'
            + '<p>' + candidate3 + ' (' + party3.charAt(0) + '): ' + votes3 + ' votes (' + pct3 + '%)<br></p'
            + '<p>Total votes: ' + totalVotes + '</p>' 
        }
    }

    else if (votes4 != 0) {
        if (candidate4 == 'Write-In') {
            message = 
            '<h3>' + label + '</h3>'
            + '<p>' + candidate1 + ' (' + party1.charAt(0) + '): ' + votes1 + ' votes (' + pct1 + '%)<br></p'
            + '<p>' + candidate2 + ' (' + party2.charAt(0) + '): ' + votes2 + ' votes (' + pct2 + '%)<br></p'
            + '<p>' + candidate3 + ' (' + party3.charAt(0) + '): ' + votes3 + ' votes (' + pct3 + '%)<br></p'
            + '<p>' + candidate4 + ': ' + votes4.charAt(0) + ' votes (' + pct4 + '%)<br></p'
            + '<p>Total votes: ' + totalVotes + '</p>' 
        }
        else {
            message = 
            '<h3>' + label + '</h3>'
            + '<p>' + candidate1 + ' (' + party1.charAt(0) + '): ' + votes1 + ' votes (' + pct1 + '%)<br></p'
            + '<p>' + candidate2 + ' (' + party2.charAt(0) + '): ' + votes2 + ' votes (' + pct2 + '%)<br></p'
            + '<p>' + candidate3 + ' (' + party3.charAt(0) + '): ' + votes3 + ' votes (' + pct3 + '%)<br></p'
            + '<p>' + candidate4 + ' (' + party4.charAt(0) + '): ' + votes4 + ' votes (' + pct4 + '%)<br></p'
            + '<p>Total votes: ' + totalVotes + '</p>' 
        }
    }

    else {
        message = 
        + '<p>hmm</p>' 
    }   

    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(message)
        .addTo(map)
});

// Convert the tree data to jstree format
function convertToJsTreeFormat(treeData) {
    if (!treeData || !treeData.items) return [];

    return treeData.items.map(item => {
        const children = convertToJsTreeFormat(item);
        return {
            text: item.title,
            data: {
                path: item.path
            },
            children
        };
    });
}


fetch('Data/data.json')
    .then(response => response.json())
    .then(treeData => {
        _log(treeData);

        // If you don't want a tree, use treeData to populate slider, buttons, etc
        // Initialize the jstree
        $('#tree').jstree({
            core: {
                data: convertToJsTreeFormat(treeData)
            }
        });

        // if you don't want a tree, replace this click handling with state mgmt + click handling for slider, buttons, etc
        // jstree event handlers
        $('#tree').on('select_node.jstree', function (e, data) {
            const node = data.node;
            const hasChildren = node.children && node.children.length > 0;

            if (hasChildren) {
                $('#tree').jstree('toggle_node', node);
            } else {
                layerSelected(node.data.path);
            }
        });
    });

// Function to load and display the GeoJSON file
// this is agnostic, as long as it receives the absolute path to the GeoJSON file,
function layerSelected(path) {
    _log(`Loading ${path}...`);

    if (
        map.getLayer('selectedLayer')) {
        map.removeLayer('selectedLayer');
        map.removeLayer('selectedLayerOutline');
        map.removeSource('selectedLayer');
    }

    const layers = map.getStyle().layers;
    // Find the index of the first symbol layer in the map style.
    let firstSymbolId;
    for (const layer of layers) {
    if (layer.type === 'symbol') {
    firstSymbolId = layer.id;
    break;
    }};

    map.addSource('selectedLayer', {
        type: 'geojson',
        data: '/ElectionMapsWA' + path
    });

    map.addLayer({
        id: 'selectedLayerOutline',
        type: 'line',
        source: 'selectedLayer',
        layout: {},
        paint: {
            'line-color': '#595959',
            'line-width': 1.25
        }
    });

    map.addLayer({
        id: 'selectedLayer',
        type: 'fill',
        source: 'selectedLayer',
        layout: {},
        paint: {
            'fill-color': [         // fill polygon based on 1st place candidate's party
                    'match',
                    ['get', 'Party_1'],
                    'Democratic', '#4f93ba',    
                    'Republican', '#cf635d',   
                    'Independent', '#fac566',   
                    'Democratic2', '#868fba',   
                    'Republican2', '#f68f3e',   
                    'Independent2', '#119f92',  
                    'transparent'
                ],
                'fill-opacity': [       // set fill opacity to margin b/w 1st and 2nd place candidates
                    'step',
                    ['get', 'Margin'],
                    0.15, 5,
                    0.3, 10,
                    0.45, 15,
                    0.6, 20,
                    0.75, 101,
                    0
                ]
        }
    },
    firstSymbolId
    );
};

