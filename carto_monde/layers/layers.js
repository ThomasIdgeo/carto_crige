var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_carte_du_monde_1 = new ol.format.GeoJSON();
var features_carte_du_monde_1 = format_carte_du_monde_1.readFeatures(json_carte_du_monde_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_carte_du_monde_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_carte_du_monde_1.addFeatures(features_carte_du_monde_1);
var lyr_carte_du_monde_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_carte_du_monde_1,
maxResolution:28004.466152261964,
 minResolution:1400.2233076130983,

                style: style_carte_du_monde_1,
                popuplayertitle: 'carte_du_monde',
                interactive: true,
                title: '<img src="styles/legend/carte_du_monde_1.png" /> carte_du_monde'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_carte_du_monde_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_carte_du_monde_1];
lyr_carte_du_monde_1.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_carte_du_monde_1.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_carte_du_monde_1.set('fieldLabels', {'fid': 'hidden field', 'iso_a2': 'hidden field', 'NAME': 'no label', 'FIPS_10_': 'hidden field', 'ISO_A3': 'hidden field', 'WB_A2': 'hidden field', 'WB_A3': 'hidden field', });
lyr_carte_du_monde_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});