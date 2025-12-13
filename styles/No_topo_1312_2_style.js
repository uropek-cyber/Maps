var size = 0;
var placement = 'point';

var style_No_topo_1312_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("var value = '';");
    var labelFont = "18.2px \'ISOCPEUR\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 3.9000000000000004;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("descriptio") !== null) {
        labelText = String(feature.get("descriptio"));
    }
    
        function rules_No_topo_1312_2(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_No_topo_1312_2rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(201,43,78,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'bevel', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_No_topo_1312_2rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(123,214,98,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(92,116,205,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 4.028}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
            }
        }
        var style = rules_No_topo_1312_2(feature, value);
        ;

    return style;
};
