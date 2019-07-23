var wms_layers = [];
var lyr_thermal_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "thermal",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/thermal_0.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8695408.800479, 1914684.024729, 8695776.770562, 1914909.420379]
                            })
                        });var format_Diode_failure_1 = new ol.format.GeoJSON();
var features_Diode_failure_1 = format_Diode_failure_1.readFeatures(json_Diode_failure_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Diode_failure_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Diode_failure_1.addFeatures(features_Diode_failure_1);var lyr_Diode_failure_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Diode_failure_1, 
                style: style_Diode_failure_1,
                title: '<img src="styles/legend/Diode_failure_1.png" /> Diode_failure'
            });var format_Hot_spot_2 = new ol.format.GeoJSON();
var features_Hot_spot_2 = format_Hot_spot_2.readFeatures(json_Hot_spot_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hot_spot_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Hot_spot_2.addFeatures(features_Hot_spot_2);var lyr_Hot_spot_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hot_spot_2, 
                style: style_Hot_spot_2,
                title: '<img src="styles/legend/Hot_spot_2.png" /> Hot_spot'
            });var format_Offline_string_3 = new ol.format.GeoJSON();
var features_Offline_string_3 = format_Offline_string_3.readFeatures(json_Offline_string_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Offline_string_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Offline_string_3.addFeatures(features_Offline_string_3);var lyr_Offline_string_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Offline_string_3, 
                style: style_Offline_string_3,
                title: '<img src="styles/legend/Offline_string_3.png" /> Offline_string'
            });var format_Warm_module_4 = new ol.format.GeoJSON();
var features_Warm_module_4 = format_Warm_module_4.readFeatures(json_Warm_module_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Warm_module_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Warm_module_4.addFeatures(features_Warm_module_4);var lyr_Warm_module_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Warm_module_4, 
                style: style_Warm_module_4,
                title: '<img src="styles/legend/Warm_module_4.png" /> Warm_module'
            });

lyr_thermal_0.setVisible(true);lyr_Diode_failure_1.setVisible(true);lyr_Hot_spot_2.setVisible(true);lyr_Offline_string_3.setVisible(true);lyr_Warm_module_4.setVisible(true);
var layersList = [lyr_thermal_0,lyr_Diode_failure_1,lyr_Hot_spot_2,lyr_Offline_string_3,lyr_Warm_module_4];
lyr_Diode_failure_1.set('fieldAliases', {'LAYER': 'LAYER', });
lyr_Hot_spot_2.set('fieldAliases', {'LAYER': 'LAYER', });
lyr_Offline_string_3.set('fieldAliases', {'LAYER': 'LAYER', 'PERIMETER': 'PERIMETER', 'ENCLOSED_A': 'ENCLOSED_A', 'LENGTH': 'LENGTH', 'WIDTH': 'WIDTH', });
lyr_Warm_module_4.set('fieldAliases', {'LAYER': 'LAYER', });
lyr_Diode_failure_1.set('fieldImages', {'LAYER': 'TextEdit', });
lyr_Hot_spot_2.set('fieldImages', {'LAYER': 'TextEdit', });
lyr_Offline_string_3.set('fieldImages', {'LAYER': 'TextEdit', 'PERIMETER': 'TextEdit', 'ENCLOSED_A': 'TextEdit', 'LENGTH': 'TextEdit', 'WIDTH': 'TextEdit', });
lyr_Warm_module_4.set('fieldImages', {'LAYER': 'TextEdit', });
lyr_Diode_failure_1.set('fieldLabels', {'LAYER': 'header label', });
lyr_Hot_spot_2.set('fieldLabels', {'LAYER': 'header label', });
lyr_Offline_string_3.set('fieldLabels', {'LAYER': 'header label', 'PERIMETER': 'header label', 'ENCLOSED_A': 'header label', 'LENGTH': 'header label', 'WIDTH': 'header label', });
lyr_Warm_module_4.set('fieldLabels', {'LAYER': 'header label', });
lyr_Warm_module_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});