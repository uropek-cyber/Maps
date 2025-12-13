var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': 'Спутник',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_2_1 = new ol.layer.Tile({
            'title': '2ГИС',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1.1'
            })
        });
var format_No_topo_1312_2 = new ol.format.GeoJSON();
var features_No_topo_1312_2 = format_No_topo_1312_2.readFeatures(json_No_topo_1312_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_No_topo_1312_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_No_topo_1312_2.addFeatures(features_No_topo_1312_2);
var lyr_No_topo_1312_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_No_topo_1312_2, 
                style: style_No_topo_1312_2,
                popuplayertitle: 'No_topo_13.12',
                interactive: true,
    title: 'No_topo_13.12<br />\
    <img src="styles/legend/No_topo_1312_2_0.png" /> Топо не было (первая съемка)<br />\
    <img src="styles/legend/No_topo_1312_2_1.png" /> Точно планшета нет 12.12<br />\
    <img src="styles/legend/No_topo_1312_2_2.png" /> <br />' });

lyr__0.setVisible(true);lyr_2_1.setVisible(true);lyr_No_topo_1312_2.setVisible(true);
var layersList = [lyr__0,lyr_2_1,lyr_No_topo_1312_2];
lyr_No_topo_1312_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'Road_id': 'Road_id', 'L': 'L', 'L_PODD': 'L_PODD', 'Start': 'Start', 'End_1': 'End_1', 'PODD': 'PODD', 'OK': 'OK', 'PKK': 'PKK', 'XY_start': 'XY_start', 'XY_end': 'XY_end', 'Топо': 'Топо', 'Planshet': 'Planshet', });
lyr_No_topo_1312_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'Road_id': 'TextEdit', 'L': 'TextEdit', 'L_PODD': 'TextEdit', 'Start': 'TextEdit', 'End_1': 'TextEdit', 'PODD': 'TextEdit', 'OK': 'TextEdit', 'PKK': 'TextEdit', 'XY_start': 'TextEdit', 'XY_end': 'TextEdit', 'Топо': 'TextEdit', 'Planshet': 'TextEdit', });
lyr_No_topo_1312_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'Road_id': 'no label', 'L': 'no label', 'L_PODD': 'no label', 'Start': 'no label', 'End_1': 'no label', 'PODD': 'no label', 'OK': 'no label', 'PKK': 'no label', 'XY_start': 'no label', 'XY_end': 'no label', 'Топо': 'no label', 'Planshet': 'no label', });
lyr_No_topo_1312_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});