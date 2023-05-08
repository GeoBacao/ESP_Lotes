var wms_layers = [];

var format_Lotes_0 = new ol.format.GeoJSON();
var features_Lotes_0 = format_Lotes_0.readFeatures(json_Lotes_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lotes_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lotes_0.addFeatures(features_Lotes_0);
var lyr_Lotes_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lotes_0, 
                style: style_Lotes_0,
                interactive: true,
                title: '<img src="styles/legend/Lotes_0.png" /> Lotes'
            });

lyr_Lotes_0.setVisible(true);
var layersList = [lyr_Lotes_0];
lyr_Lotes_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DEPTO': 'DEPTO', 'MUNICIPIO': 'MUNICIPIO', 'VEREDA': 'VEREDA', 'PROYECTO': 'PROYECTO', 'FINCA': 'FINCA', 'LOTE': 'LOTE', 'ESTADO': 'ESTADO', 'AÑO': 'AÑO', 'VARIEDAD_C': 'VARIEDAD_C', 'COMPOSICIO': 'COMPOSICIO', 'ARREGLO': 'ARREGLO', 'COBERTURA': 'COBERTURA', 'DENSIDAD_C': 'DENSIDAD_C', 'DENSIDAD_S': 'DENSIDAD_S', 'DENSIDAD_M': 'DENSIDAD_M', 'OBSERV': 'OBSERV', 'AREA_ha': 'AREA (ha)', 'Ha_Real': 'Ha_Real', 'Cacao': 'Cacao', 'Estado_NM': 'Estado_NM', 'Abarco': 'ABARCO', 'Mataraton': 'MATARRATON', 'Siembra': 'SIEMBRA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Lotes_0.set('fieldImages', {'OBJECTID': 'Hidden', 'DEPTO': 'Hidden', 'MUNICIPIO': 'Hidden', 'VEREDA': 'Hidden', 'PROYECTO': 'Hidden', 'FINCA': 'TextEdit', 'LOTE': 'TextEdit', 'ESTADO': 'Hidden', 'AÑO': 'Hidden', 'VARIEDAD_C': 'Hidden', 'COMPOSICIO': 'Hidden', 'ARREGLO': 'Hidden', 'COBERTURA': 'Hidden', 'DENSIDAD_C': 'Hidden', 'DENSIDAD_S': 'Hidden', 'DENSIDAD_M': 'Hidden', 'OBSERV': 'Hidden', 'AREA_ha': 'TextEdit', 'Ha_Real': 'Hidden', 'Cacao': 'Hidden', 'Estado_NM': 'Hidden', 'Abarco': 'TextEdit', 'Mataraton': 'TextEdit', 'Siembra': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_Lotes_0.set('fieldLabels', {'FINCA': 'inline label', 'LOTE': 'inline label', 'AREA_ha': 'inline label', 'Abarco': 'inline label', 'Mataraton': 'inline label', 'Siembra': 'inline label', });
lyr_Lotes_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});