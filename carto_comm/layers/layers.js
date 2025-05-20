var wms_layers = [];


    var projection_Ortho20cm_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_Ortho20cm_0 = projection_Ortho20cm_0.getExtent();
    var size_Ortho20cm_0 = ol.extent.getWidth(projectionExtent_Ortho20cm_0) / 256;
    var resolutions_Ortho20cm_0 = new Array(14);
    var matrixIds_Ortho20cm_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Ortho20cm_0[z] = size_Ortho20cm_0 / Math.pow(2, z);
        matrixIds_Ortho20cm_0[z] = z;
    }
    var lyr_Ortho20cm_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://data.geopf.fr/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetCapabilities",
                                attributions: ' ',
                                "layer": "HR.ORTHOIMAGERY.ORTHOPHOTOS",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_Ortho20cm_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Ortho20cm_0),
                resolutions: resolutions_Ortho20cm_0,
                matrixIds: matrixIds_Ortho20cm_0
              }),
              style: 'normal',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Ortho 20 cm',
                            opacity: 1.0,
                            
                            
                          });
var format_COMMUNE_1 = new ol.format.GeoJSON();
var features_COMMUNE_1 = format_COMMUNE_1.readFeatures(json_COMMUNE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMMUNE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNE_1.addFeatures(features_COMMUNE_1);
var lyr_COMMUNE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMMUNE_1, 
                style: style_COMMUNE_1,
                popuplayertitle: 'COMMUNE',
                interactive: false,
                title: '<img src="styles/legend/COMMUNE_1.png" /> COMMUNE'
            });
var format_EPCI_2 = new ol.format.GeoJSON();
var features_EPCI_2 = format_EPCI_2.readFeatures(json_EPCI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPCI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPCI_2.addFeatures(features_EPCI_2);
var lyr_EPCI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EPCI_2, 
                style: style_EPCI_2,
                popuplayertitle: 'EPCI',
                interactive: true,
                title: 'EPCI'
            });

lyr_Ortho20cm_0.setVisible(true);lyr_COMMUNE_1.setVisible(false);lyr_EPCI_2.setVisible(true);
var layersList = [lyr_Ortho20cm_0,lyr_COMMUNE_1,lyr_EPCI_2];
lyr_COMMUNE_1.set('fieldAliases', {'ID': 'ID', 'NOM': 'NOM', 'NOM_M': 'NOM_M', 'INSEE_COM': 'INSEE_COM', 'STATUT': 'STATUT', 'POPULATION': 'POPULATION', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'SIREN_EPCI': 'SIREN_EPCI', });
lyr_EPCI_2.set('fieldAliases', {'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NOM': 'NOM', 'NATURE': 'NATURE', });
lyr_COMMUNE_1.set('fieldImages', {'ID': '', 'NOM': '', 'NOM_M': '', 'INSEE_COM': '', 'STATUT': '', 'POPULATION': '', 'INSEE_CAN': '', 'INSEE_ARR': '', 'INSEE_DEP': '', 'INSEE_REG': '', 'SIREN_EPCI': '', });
lyr_EPCI_2.set('fieldImages', {'ID': '', 'CODE_SIREN': '', 'NOM': '', 'NATURE': '', });
lyr_COMMUNE_1.set('fieldLabels', {'ID': 'no label', 'NOM': 'no label', 'NOM_M': 'no label', 'INSEE_COM': 'no label', 'STATUT': 'no label', 'POPULATION': 'no label', 'INSEE_CAN': 'no label', 'INSEE_ARR': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'SIREN_EPCI': 'no label', });
lyr_EPCI_2.set('fieldLabels', {'ID': 'no label', 'CODE_SIREN': 'no label', 'NOM': 'no label', 'NATURE': 'no label', });
lyr_EPCI_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});