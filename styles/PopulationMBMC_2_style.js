var size = 0;
var placement = 'point';

var style_PopulationMBMC_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("population");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("population") !== null) {
        labelText = String(feature.get("population"));
    }
    if (value >= 1.000000 && value <= 2069.133333) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 17.6 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,139,57,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}), fill: new ol.style.Fill({color: 'rgba(247,251,255,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 7.2 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,176,124,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(247,251,255,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2069.133333 && value <= 4137.266667) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 17.6 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,139,57,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}), fill: new ol.style.Fill({color: 'rgba(233,242,251,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 7.2 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,176,124,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(233,242,251,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 4137.266667 && value <= 6205.400000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 17.6 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,139,57,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}), fill: new ol.style.Fill({color: 'rgba(220,233,246,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 7.2 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,176,124,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(220,233,246,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 6205.400000 && value <= 8273.533333) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 17.6 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,139,57,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}), fill: new ol.style.Fill({color: 'rgba(206,225,242,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 7.2 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,176,124,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(206,225,242,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 8273.533333 && value <= 10341.666667) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 17.6 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,139,57,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}), fill: new ol.style.Fill({color: 'rgba(190,216,236,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 7.2 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,176,124,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(190,216,236,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 10341.666667 && value <= 12409.800000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 17.6 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,139,57,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}), fill: new ol.style.Fill({color: 'rgba(168,206,229,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 7.2 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,176,124,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(168,206,229,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 12409.800000 && value <= 14477.933333) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 17.6 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,139,57,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}), fill: new ol.style.Fill({color: 'rgba(143,194,222,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 7.2 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,176,124,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(143,194,222,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 14477.933333 && value <= 16546.066667) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 17.6 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,139,57,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}), fill: new ol.style.Fill({color: 'rgba(115,178,216,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 7.2 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,176,124,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(115,178,216,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 16546.066667 && value <= 18614.200000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 17.6 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,139,57,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}), fill: new ol.style.Fill({color: 'rgba(91,163,208,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 7.2 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,176,124,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(91,163,208,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 18614.200000 && value <= 20682.333333) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 17.6 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,139,57,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}), fill: new ol.style.Fill({color: 'rgba(68,148,199,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 7.2 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,176,124,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(68,148,199,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 20682.333333 && value <= 22750.466667) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 17.6 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,139,57,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}), fill: new ol.style.Fill({color: 'rgba(50,130,190,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 7.2 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,176,124,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(50,130,190,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 22750.466667 && value <= 24818.600000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 17.6 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,139,57,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}), fill: new ol.style.Fill({color: 'rgba(32,111,180,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 7.2 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,176,124,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(32,111,180,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 24818.600000 && value <= 26886.733333) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 17.6 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,139,57,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}), fill: new ol.style.Fill({color: 'rgba(17,92,165,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 7.2 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,176,124,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(17,92,165,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 26886.733333 && value <= 28954.866667) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 17.6 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,139,57,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}), fill: new ol.style.Fill({color: 'rgba(8,72,142,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 7.2 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,176,124,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(8,72,142,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 28954.866667 && value <= 31023.000000) {
            style = [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 17.6 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,139,57,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}), fill: new ol.style.Fill({color: 'rgba(8,48,107,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.RegularShape({radius: 7.2 + size, points: 6,
            stroke: new ol.style.Stroke({color: 'rgba(250,176,124,0.818)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(8,48,107,0.818)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
