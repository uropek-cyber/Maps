var wms_layers = [];


        var lyr_2gisMap_0 = new ol.layer.Tile({
            'title': '2gis Map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1.1'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'Дороги',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> Дороги'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'Начало-Конец',
                interactive: true,
    title: 'Начало-Конец<br />\
    <img src="styles/legend/_2_0.png" /> 1<br />\
    <img src="styles/legend/_2_1.png" /> 2<br />\
    <img src="styles/legend/_2_2.png" /> <br />' });

lyr_2gisMap_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_2gisMap_0,lyr__1,lyr__2];
lyr__1.set('fieldAliases', {'Name': 'Name', 'Road_id': 'Road_id', 'Start': 'Start', 'End': 'End', 'L_PODD': 'L_PODD', 'Ok': 'Ok', 'PKK': 'PKK', 'Length': 'Length', });
lyr__2.set('fieldAliases', {'id': 'id', 'Start1End2': 'Start1End2', 'X': 'X', 'Y': 'Y', });
lyr__1.set('fieldImages', {'Name': 'TextEdit', 'Road_id': 'TextEdit', 'Start': 'TextEdit', 'End': 'TextEdit', 'L_PODD': 'TextEdit', 'Ok': 'TextEdit', 'PKK': 'TextEdit', 'Length': 'TextEdit', });
lyr__2.set('fieldImages', {'id': 'TextEdit', 'Start1End2': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr__1.set('fieldLabels', {'Name': 'inline label - always visible', 'Road_id': 'inline label - always visible', 'Start': 'inline label - always visible', 'End': 'inline label - always visible', 'L_PODD': 'inline label - always visible', 'Ok': 'inline label - always visible', 'PKK': 'inline label - always visible', 'Length': 'inline label - always visible', });
lyr__2.set('fieldLabels', {'id': 'inline label - always visible', 'Start1End2': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});