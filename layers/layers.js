var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MBMCWealthIndex_1 = new ol.format.GeoJSON();
var features_MBMCWealthIndex_1 = format_MBMCWealthIndex_1.readFeatures(json_MBMCWealthIndex_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCWealthIndex_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCWealthIndex_1.addFeatures(features_MBMCWealthIndex_1);
var lyr_MBMCWealthIndex_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MBMCWealthIndex_1, 
                style: style_MBMCWealthIndex_1,
                popuplayertitle: "MBMC Wealth Index",
                interactive: true,
    title: 'MBMC Wealth Index<br />\
    <img src="styles/legend/MBMCWealthIndex_1_0.png" /> -0.29 - -0.16<br />\
    <img src="styles/legend/MBMCWealthIndex_1_1.png" /> -0.16 - -0.03<br />\
    <img src="styles/legend/MBMCWealthIndex_1_2.png" /> -0.03 - 0.11<br />\
    <img src="styles/legend/MBMCWealthIndex_1_3.png" /> 0.11 - 0.24<br />\
    <img src="styles/legend/MBMCWealthIndex_1_4.png" /> 0.24 - 0.37<br />\
    <img src="styles/legend/MBMCWealthIndex_1_5.png" /> 0.37 - 0.51<br />\
    <img src="styles/legend/MBMCWealthIndex_1_6.png" /> 0.51 - 0.64<br />\
    <img src="styles/legend/MBMCWealthIndex_1_7.png" /> 0.64 - 0.77<br />\
    <img src="styles/legend/MBMCWealthIndex_1_8.png" /> 0.77 - 0.91<br />\
    <img src="styles/legend/MBMCWealthIndex_1_9.png" /> 0.91 - 1.04<br />\
    <img src="styles/legend/MBMCWealthIndex_1_10.png" /> 1.04 - 1.18<br />\
    <img src="styles/legend/MBMCWealthIndex_1_11.png" /> 1.18 - 1.31<br />\
    <img src="styles/legend/MBMCWealthIndex_1_12.png" /> 1.31 - 1.44<br />\
    <img src="styles/legend/MBMCWealthIndex_1_13.png" /> 1.44 - 1.58<br />\
    <img src="styles/legend/MBMCWealthIndex_1_14.png" /> 1.58 - 1.71<br />'
        });
var format_PopulationMBMC_2 = new ol.format.GeoJSON();
var features_PopulationMBMC_2 = format_PopulationMBMC_2.readFeatures(json_PopulationMBMC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PopulationMBMC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopulationMBMC_2.addFeatures(features_PopulationMBMC_2);
var lyr_PopulationMBMC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PopulationMBMC_2, 
                style: style_PopulationMBMC_2,
                popuplayertitle: "Population MBMC",
                interactive: true,
    title: 'Population MBMC<br />\
    <img src="styles/legend/PopulationMBMC_2_0.png" /> 1 - 2069<br />\
    <img src="styles/legend/PopulationMBMC_2_1.png" /> 2069 - 4137<br />\
    <img src="styles/legend/PopulationMBMC_2_2.png" /> 4137 - 6205<br />\
    <img src="styles/legend/PopulationMBMC_2_3.png" /> 6205 - 8274<br />\
    <img src="styles/legend/PopulationMBMC_2_4.png" /> 8274 - 10342<br />\
    <img src="styles/legend/PopulationMBMC_2_5.png" /> 10342 - 12410<br />\
    <img src="styles/legend/PopulationMBMC_2_6.png" /> 12410 - 14478<br />\
    <img src="styles/legend/PopulationMBMC_2_7.png" /> 14478 - 16546<br />\
    <img src="styles/legend/PopulationMBMC_2_8.png" /> 16546 - 18614<br />\
    <img src="styles/legend/PopulationMBMC_2_9.png" /> 18614 - 20682<br />\
    <img src="styles/legend/PopulationMBMC_2_10.png" /> 20682 - 22750<br />\
    <img src="styles/legend/PopulationMBMC_2_11.png" /> 22750 - 24819<br />\
    <img src="styles/legend/PopulationMBMC_2_12.png" /> 24819 - 26887<br />\
    <img src="styles/legend/PopulationMBMC_2_13.png" /> 26887 - 28955<br />\
    <img src="styles/legend/PopulationMBMC_2_14.png" /> 28955 - 31023<br />'
        });
var format_RailwayStn_3 = new ol.format.GeoJSON();
var features_RailwayStn_3 = format_RailwayStn_3.readFeatures(json_RailwayStn_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RailwayStn_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RailwayStn_3.addFeatures(features_RailwayStn_3);
var lyr_RailwayStn_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RailwayStn_3, 
                style: style_RailwayStn_3,
                popuplayertitle: "Railway Stn",
                interactive: true,
                title: '<img src="styles/legend/RailwayStn_3.png" /> Railway Stn'
            });
var format_GovtOffice_4 = new ol.format.GeoJSON();
var features_GovtOffice_4 = format_GovtOffice_4.readFeatures(json_GovtOffice_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GovtOffice_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GovtOffice_4.addFeatures(features_GovtOffice_4);
var lyr_GovtOffice_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GovtOffice_4, 
                style: style_GovtOffice_4,
                popuplayertitle: "Govt Office",
                interactive: true,
                title: '<img src="styles/legend/GovtOffice_4.png" /> Govt Office'
            });
var format_Education_5 = new ol.format.GeoJSON();
var features_Education_5 = format_Education_5.readFeatures(json_Education_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Education_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Education_5.addFeatures(features_Education_5);
var lyr_Education_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Education_5, 
                style: style_Education_5,
                popuplayertitle: "Education",
                interactive: true,
                title: '<img src="styles/legend/Education_5.png" /> Education'
            });
var format_PrivateOffices_6 = new ol.format.GeoJSON();
var features_PrivateOffices_6 = format_PrivateOffices_6.readFeatures(json_PrivateOffices_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrivateOffices_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrivateOffices_6.addFeatures(features_PrivateOffices_6);
var lyr_PrivateOffices_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrivateOffices_6, 
                style: style_PrivateOffices_6,
                popuplayertitle: "Private Offices",
                interactive: true,
                title: '<img src="styles/legend/PrivateOffices_6.png" /> Private Offices'
            });
var format_PSU_7 = new ol.format.GeoJSON();
var features_PSU_7 = format_PSU_7.readFeatures(json_PSU_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PSU_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSU_7.addFeatures(features_PSU_7);
var lyr_PSU_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PSU_7, 
                style: style_PSU_7,
                popuplayertitle: "PSU",
                interactive: true,
                title: '<img src="styles/legend/PSU_7.png" /> PSU'
            });
var format_Temples_8 = new ol.format.GeoJSON();
var features_Temples_8 = format_Temples_8.readFeatures(json_Temples_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Temples_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Temples_8.addFeatures(features_Temples_8);
var lyr_Temples_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Temples_8, 
                style: style_Temples_8,
                popuplayertitle: "Temples",
                interactive: true,
                title: '<img src="styles/legend/Temples_8.png" /> Temples'
            });
var format_Hospitals_9 = new ol.format.GeoJSON();
var features_Hospitals_9 = format_Hospitals_9.readFeatures(json_Hospitals_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospitals_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitals_9.addFeatures(features_Hospitals_9);
var lyr_Hospitals_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospitals_9, 
                style: style_Hospitals_9,
                popuplayertitle: "Hospitals",
                interactive: true,
                title: '<img src="styles/legend/Hospitals_9.png" /> Hospitals'
            });
var format_Signals_10 = new ol.format.GeoJSON();
var features_Signals_10 = format_Signals_10.readFeatures(json_Signals_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Signals_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Signals_10.addFeatures(features_Signals_10);
var lyr_Signals_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Signals_10, 
                style: style_Signals_10,
                popuplayertitle: "Signals",
                interactive: true,
                title: '<img src="styles/legend/Signals_10.png" /> Signals'
            });
var format_MBMCStops_11 = new ol.format.GeoJSON();
var features_MBMCStops_11 = format_MBMCStops_11.readFeatures(json_MBMCStops_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCStops_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCStops_11.addFeatures(features_MBMCStops_11);
var lyr_MBMCStops_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MBMCStops_11, 
                style: style_MBMCStops_11,
                popuplayertitle: "MBMC Stops",
                interactive: true,
                title: '<img src="styles/legend/MBMCStops_11.png" /> MBMC Stops'
            });
var format_StopPopWithinMBMC_12 = new ol.format.GeoJSON();
var features_StopPopWithinMBMC_12 = format_StopPopWithinMBMC_12.readFeatures(json_StopPopWithinMBMC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopPopWithinMBMC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopPopWithinMBMC_12.addFeatures(features_StopPopWithinMBMC_12);
var lyr_StopPopWithinMBMC_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StopPopWithinMBMC_12, 
                style: style_StopPopWithinMBMC_12,
                popuplayertitle: "Stop Pop Within MBMC",
                interactive: true,
                title: '<img src="styles/legend/StopPopWithinMBMC_12.png" /> Stop Pop Within MBMC'
            });
var format_AreaUncovered_13 = new ol.format.GeoJSON();
var features_AreaUncovered_13 = format_AreaUncovered_13.readFeatures(json_AreaUncovered_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaUncovered_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaUncovered_13.addFeatures(features_AreaUncovered_13);
var lyr_AreaUncovered_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaUncovered_13, 
                style: style_AreaUncovered_13,
                popuplayertitle: "Area Uncovered",
                interactive: true,
                title: '<img src="styles/legend/AreaUncovered_13.png" /> Area Uncovered'
            });
var format_MBMCUncoveredPop_14 = new ol.format.GeoJSON();
var features_MBMCUncoveredPop_14 = format_MBMCUncoveredPop_14.readFeatures(json_MBMCUncoveredPop_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCUncoveredPop_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCUncoveredPop_14.addFeatures(features_MBMCUncoveredPop_14);
var lyr_MBMCUncoveredPop_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MBMCUncoveredPop_14, 
                style: style_MBMCUncoveredPop_14,
                popuplayertitle: "MBMC Uncovered Pop",
                interactive: true,
    title: 'MBMC Uncovered Pop<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_0.png" /> 1 - 2069<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_1.png" /> 2069 - 4137<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_2.png" /> 4137 - 6205<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_3.png" /> 6205 - 8274<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_4.png" /> 8274 - 10342<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_5.png" /> 10342 - 12410<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_6.png" /> 12410 - 14478<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_7.png" /> 14478 - 16546<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_8.png" /> 16546 - 18614<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_9.png" /> 18614 - 20682<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_10.png" /> 20682 - 22750<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_11.png" /> 22750 - 24819<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_12.png" /> 24819 - 26887<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_13.png" /> 26887 - 28955<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_14.png" /> 28955 - 31023<br />'
        });
var format_StopsinsideMBMC_15 = new ol.format.GeoJSON();
var features_StopsinsideMBMC_15 = format_StopsinsideMBMC_15.readFeatures(json_StopsinsideMBMC_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsinsideMBMC_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsinsideMBMC_15.addFeatures(features_StopsinsideMBMC_15);
var lyr_StopsinsideMBMC_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StopsinsideMBMC_15, 
                style: style_StopsinsideMBMC_15,
                popuplayertitle: "Stops inside MBMC",
                interactive: true,
                title: '<img src="styles/legend/StopsinsideMBMC_15.png" /> Stops inside MBMC'
            });
var format_StopsInsideMBMCcsv_16 = new ol.format.GeoJSON();
var features_StopsInsideMBMCcsv_16 = format_StopsInsideMBMCcsv_16.readFeatures(json_StopsInsideMBMCcsv_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsInsideMBMCcsv_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsInsideMBMCcsv_16.addFeatures(features_StopsInsideMBMCcsv_16);
var lyr_StopsInsideMBMCcsv_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StopsInsideMBMCcsv_16, 
                style: style_StopsInsideMBMCcsv_16,
                popuplayertitle: "Stops Inside MBMC.csv",
                interactive: true,
                title: 'Stops Inside MBMC.csv'
            });
var format_MBMCRoutesStats_17 = new ol.format.GeoJSON();
var features_MBMCRoutesStats_17 = format_MBMCRoutesStats_17.readFeatures(json_MBMCRoutesStats_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCRoutesStats_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCRoutesStats_17.addFeatures(features_MBMCRoutesStats_17);
var lyr_MBMCRoutesStats_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MBMCRoutesStats_17, 
                style: style_MBMCRoutesStats_17,
                popuplayertitle: "MBMC Routes Stats",
                interactive: true,
    title: 'MBMC Routes Stats<br />\
    <img src="styles/legend/MBMCRoutesStats_17_0.png" /> Route 1<br />\
    <img src="styles/legend/MBMCRoutesStats_17_1.png" /> Route 10<br />\
    <img src="styles/legend/MBMCRoutesStats_17_2.png" /> Route 10 AC<br />\
    <img src="styles/legend/MBMCRoutesStats_17_3.png" /> Route 12<br />\
    <img src="styles/legend/MBMCRoutesStats_17_4.png" /> Route 14<br />\
    <img src="styles/legend/MBMCRoutesStats_17_5.png" /> Route 15<br />\
    <img src="styles/legend/MBMCRoutesStats_17_6.png" /> Route 16<br />\
    <img src="styles/legend/MBMCRoutesStats_17_7.png" /> Route 17<br />\
    <img src="styles/legend/MBMCRoutesStats_17_8.png" /> Route 18<br />\
    <img src="styles/legend/MBMCRoutesStats_17_9.png" /> Route 19<br />\
    <img src="styles/legend/MBMCRoutesStats_17_10.png" /> Route 2<br />\
    <img src="styles/legend/MBMCRoutesStats_17_11.png" /> Route 20<br />\
    <img src="styles/legend/MBMCRoutesStats_17_12.png" /> Route 21<br />\
    <img src="styles/legend/MBMCRoutesStats_17_13.png" /> Route 22<br />\
    <img src="styles/legend/MBMCRoutesStats_17_14.png" /> Route 23<br />\
    <img src="styles/legend/MBMCRoutesStats_17_15.png" /> Route 24<br />\
    <img src="styles/legend/MBMCRoutesStats_17_16.png" /> Route 25<br />\
    <img src="styles/legend/MBMCRoutesStats_17_17.png" /> Route 28<br />\
    <img src="styles/legend/MBMCRoutesStats_17_18.png" /> Route 29<br />\
    <img src="styles/legend/MBMCRoutesStats_17_19.png" /> Route 29 AC<br />\
    <img src="styles/legend/MBMCRoutesStats_17_20.png" /> Route 4<br />\
    <img src="styles/legend/MBMCRoutesStats_17_21.png" /> Route 5<br />\
    <img src="styles/legend/MBMCRoutesStats_17_22.png" /> Route 6<br />\
    <img src="styles/legend/MBMCRoutesStats_17_23.png" /> <br />'
        });
var format_MBMCStopsMapped_18 = new ol.format.GeoJSON();
var features_MBMCStopsMapped_18 = format_MBMCStopsMapped_18.readFeatures(json_MBMCStopsMapped_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCStopsMapped_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCStopsMapped_18.addFeatures(features_MBMCStopsMapped_18);
var lyr_MBMCStopsMapped_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MBMCStopsMapped_18, 
                style: style_MBMCStopsMapped_18,
                popuplayertitle: "MBMC Stops Mapped",
                interactive: true,
    title: 'MBMC Stops Mapped<br />\
    <img src="styles/legend/MBMCStopsMapped_18_0.png" /> Route 1<br />\
    <img src="styles/legend/MBMCStopsMapped_18_1.png" /> Route 10<br />\
    <img src="styles/legend/MBMCStopsMapped_18_2.png" /> Route 10 AC<br />\
    <img src="styles/legend/MBMCStopsMapped_18_3.png" /> Route 12<br />\
    <img src="styles/legend/MBMCStopsMapped_18_4.png" /> Route 14<br />\
    <img src="styles/legend/MBMCStopsMapped_18_5.png" /> Route 15<br />\
    <img src="styles/legend/MBMCStopsMapped_18_6.png" /> Route 16<br />\
    <img src="styles/legend/MBMCStopsMapped_18_7.png" /> Route 17<br />\
    <img src="styles/legend/MBMCStopsMapped_18_8.png" /> Route 18<br />\
    <img src="styles/legend/MBMCStopsMapped_18_9.png" /> Route 19<br />\
    <img src="styles/legend/MBMCStopsMapped_18_10.png" /> Route 2<br />\
    <img src="styles/legend/MBMCStopsMapped_18_11.png" /> Route 20<br />\
    <img src="styles/legend/MBMCStopsMapped_18_12.png" /> Route 21<br />\
    <img src="styles/legend/MBMCStopsMapped_18_13.png" /> Route 22<br />\
    <img src="styles/legend/MBMCStopsMapped_18_14.png" /> Route 23<br />\
    <img src="styles/legend/MBMCStopsMapped_18_15.png" /> Route 24<br />\
    <img src="styles/legend/MBMCStopsMapped_18_16.png" /> Route 25<br />\
    <img src="styles/legend/MBMCStopsMapped_18_17.png" /> Route 28<br />\
    <img src="styles/legend/MBMCStopsMapped_18_18.png" /> Route 29<br />\
    <img src="styles/legend/MBMCStopsMapped_18_19.png" /> Route 29 AC<br />\
    <img src="styles/legend/MBMCStopsMapped_18_20.png" /> Route 4<br />\
    <img src="styles/legend/MBMCStopsMapped_18_21.png" /> Route 5<br />\
    <img src="styles/legend/MBMCStopsMapped_18_22.png" /> Route 6<br />\
    <img src="styles/legend/MBMCStopsMapped_18_23.png" /> <br />'
        });
var format_MBMCTerminals_19 = new ol.format.GeoJSON();
var features_MBMCTerminals_19 = format_MBMCTerminals_19.readFeatures(json_MBMCTerminals_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCTerminals_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCTerminals_19.addFeatures(features_MBMCTerminals_19);
var lyr_MBMCTerminals_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MBMCTerminals_19, 
                style: style_MBMCTerminals_19,
                popuplayertitle: "MBMC Terminals",
                interactive: true,
    title: 'MBMC Terminals<br />\
    <img src="styles/legend/MBMCTerminals_19_0.png" /> Adani Power House<br />\
    <img src="styles/legend/MBMCTerminals_19_1.png" /> Bhayandar Station East<br />\
    <img src="styles/legend/MBMCTerminals_19_2.png" /> Bhayandar Station West<br />\
    <img src="styles/legend/MBMCTerminals_19_3.png" /> Borivali National Park<br />\
    <img src="styles/legend/MBMCTerminals_19_4.png" /> Borivali Railway Station<br />\
    <img src="styles/legend/MBMCTerminals_19_5.png" /> Chimaji Appa Chouk<br />\
    <img src="styles/legend/MBMCTerminals_19_6.png" /> GCC School<br />\
    <img src="styles/legend/MBMCTerminals_19_7.png" /> GHARTAN PADA<br />\
    <img src="styles/legend/MBMCTerminals_19_8.png" /> Ghodbunder Depot<br />\
    <img src="styles/legend/MBMCTerminals_19_9.png" /> Golden Nest<br />\
    <img src="styles/legend/MBMCTerminals_19_10.png" /> Jain Mandir 2<br />\
    <img src="styles/legend/MBMCTerminals_19_11.png" /> Jogeshwari station West<br />\
    <img src="styles/legend/MBMCTerminals_19_12.png" /> JP Infra<br />\
    <img src="styles/legend/MBMCTerminals_19_13.png" /> Kashimira<br />\
    <img src="styles/legend/MBMCTerminals_19_14.png" /> KD Empire<br />\
    <img src="styles/legend/MBMCTerminals_19_15.png" /> Manori Tar<br />\
    <img src="styles/legend/MBMCTerminals_19_16.png" /> Mira Road Station<br />\
    <img src="styles/legend/MBMCTerminals_19_17.png" /> Modern Company<br />\
    <img src="styles/legend/MBMCTerminals_19_18.png" /> Morva Bhat<br />\
    <img src="styles/legend/MBMCTerminals_19_19.png" /> MTNL Office<br />\
    <img src="styles/legend/MBMCTerminals_19_20.png" /> Nagar Bhavan Mandi talav<br />\
    <img src="styles/legend/MBMCTerminals_19_21.png" /> Pagoda<br />\
    <img src="styles/legend/MBMCTerminals_19_22.png" /> POONAM SAGAR<br />\
    <img src="styles/legend/MBMCTerminals_19_23.png" /> Prakshal<br />\
    <img src="styles/legend/MBMCTerminals_19_24.png" /> RAM NAGAR<br />\
    <img src="styles/legend/MBMCTerminals_19_25.png" /> RASHMI COMPLEX<br />\
    <img src="styles/legend/MBMCTerminals_19_26.png" /> S.K STONE POLICE STATION<br />\
    <img src="styles/legend/MBMCTerminals_19_27.png" /> Salasar Nagar<br />\
    <img src="styles/legend/MBMCTerminals_19_28.png" /> Shantiwan<br />\
    <img src="styles/legend/MBMCTerminals_19_29.png" /> Silver Park<br />\
    <img src="styles/legend/MBMCTerminals_19_30.png" /> Swa Praful Patil Chowk Indralok Naka<br />\
    <img src="styles/legend/MBMCTerminals_19_31.png" /> Thane Station East Kopri<br />\
    <img src="styles/legend/MBMCTerminals_19_32.png" /> Tiwari College<br />\
    <img src="styles/legend/MBMCTerminals_19_33.png" /> Tunga Hospital<br />\
    <img src="styles/legend/MBMCTerminals_19_34.png" /> Uttan Naka<br />\
    <img src="styles/legend/MBMCTerminals_19_35.png" /> Vinay Nagar<br />\
    <img src="styles/legend/MBMCTerminals_19_36.png" /> Western Park E.<br />\
    <img src="styles/legend/MBMCTerminals_19_37.png" /> <br />'
        });
var format_Rt5CurrentStopPop10Min_20 = new ol.format.GeoJSON();
var features_Rt5CurrentStopPop10Min_20 = format_Rt5CurrentStopPop10Min_20.readFeatures(json_Rt5CurrentStopPop10Min_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt5CurrentStopPop10Min_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt5CurrentStopPop10Min_20.addFeatures(features_Rt5CurrentStopPop10Min_20);
var lyr_Rt5CurrentStopPop10Min_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt5CurrentStopPop10Min_20, 
                style: style_Rt5CurrentStopPop10Min_20,
                popuplayertitle: "Rt 5 Current Stop Pop 10 Min",
                interactive: true,
                title: '<img src="styles/legend/Rt5CurrentStopPop10Min_20.png" /> Rt 5 Current Stop Pop 10 Min'
            });
var format_Rt5CurrentStopPop10MinDissolved_21 = new ol.format.GeoJSON();
var features_Rt5CurrentStopPop10MinDissolved_21 = format_Rt5CurrentStopPop10MinDissolved_21.readFeatures(json_Rt5CurrentStopPop10MinDissolved_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt5CurrentStopPop10MinDissolved_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt5CurrentStopPop10MinDissolved_21.addFeatures(features_Rt5CurrentStopPop10MinDissolved_21);
var lyr_Rt5CurrentStopPop10MinDissolved_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt5CurrentStopPop10MinDissolved_21, 
                style: style_Rt5CurrentStopPop10MinDissolved_21,
                popuplayertitle: "Rt 5 Current Stop Pop 10 Min Dissolved",
                interactive: true,
                title: '<img src="styles/legend/Rt5CurrentStopPop10MinDissolved_21.png" /> Rt 5 Current Stop Pop 10 Min Dissolved'
            });
var format_Rt5StopPopCurrent5Min_22 = new ol.format.GeoJSON();
var features_Rt5StopPopCurrent5Min_22 = format_Rt5StopPopCurrent5Min_22.readFeatures(json_Rt5StopPopCurrent5Min_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt5StopPopCurrent5Min_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt5StopPopCurrent5Min_22.addFeatures(features_Rt5StopPopCurrent5Min_22);
var lyr_Rt5StopPopCurrent5Min_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt5StopPopCurrent5Min_22, 
                style: style_Rt5StopPopCurrent5Min_22,
                popuplayertitle: "Rt 5 Stop Pop Current 5 Min",
                interactive: true,
    title: 'Rt 5 Stop Pop Current 5 Min<br />\
    <img src="styles/legend/Rt5StopPopCurrent5Min_22_0.png" /> 5 min<br />'
        });
var format_Rt5CurrentStopPop5MinDissolved_23 = new ol.format.GeoJSON();
var features_Rt5CurrentStopPop5MinDissolved_23 = format_Rt5CurrentStopPop5MinDissolved_23.readFeatures(json_Rt5CurrentStopPop5MinDissolved_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt5CurrentStopPop5MinDissolved_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt5CurrentStopPop5MinDissolved_23.addFeatures(features_Rt5CurrentStopPop5MinDissolved_23);
var lyr_Rt5CurrentStopPop5MinDissolved_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt5CurrentStopPop5MinDissolved_23, 
                style: style_Rt5CurrentStopPop5MinDissolved_23,
                popuplayertitle: "Rt 5 Current Stop Pop 5 Min Dissolved",
                interactive: true,
                title: '<img src="styles/legend/Rt5CurrentStopPop5MinDissolved_23.png" /> Rt 5 Current Stop Pop 5 Min Dissolved'
            });
var format_Rt5CurrentPop250mtr_24 = new ol.format.GeoJSON();
var features_Rt5CurrentPop250mtr_24 = format_Rt5CurrentPop250mtr_24.readFeatures(json_Rt5CurrentPop250mtr_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt5CurrentPop250mtr_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt5CurrentPop250mtr_24.addFeatures(features_Rt5CurrentPop250mtr_24);
var lyr_Rt5CurrentPop250mtr_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt5CurrentPop250mtr_24, 
                style: style_Rt5CurrentPop250mtr_24,
                popuplayertitle: "Rt 5 Current Pop 250 mtr",
                interactive: true,
                title: '<img src="styles/legend/Rt5CurrentPop250mtr_24.png" /> Rt 5 Current Pop 250 mtr'
            });
var format_Rt5CurrentMtrs_25 = new ol.format.GeoJSON();
var features_Rt5CurrentMtrs_25 = format_Rt5CurrentMtrs_25.readFeatures(json_Rt5CurrentMtrs_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt5CurrentMtrs_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt5CurrentMtrs_25.addFeatures(features_Rt5CurrentMtrs_25);
var lyr_Rt5CurrentMtrs_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt5CurrentMtrs_25, 
                style: style_Rt5CurrentMtrs_25,
                popuplayertitle: "Rt 5 Current Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Rt5CurrentMtrs_25.png" /> Rt 5 Current Mtrs'
            });
var format_Rt5CurrentStops_26 = new ol.format.GeoJSON();
var features_Rt5CurrentStops_26 = format_Rt5CurrentStops_26.readFeatures(json_Rt5CurrentStops_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt5CurrentStops_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt5CurrentStops_26.addFeatures(features_Rt5CurrentStops_26);
var lyr_Rt5CurrentStops_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt5CurrentStops_26, 
                style: style_Rt5CurrentStops_26,
                popuplayertitle: "Rt 5 Current Stops",
                interactive: true,
    title: 'Rt 5 Current Stops<br />\
    <img src="styles/legend/Rt5CurrentStops_26_0.png" /> Ashoka Hotel<br />\
    <img src="styles/legend/Rt5CurrentStops_26_1.png" /> Ayyappa Mandir ,S K Stone<br />\
    <img src="styles/legend/Rt5CurrentStops_26_2.png" /> Balaji Nagar<br />\
    <img src="styles/legend/Rt5CurrentStops_26_3.png" /> Bhayandar Station West<br />\
    <img src="styles/legend/Rt5CurrentStops_26_4.png" /> Bishop School<br />\
    <img src="styles/legend/Rt5CurrentStops_26_5.png" /> Bombay Market<br />\
    <img src="styles/legend/Rt5CurrentStops_26_6.png" /> Chaitanya Petrol Pump<br />\
    <img src="styles/legend/Rt5CurrentStops_26_7.png" /> Cross Garden<br />\
    <img src="styles/legend/Rt5CurrentStops_26_8.png" /> Deepak Hospital<br />\
    <img src="styles/legend/Rt5CurrentStops_26_9.png" /> Golden Nest<br />\
    <img src="styles/legend/Rt5CurrentStops_26_10.png" /> Golden Nest Circle<br />\
    <img src="styles/legend/Rt5CurrentStops_26_11.png" /> Hatkesh<br />\
    <img src="styles/legend/Rt5CurrentStops_26_12.png" /> Jain mandir<br />\
    <img src="styles/legend/Rt5CurrentStops_26_13.png" /> Kashimira<br />\
    <img src="styles/legend/Rt5CurrentStops_26_14.png" /> Maxus Mall<br />\
    <img src="styles/legend/Rt5CurrentStops_26_15.png" /> MBMC Head Office<br />\
    <img src="styles/legend/Rt5CurrentStops_26_16.png" /> Nagar Bhavan Mandi talav<br />\
    <img src="styles/legend/Rt5CurrentStops_26_17.png" /> Old Petrol Pump<br />\
    <img src="styles/legend/Rt5CurrentStops_26_18.png" /> PLEASANT PARK<br />\
    <img src="styles/legend/Rt5CurrentStops_26_19.png" /> S.K STONE POLICE STATION<br />\
    <img src="styles/legend/Rt5CurrentStops_26_20.png" /> Sahyadri Nagar<br />\
    <img src="styles/legend/Rt5CurrentStops_26_21.png" /> Shreenath Complex<br />\
    <img src="styles/legend/Rt5CurrentStops_26_22.png" /> Silver Park<br />\
    <img src="styles/legend/Rt5CurrentStops_26_23.png" /> Sundar Nagar<br />\
    <img src="styles/legend/Rt5CurrentStops_26_24.png" /> Temba Hospital<br />\
    <img src="styles/legend/Rt5CurrentStops_26_25.png" /> <br />'
        });
var format_Rt5RecomStopPop10Min_27 = new ol.format.GeoJSON();
var features_Rt5RecomStopPop10Min_27 = format_Rt5RecomStopPop10Min_27.readFeatures(json_Rt5RecomStopPop10Min_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt5RecomStopPop10Min_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt5RecomStopPop10Min_27.addFeatures(features_Rt5RecomStopPop10Min_27);
var lyr_Rt5RecomStopPop10Min_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt5RecomStopPop10Min_27, 
                style: style_Rt5RecomStopPop10Min_27,
                popuplayertitle: "Rt 5 Recom Stop Pop 10 Min",
                interactive: true,
                title: '<img src="styles/legend/Rt5RecomStopPop10Min_27.png" /> Rt 5 Recom Stop Pop 10 Min'
            });
var format_Rt5RecomStopPop10MinDissolved_28 = new ol.format.GeoJSON();
var features_Rt5RecomStopPop10MinDissolved_28 = format_Rt5RecomStopPop10MinDissolved_28.readFeatures(json_Rt5RecomStopPop10MinDissolved_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt5RecomStopPop10MinDissolved_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt5RecomStopPop10MinDissolved_28.addFeatures(features_Rt5RecomStopPop10MinDissolved_28);
var lyr_Rt5RecomStopPop10MinDissolved_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt5RecomStopPop10MinDissolved_28, 
                style: style_Rt5RecomStopPop10MinDissolved_28,
                popuplayertitle: "Rt 5 Recom Stop Pop 10 Min Dissolved",
                interactive: true,
                title: '<img src="styles/legend/Rt5RecomStopPop10MinDissolved_28.png" /> Rt 5 Recom Stop Pop 10 Min Dissolved'
            });
var format_Rt5RecomStopPop5Min_29 = new ol.format.GeoJSON();
var features_Rt5RecomStopPop5Min_29 = format_Rt5RecomStopPop5Min_29.readFeatures(json_Rt5RecomStopPop5Min_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt5RecomStopPop5Min_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt5RecomStopPop5Min_29.addFeatures(features_Rt5RecomStopPop5Min_29);
var lyr_Rt5RecomStopPop5Min_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt5RecomStopPop5Min_29, 
                style: style_Rt5RecomStopPop5Min_29,
                popuplayertitle: "Rt 5 Recom Stop Pop 5 Min",
                interactive: true,
                title: '<img src="styles/legend/Rt5RecomStopPop5Min_29.png" /> Rt 5 Recom Stop Pop 5 Min'
            });
var format_Rt5RecomStopPop5MinDissolved_30 = new ol.format.GeoJSON();
var features_Rt5RecomStopPop5MinDissolved_30 = format_Rt5RecomStopPop5MinDissolved_30.readFeatures(json_Rt5RecomStopPop5MinDissolved_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt5RecomStopPop5MinDissolved_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt5RecomStopPop5MinDissolved_30.addFeatures(features_Rt5RecomStopPop5MinDissolved_30);
var lyr_Rt5RecomStopPop5MinDissolved_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt5RecomStopPop5MinDissolved_30, 
                style: style_Rt5RecomStopPop5MinDissolved_30,
                popuplayertitle: "Rt 5 Recom Stop Pop 5 Min Dissolved",
                interactive: true,
                title: '<img src="styles/legend/Rt5RecomStopPop5MinDissolved_30.png" /> Rt 5 Recom Stop Pop 5 Min Dissolved'
            });
var format_Rt5RecomPop250Mtrs_31 = new ol.format.GeoJSON();
var features_Rt5RecomPop250Mtrs_31 = format_Rt5RecomPop250Mtrs_31.readFeatures(json_Rt5RecomPop250Mtrs_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt5RecomPop250Mtrs_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt5RecomPop250Mtrs_31.addFeatures(features_Rt5RecomPop250Mtrs_31);
var lyr_Rt5RecomPop250Mtrs_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt5RecomPop250Mtrs_31, 
                style: style_Rt5RecomPop250Mtrs_31,
                popuplayertitle: "Rt 5 Recom Pop 250 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Rt5RecomPop250Mtrs_31.png" /> Rt 5 Recom Pop 250 Mtrs'
            });
var format_Rt5RecomPop100Mtrs_32 = new ol.format.GeoJSON();
var features_Rt5RecomPop100Mtrs_32 = format_Rt5RecomPop100Mtrs_32.readFeatures(json_Rt5RecomPop100Mtrs_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt5RecomPop100Mtrs_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt5RecomPop100Mtrs_32.addFeatures(features_Rt5RecomPop100Mtrs_32);
var lyr_Rt5RecomPop100Mtrs_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt5RecomPop100Mtrs_32, 
                style: style_Rt5RecomPop100Mtrs_32,
                popuplayertitle: "Rt 5 Recom Pop 100 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Rt5RecomPop100Mtrs_32.png" /> Rt 5 Recom Pop 100 Mtrs'
            });
var format_Rt5RecomMtrs_33 = new ol.format.GeoJSON();
var features_Rt5RecomMtrs_33 = format_Rt5RecomMtrs_33.readFeatures(json_Rt5RecomMtrs_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt5RecomMtrs_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt5RecomMtrs_33.addFeatures(features_Rt5RecomMtrs_33);
var lyr_Rt5RecomMtrs_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt5RecomMtrs_33, 
                style: style_Rt5RecomMtrs_33,
                popuplayertitle: "Rt 5 Recom Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Rt5RecomMtrs_33.png" /> Rt 5 Recom Mtrs'
            });
var format_Rt5RecomStops_34 = new ol.format.GeoJSON();
var features_Rt5RecomStops_34 = format_Rt5RecomStops_34.readFeatures(json_Rt5RecomStops_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt5RecomStops_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt5RecomStops_34.addFeatures(features_Rt5RecomStops_34);
var lyr_Rt5RecomStops_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt5RecomStops_34, 
                style: style_Rt5RecomStops_34,
                popuplayertitle: "Rt 5 Recom Stops",
                interactive: true,
    title: 'Rt 5 Recom Stops<br />\
    <img src="styles/legend/Rt5RecomStops_34_0.png" /> 0<br />\
    <img src="styles/legend/Rt5RecomStops_34_1.png" /> 370.000000000000000<br />\
    <img src="styles/legend/Rt5RecomStops_34_2.png" /> 740.000000000000000<br />\
    <img src="styles/legend/Rt5RecomStops_34_3.png" /> 1110.000000000000000<br />\
    <img src="styles/legend/Rt5RecomStops_34_4.png" /> 1480.000000000000000<br />\
    <img src="styles/legend/Rt5RecomStops_34_5.png" /> 1850.000000000000000<br />\
    <img src="styles/legend/Rt5RecomStops_34_6.png" /> 2220.000000000000000<br />\
    <img src="styles/legend/Rt5RecomStops_34_7.png" /> 2590.000000000000000<br />\
    <img src="styles/legend/Rt5RecomStops_34_8.png" /> 2960.000000000000000<br />\
    <img src="styles/legend/Rt5RecomStops_34_9.png" /> 3330.000000000000000<br />\
    <img src="styles/legend/Rt5RecomStops_34_10.png" /> 3700.000000000000000<br />\
    <img src="styles/legend/Rt5RecomStops_34_11.png" /> 4070.000000000000000<br />\
    <img src="styles/legend/Rt5RecomStops_34_12.png" /> 4440.000000000000000<br />\
    <img src="styles/legend/Rt5RecomStops_34_13.png" /> 4810.000000000000000<br />\
    <img src="styles/legend/Rt5RecomStops_34_14.png" /> 5180.000000000000000<br />\
    <img src="styles/legend/Rt5RecomStops_34_15.png" /> 5550.000000000000000<br />\
    <img src="styles/legend/Rt5RecomStops_34_16.png" /> 5920.000000000000000<br />\
    <img src="styles/legend/Rt5RecomStops_34_17.png" /> 6290.000000000000000<br />\
    <img src="styles/legend/Rt5RecomStops_34_18.png" /> 6660.000000000000000<br />\
    <img src="styles/legend/Rt5RecomStops_34_19.png" /> 7030.000000000000000<br />\
    <img src="styles/legend/Rt5RecomStops_34_20.png" /> 7400.000000000000000<br />\
    <img src="styles/legend/Rt5RecomStops_34_21.png" /> 7770.000000000000000<br />\
    <img src="styles/legend/Rt5RecomStops_34_22.png" /> 8140.000000000000000<br />\
    <img src="styles/legend/Rt5RecomStops_34_23.png" /> 8510.000000000000000<br />\
    <img src="styles/legend/Rt5RecomStops_34_24.png" /> 8880.000000000000000<br />\
    <img src="styles/legend/Rt5RecomStops_34_25.png" /> <br />'
        });
var format_Rt5CurrentStopOptions_35 = new ol.format.GeoJSON();
var features_Rt5CurrentStopOptions_35 = format_Rt5CurrentStopOptions_35.readFeatures(json_Rt5CurrentStopOptions_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt5CurrentStopOptions_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt5CurrentStopOptions_35.addFeatures(features_Rt5CurrentStopOptions_35);
var lyr_Rt5CurrentStopOptions_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt5CurrentStopOptions_35, 
                style: style_Rt5CurrentStopOptions_35,
                popuplayertitle: "Rt 5 Current Stop Options",
                interactive: true,
                title: '<img src="styles/legend/Rt5CurrentStopOptions_35.png" /> Rt 5 Current Stop Options'
            });
var format_MBMCRt5Stopstobechangedxlsx_36 = new ol.format.GeoJSON();
var features_MBMCRt5Stopstobechangedxlsx_36 = format_MBMCRt5Stopstobechangedxlsx_36.readFeatures(json_MBMCRt5Stopstobechangedxlsx_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCRt5Stopstobechangedxlsx_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCRt5Stopstobechangedxlsx_36.addFeatures(features_MBMCRt5Stopstobechangedxlsx_36);
var lyr_MBMCRt5Stopstobechangedxlsx_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MBMCRt5Stopstobechangedxlsx_36, 
                style: style_MBMCRt5Stopstobechangedxlsx_36,
                popuplayertitle: "MBMC Rt 5 Stops to be changed.xlsx",
                interactive: true,
                title: '<img src="styles/legend/MBMCRt5Stopstobechangedxlsx_36.png" /> MBMC Rt 5 Stops to be changed.xlsx'
            });
var format_MBMCRt5Changedstopsxlsx_37 = new ol.format.GeoJSON();
var features_MBMCRt5Changedstopsxlsx_37 = format_MBMCRt5Changedstopsxlsx_37.readFeatures(json_MBMCRt5Changedstopsxlsx_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCRt5Changedstopsxlsx_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCRt5Changedstopsxlsx_37.addFeatures(features_MBMCRt5Changedstopsxlsx_37);
var lyr_MBMCRt5Changedstopsxlsx_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MBMCRt5Changedstopsxlsx_37, 
                style: style_MBMCRt5Changedstopsxlsx_37,
                popuplayertitle: "MBMC Rt 5 Changed stops.xlsx",
                interactive: true,
                title: '<img src="styles/legend/MBMCRt5Changedstopsxlsx_37.png" /> MBMC Rt 5 Changed stops.xlsx'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_MBMCWealthIndex_1.setVisible(true);lyr_PopulationMBMC_2.setVisible(true);lyr_RailwayStn_3.setVisible(true);lyr_GovtOffice_4.setVisible(true);lyr_Education_5.setVisible(true);lyr_PrivateOffices_6.setVisible(true);lyr_PSU_7.setVisible(true);lyr_Temples_8.setVisible(true);lyr_Hospitals_9.setVisible(true);lyr_Signals_10.setVisible(true);lyr_MBMCStops_11.setVisible(true);lyr_StopPopWithinMBMC_12.setVisible(true);lyr_AreaUncovered_13.setVisible(true);lyr_MBMCUncoveredPop_14.setVisible(true);lyr_StopsinsideMBMC_15.setVisible(true);lyr_StopsInsideMBMCcsv_16.setVisible(true);lyr_MBMCRoutesStats_17.setVisible(true);lyr_MBMCStopsMapped_18.setVisible(true);lyr_MBMCTerminals_19.setVisible(true);lyr_Rt5CurrentStopPop10Min_20.setVisible(true);lyr_Rt5CurrentStopPop10MinDissolved_21.setVisible(true);lyr_Rt5StopPopCurrent5Min_22.setVisible(true);lyr_Rt5CurrentStopPop5MinDissolved_23.setVisible(true);lyr_Rt5CurrentPop250mtr_24.setVisible(true);lyr_Rt5CurrentMtrs_25.setVisible(true);lyr_Rt5CurrentStops_26.setVisible(true);lyr_Rt5RecomStopPop10Min_27.setVisible(true);lyr_Rt5RecomStopPop10MinDissolved_28.setVisible(true);lyr_Rt5RecomStopPop5Min_29.setVisible(true);lyr_Rt5RecomStopPop5MinDissolved_30.setVisible(true);lyr_Rt5RecomPop250Mtrs_31.setVisible(true);lyr_Rt5RecomPop100Mtrs_32.setVisible(true);lyr_Rt5RecomMtrs_33.setVisible(true);lyr_Rt5RecomStops_34.setVisible(true);lyr_Rt5CurrentStopOptions_35.setVisible(true);lyr_MBMCRt5Stopstobechangedxlsx_36.setVisible(true);lyr_MBMCRt5Changedstopsxlsx_37.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MBMCWealthIndex_1,lyr_PopulationMBMC_2,lyr_RailwayStn_3,lyr_GovtOffice_4,lyr_Education_5,lyr_PrivateOffices_6,lyr_PSU_7,lyr_Temples_8,lyr_Hospitals_9,lyr_Signals_10,lyr_MBMCStops_11,lyr_StopPopWithinMBMC_12,lyr_AreaUncovered_13,lyr_MBMCUncoveredPop_14,lyr_StopsinsideMBMC_15,lyr_StopsInsideMBMCcsv_16,lyr_MBMCRoutesStats_17,lyr_MBMCStopsMapped_18,lyr_MBMCTerminals_19,lyr_Rt5CurrentStopPop10Min_20,lyr_Rt5CurrentStopPop10MinDissolved_21,lyr_Rt5StopPopCurrent5Min_22,lyr_Rt5CurrentStopPop5MinDissolved_23,lyr_Rt5CurrentPop250mtr_24,lyr_Rt5CurrentMtrs_25,lyr_Rt5CurrentStops_26,lyr_Rt5RecomStopPop10Min_27,lyr_Rt5RecomStopPop10MinDissolved_28,lyr_Rt5RecomStopPop5Min_29,lyr_Rt5RecomStopPop5MinDissolved_30,lyr_Rt5RecomPop250Mtrs_31,lyr_Rt5RecomPop100Mtrs_32,lyr_Rt5RecomMtrs_33,lyr_Rt5RecomStops_34,lyr_Rt5CurrentStopOptions_35,lyr_MBMCRt5Stopstobechangedxlsx_36,lyr_MBMCRt5Changedstopsxlsx_37];
lyr_MBMCWealthIndex_1.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', 'shapeName': 'shapeName', 'Area KM': 'Area KM', 'Perimeter': 'Perimeter', 'Pop': 'Pop', 'Pop/Km2': 'Pop/Km2', });
lyr_PopulationMBMC_2.set('fieldAliases', {'fid': 'fid', 'h3': 'h3', 'population': 'population', 'shapeName': 'shapeName', 'Area KM': 'Area KM', 'Perimeter': 'Perimeter', 'Pop': 'Pop', 'Pop/Km2': 'Pop/Km2', });
lyr_RailwayStn_3.set('fieldAliases', {'network': 'network', 'name': 'name', });
lyr_GovtOffice_4.set('fieldAliases', {'addr_state': 'addr_state', 'addr_full': 'addr_full', 'addr_distr': 'addr_distr', 'website': 'website', 'phone': 'phone', 'opening_ho': 'opening_ho', 'descriptio': 'descriptio', 'name_en': 'name_en', 'amenity': 'amenity', 'name_hi': 'name_hi', 'addr_house': 'addr_house', 'layer': 'layer', });
lyr_Education_5.set('fieldAliases', {'amenity': 'amenity', 'name': 'name', });
lyr_PrivateOffices_6.set('fieldAliases', {'office': 'office', 'name': 'name', });
lyr_PSU_7.set('fieldAliases', {'amenity': 'amenity', 'name': 'name', });
lyr_Temples_8.set('fieldAliases', {'religion': 'religion', 'amenity': 'amenity', 'name': 'name', });
lyr_Hospitals_9.set('fieldAliases', {'amenity': 'amenity', 'addr_full': 'addr_full', 'name': 'name', });
lyr_Signals_10.set('fieldAliases', {'highway': 'highway', });
lyr_MBMCStops_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Sr__No_': 'Sr__No_', 'Depot_Name': 'Depot_Name', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_StopPopWithinMBMC_12.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_AreaUncovered_13.set('fieldAliases', {'shapeName': 'shapeName', 'Area KM': 'Area KM', 'Perimeter': 'Perimeter', 'Pop_2': 'Pop_2', 'Pop/Km2': 'Pop/Km2', 'Area UC KM': 'Area UC KM', 'Peri UC KM': 'Peri UC KM', 'Pop UC': 'Pop UC', 'NoCoverage': 'NoCoverage', });
lyr_MBMCUncoveredPop_14.set('fieldAliases', {'fid': 'fid', 'h3': 'h3', 'population': 'population', 'shapeName': 'shapeName', 'Area KM': 'Area KM', 'Perimeter': 'Perimeter', 'Pop_2': 'Pop_2', 'Pop/Km2': 'Pop/Km2', 'Area UC KM': 'Area UC KM', 'Peri UC KM': 'Peri UC KM', 'Pop UC': 'Pop UC', 'NoCoverage': 'NoCoverage', });
lyr_StopsinsideMBMC_15.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Sr__No_': 'Sr__No_', 'Depot_Name': 'Depot_Name', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'shapeName': 'shapeName', 'Area KM': 'Area KM', 'Perimeter': 'Perimeter', 'Pop': 'Pop', 'Pop/Km2': 'Pop/Km2', });
lyr_StopsInsideMBMCcsv_16.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descriptio': 'descriptio', 'altitudeMo': 'altitudeMo', 'Sr__No_': 'Sr__No_', 'Depot_Name': 'Depot_Name', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'shapeName': 'shapeName', 'Area_KM': 'Area_KM', 'Perimeter': 'Perimeter', 'Pop': 'Pop', 'Pop_Km2': 'Pop_Km2', });
lyr_MBMCRoutesStats_17.set('fieldAliases', {'Name': 'Name', 'Length Km': 'Length Km', });
lyr_MBMCStopsMapped_18.set('fieldAliases', {'Name': 'Name', 'Sr__No_': 'Sr__No_', 'Depot_Name': 'Depot_Name', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'Name_2': 'Name_2', 'Length Km': 'Length Km', });
lyr_MBMCTerminals_19.set('fieldAliases', {'Name': 'Name', 'layer': 'layer', });
lyr_Rt5CurrentStopPop10Min_20.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Rt5CurrentStopPop10MinDissolved_21.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', });
lyr_Rt5StopPopCurrent5Min_22.set('fieldAliases', {'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Rt5CurrentStopPop5MinDissolved_23.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', });
lyr_Rt5CurrentPop250mtr_24.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', });
lyr_Rt5CurrentMtrs_25.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', });
lyr_Rt5CurrentStops_26.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_Rt5RecomStopPop10Min_27.set('fieldAliases', {'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Rt5RecomStopPop10MinDissolved_28.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', });
lyr_Rt5RecomStopPop5Min_29.set('fieldAliases', {'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Rt5RecomStopPop5MinDissolved_30.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', });
lyr_Rt5RecomPop250Mtrs_31.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', });
lyr_Rt5RecomPop100Mtrs_32.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', });
lyr_Rt5RecomMtrs_33.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', });
lyr_Rt5RecomStops_34.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'distance': 'distance', 'angle': 'angle', });
lyr_Rt5CurrentStopOptions_35.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'angle': 'angle', 'Distance': 'Distance', });
lyr_MBMCRt5Stopstobechangedxlsx_36.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'TOTAL_POP': 'TOTAL_POP', });
lyr_MBMCRt5Changedstopsxlsx_37.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'TOTAL_POP': 'TOTAL_POP', 'Difference': 'Difference', 'Difference__': 'Difference__', });
lyr_MBMCWealthIndex_1.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', 'shapeName': 'TextEdit', 'Area KM': 'TextEdit', 'Perimeter': 'TextEdit', 'Pop': 'TextEdit', 'Pop/Km2': 'TextEdit', });
lyr_PopulationMBMC_2.set('fieldImages', {'fid': 'TextEdit', 'h3': 'TextEdit', 'population': 'TextEdit', 'shapeName': 'TextEdit', 'Area KM': 'TextEdit', 'Perimeter': 'TextEdit', 'Pop': 'TextEdit', 'Pop/Km2': 'TextEdit', });
lyr_RailwayStn_3.set('fieldImages', {'network': 'TextEdit', 'name': 'TextEdit', });
lyr_GovtOffice_4.set('fieldImages', {'addr_state': 'TextEdit', 'addr_full': 'TextEdit', 'addr_distr': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'opening_ho': 'TextEdit', 'descriptio': 'TextEdit', 'name_en': 'TextEdit', 'amenity': 'TextEdit', 'name_hi': 'TextEdit', 'addr_house': 'TextEdit', 'layer': 'TextEdit', });
lyr_Education_5.set('fieldImages', {'amenity': 'TextEdit', 'name': 'TextEdit', });
lyr_PrivateOffices_6.set('fieldImages', {'office': 'TextEdit', 'name': 'TextEdit', });
lyr_PSU_7.set('fieldImages', {'amenity': 'TextEdit', 'name': 'TextEdit', });
lyr_Temples_8.set('fieldImages', {'religion': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', });
lyr_Hospitals_9.set('fieldImages', {'amenity': 'TextEdit', 'addr_full': 'TextEdit', 'name': 'TextEdit', });
lyr_Signals_10.set('fieldImages', {'highway': 'TextEdit', });
lyr_MBMCStops_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Sr__No_': 'TextEdit', 'Depot_Name': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_StopPopWithinMBMC_12.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_AreaUncovered_13.set('fieldImages', {'shapeName': 'TextEdit', 'Area KM': 'TextEdit', 'Perimeter': 'TextEdit', 'Pop_2': 'TextEdit', 'Pop/Km2': 'TextEdit', 'Area UC KM': 'TextEdit', 'Peri UC KM': 'TextEdit', 'Pop UC': 'TextEdit', 'NoCoverage': 'Range', });
lyr_MBMCUncoveredPop_14.set('fieldImages', {'fid': 'TextEdit', 'h3': 'TextEdit', 'population': 'TextEdit', 'shapeName': 'TextEdit', 'Area KM': 'TextEdit', 'Perimeter': 'TextEdit', 'Pop_2': 'TextEdit', 'Pop/Km2': 'TextEdit', 'Area UC KM': 'TextEdit', 'Peri UC KM': 'TextEdit', 'Pop UC': 'TextEdit', 'NoCoverage': 'TextEdit', });
lyr_StopsinsideMBMC_15.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Sr__No_': 'TextEdit', 'Depot_Name': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'shapeName': 'TextEdit', 'Area KM': 'TextEdit', 'Perimeter': 'TextEdit', 'Pop': 'TextEdit', 'Pop/Km2': 'TextEdit', });
lyr_StopsInsideMBMCcsv_16.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'descriptio': '', 'altitudeMo': '', 'Sr__No_': '', 'Depot_Name': '', 'center_lat': '', 'center_lon': '', 'shapeName': '', 'Area_KM': '', 'Perimeter': '', 'Pop': '', 'Pop_Km2': '', });
lyr_MBMCRoutesStats_17.set('fieldImages', {'Name': 'TextEdit', 'Length Km': '', });
lyr_MBMCStopsMapped_18.set('fieldImages', {'Name': 'TextEdit', 'Sr__No_': 'TextEdit', 'Depot_Name': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'Name_2': 'TextEdit', 'Length Km': 'TextEdit', });
lyr_MBMCTerminals_19.set('fieldImages', {'Name': 'TextEdit', 'layer': 'TextEdit', });
lyr_Rt5CurrentStopPop10Min_20.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Rt5CurrentStopPop10MinDissolved_21.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'TextEdit', });
lyr_Rt5StopPopCurrent5Min_22.set('fieldImages', {'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Rt5CurrentStopPop5MinDissolved_23.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'Range', });
lyr_Rt5CurrentPop250mtr_24.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'Range', });
lyr_Rt5CurrentMtrs_25.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', });
lyr_Rt5CurrentStops_26.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Rt5RecomStopPop10Min_27.set('fieldImages', {'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Rt5RecomStopPop10MinDissolved_28.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'Range', });
lyr_Rt5RecomStopPop5Min_29.set('fieldImages', {'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Rt5RecomStopPop5MinDissolved_30.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'Range', });
lyr_Rt5RecomPop250Mtrs_31.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'Range', });
lyr_Rt5RecomPop100Mtrs_32.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'Range', });
lyr_Rt5RecomMtrs_33.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'Range', 'Bus Time': 'Range', });
lyr_Rt5RecomStops_34.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'distance': 'TextEdit', 'angle': 'TextEdit', });
lyr_Rt5CurrentStopOptions_35.set('fieldImages', {'DIST_KM': '', 'DURATION_H': '', 'PROFILE': '', 'PREF': '', 'Drive Time': '', 'Bus Time': '', 'angle': '', 'Distance': '', });
lyr_MBMCRt5Stopstobechangedxlsx_36.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_MBMCRt5Changedstopsxlsx_37.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'Difference': 'TextEdit', 'Difference__': 'TextEdit', });
lyr_MBMCWealthIndex_1.set('fieldLabels', {'latitude': 'inline label - always visible', 'longitude': 'inline label - always visible', 'rwi': 'header label - visible with data', 'error': 'inline label - always visible', 'shapeName': 'inline label - visible with data', 'Area KM': 'inline label - always visible', 'Perimeter': 'inline label - always visible', 'Pop': 'inline label - always visible', 'Pop/Km2': 'header label - visible with data', });
lyr_PopulationMBMC_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'h3': 'inline label - visible with data', 'population': 'header label - always visible', 'shapeName': 'inline label - visible with data', 'Area KM': 'inline label - visible with data', 'Perimeter': 'inline label - visible with data', 'Pop': 'inline label - visible with data', 'Pop/Km2': 'header label - visible with data', });
lyr_RailwayStn_3.set('fieldLabels', {'network': 'header label - visible with data', 'name': 'header label - visible with data', });
lyr_GovtOffice_4.set('fieldLabels', {'addr_state': 'hidden field', 'addr_full': 'hidden field', 'addr_distr': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'opening_ho': 'hidden field', 'descriptio': 'hidden field', 'name_en': 'header label - visible with data', 'amenity': 'hidden field', 'name_hi': 'hidden field', 'addr_house': 'hidden field', 'layer': 'hidden field', });
lyr_Education_5.set('fieldLabels', {'amenity': 'inline label - visible with data', 'name': 'header label - visible with data', });
lyr_PrivateOffices_6.set('fieldLabels', {'office': 'inline label - always visible', 'name': 'header label - always visible', });
lyr_PSU_7.set('fieldLabels', {'amenity': 'inline label - visible with data', 'name': 'header label - visible with data', });
lyr_Temples_8.set('fieldLabels', {'religion': 'inline label - visible with data', 'amenity': 'inline label - visible with data', 'name': 'header label - visible with data', });
lyr_Hospitals_9.set('fieldLabels', {'amenity': 'inline label - visible with data', 'addr_full': 'inline label - visible with data', 'name': 'header label - visible with data', });
lyr_Signals_10.set('fieldLabels', {'highway': 'header label - visible with data', });
lyr_MBMCStops_11.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Sr__No_': 'inline label - visible with data', 'Depot_Name': 'inline label - visible with data', 'center_lat': 'inline label - visible with data', 'center_lon': 'inline label - visible with data', });
lyr_StopPopWithinMBMC_12.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'TOTAL_POP': 'header label - visible with data', });
lyr_AreaUncovered_13.set('fieldLabels', {'shapeName': 'inline label - visible with data', 'Area KM': 'inline label - visible with data', 'Perimeter': 'inline label - visible with data', 'Pop_2': 'inline label - visible with data', 'Pop/Km2': 'inline label - visible with data', 'Area UC KM': 'inline label - visible with data', 'Peri UC KM': 'inline label - visible with data', 'Pop UC': 'inline label - visible with data', 'NoCoverage': 'header label - visible with data', });
lyr_MBMCUncoveredPop_14.set('fieldLabels', {'fid': 'hidden field', 'h3': 'hidden field', 'population': 'header label - visible with data', 'shapeName': 'inline label - visible with data', 'Area KM': 'inline label - visible with data', 'Perimeter': 'inline label - visible with data', 'Pop_2': 'inline label - visible with data', 'Pop/Km2': 'inline label - visible with data', 'Area UC KM': 'inline label - visible with data', 'Peri UC KM': 'inline label - visible with data', 'Pop UC': 'inline label - visible with data', 'NoCoverage': 'header label - visible with data', });
lyr_StopsinsideMBMC_15.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Sr__No_': 'inline label - visible with data', 'Depot_Name': 'inline label - visible with data', 'center_lat': 'inline label - visible with data', 'center_lon': 'inline label - visible with data', 'shapeName': 'inline label - visible with data', 'Area KM': 'inline label - visible with data', 'Perimeter': 'inline label - visible with data', 'Pop': 'inline label - visible with data', 'Pop/Km2': 'inline label - visible with data', });
lyr_StopsInsideMBMCcsv_16.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'descriptio': 'no label', 'altitudeMo': 'no label', 'Sr__No_': 'no label', 'Depot_Name': 'no label', 'center_lat': 'inline label - always visible', 'center_lon': 'inline label - always visible', 'shapeName': 'inline label - always visible', 'Area_KM': 'inline label - always visible', 'Perimeter': 'inline label - always visible', 'Pop': 'inline label - always visible', 'Pop_Km2': 'inline label - always visible', });
lyr_MBMCRoutesStats_17.set('fieldLabels', {'Name': 'header label - visible with data', 'Length Km': 'inline label - visible with data', });
lyr_MBMCStopsMapped_18.set('fieldLabels', {'Name': 'header label - visible with data', 'Sr__No_': 'inline label - visible with data', 'Depot_Name': 'inline label - visible with data', 'center_lat': 'inline label - visible with data', 'center_lon': 'inline label - visible with data', 'Name_2': 'inline label - visible with data', 'Length Km': 'inline label - visible with data', });
lyr_MBMCTerminals_19.set('fieldLabels', {'Name': 'header label - visible with data', 'layer': 'inline label - visible with data', });
lyr_Rt5CurrentStopPop10Min_20.set('fieldLabels', {'ID': 'hidden field', 'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'TOTAL_POP': 'header label - visible with data', });
lyr_Rt5CurrentStopPop10MinDissolved_21.set('fieldLabels', {'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'Pop': 'header label - visible with data', });
lyr_Rt5StopPopCurrent5Min_22.set('fieldLabels', {'CENTER_LON': 'inline label - visible with data', 'CENTER_LAT': 'inline label - visible with data', 'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'TOTAL_POP': 'header label - visible with data', });
lyr_Rt5CurrentStopPop5MinDissolved_23.set('fieldLabels', {'AA_MINS': 'inline label - visible with data', 'AA_MODE': 'inline label - visible with data', 'Pop': 'header label - visible with data', });
lyr_Rt5CurrentPop250mtr_24.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'inline label - visible with data', 'Pop': 'header label - visible with data', });
lyr_Rt5CurrentMtrs_25.set('fieldLabels', {'DIST_KM': 'inline label - visible with data', 'DURATION_H': 'inline label - visible with data', 'PROFILE': 'inline label - visible with data', 'PREF': 'inline label - visible with data', 'Drive Time': 'inline label - visible with data', 'Bus Time': 'header label - visible with data', });
lyr_Rt5CurrentStops_26.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Rt5RecomStopPop10Min_27.set('fieldLabels', {'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'TOTAL_POP': 'header label - visible with data', });
lyr_Rt5RecomStopPop10MinDissolved_28.set('fieldLabels', {'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'Pop': 'header label - visible with data', });
lyr_Rt5RecomStopPop5Min_29.set('fieldLabels', {'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'TOTAL_POP': 'header label - visible with data', });
lyr_Rt5RecomStopPop5MinDissolved_30.set('fieldLabels', {'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'Pop': 'header label - visible with data', });
lyr_Rt5RecomPop250Mtrs_31.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'inline label - always visible', 'Drive Time': 'inline label - always visible', 'Bus Time': 'inline label - always visible', 'Pop': 'header label - visible with data', });
lyr_Rt5RecomPop100Mtrs_32.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'inline label - always visible', 'Drive Time': 'inline label - always visible', 'Bus Time': 'inline label - always visible', 'Pop': 'header label - visible with data', });
lyr_Rt5RecomMtrs_33.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'inline label - always visible', 'Drive Time': 'inline label - always visible', 'Bus Time': 'header label - visible with data', });
lyr_Rt5RecomStops_34.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'inline label - always visible', 'Drive Time': 'inline label - always visible', 'Bus Time': 'inline label - always visible', 'distance': 'header label - visible with data', 'angle': 'no label', });
lyr_Rt5CurrentStopOptions_35.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'inline label - always visible', 'Drive Time': 'inline label - always visible', 'Bus Time': 'inline label - always visible', 'angle': 'no label', 'Distance': 'header label - visible with data', });
lyr_MBMCRt5Stopstobechangedxlsx_36.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'TOTAL_POP': 'header label - visible with data', });
lyr_MBMCRt5Changedstopsxlsx_37.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'TOTAL_POP': 'inline label - always visible', 'Difference': 'inline label - always visible', 'Difference__': 'header label - visible with data', });
lyr_MBMCRt5Changedstopsxlsx_37.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});