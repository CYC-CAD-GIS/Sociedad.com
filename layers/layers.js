var wms_layers = [];


        var lyr_ESRINationalGeographic_0 = new ol.layer.Tile({
            'title': 'ESRI National Geographic',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PaisesdelMundo_2 = new ol.format.GeoJSON();
var features_PaisesdelMundo_2 = format_PaisesdelMundo_2.readFeatures(json_PaisesdelMundo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PaisesdelMundo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaisesdelMundo_2.addFeatures(features_PaisesdelMundo_2);
var lyr_PaisesdelMundo_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PaisesdelMundo_2, 
                style: style_PaisesdelMundo_2,
                interactive: true,
                title: '<img src="styles/legend/PaisesdelMundo_2.png" /> Paises del Mundo'
            });
var format_Zonas_3 = new ol.format.GeoJSON();
var features_Zonas_3 = format_Zonas_3.readFeatures(json_Zonas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonas_3.addFeatures(features_Zonas_3);
var lyr_Zonas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zonas_3, 
                style: style_Zonas_3,
                interactive: true,
                title: '<img src="styles/legend/Zonas_3.png" /> Zonas'
            });
var format_MARAVILLASDELMUNDOANTIGUO_4 = new ol.format.GeoJSON();
var features_MARAVILLASDELMUNDOANTIGUO_4 = format_MARAVILLASDELMUNDOANTIGUO_4.readFeatures(json_MARAVILLASDELMUNDOANTIGUO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MARAVILLASDELMUNDOANTIGUO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MARAVILLASDELMUNDOANTIGUO_4.addFeatures(features_MARAVILLASDELMUNDOANTIGUO_4);
var lyr_MARAVILLASDELMUNDOANTIGUO_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MARAVILLASDELMUNDOANTIGUO_4, 
                style: style_MARAVILLASDELMUNDOANTIGUO_4,
                interactive: true,
    title: 'MARAVILLAS DEL MUNDO ANTIGUO<br />\
    <img src="styles/legend/MARAVILLASDELMUNDOANTIGUO_4_0.png" /> COLOSO DE RODAS<br />\
    <img src="styles/legend/MARAVILLASDELMUNDOANTIGUO_4_1.png" /> ESTATUA DE ZEUS<br />\
    <img src="styles/legend/MARAVILLASDELMUNDOANTIGUO_4_2.png" /> FARO DE ALEJANDRIA<br />\
    <img src="styles/legend/MARAVILLASDELMUNDOANTIGUO_4_3.png" /> JARDINES COLGANTES DE BABILONIA<br />\
    <img src="styles/legend/MARAVILLASDELMUNDOANTIGUO_4_4.png" /> LA GRAN PIRAMIDE DE GUIZA(KEOPS)<br />\
    <img src="styles/legend/MARAVILLASDELMUNDOANTIGUO_4_5.png" /> MAUSOLEO DE HALICARNASO<br />\
    <img src="styles/legend/MARAVILLASDELMUNDOANTIGUO_4_6.png" /> TEMPLO DE ARTEMISA<br />'
        });

lyr_ESRINationalGeographic_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_PaisesdelMundo_2.setVisible(true);lyr_Zonas_3.setVisible(true);lyr_MARAVILLASDELMUNDOANTIGUO_4.setVisible(true);
var layersList = [lyr_ESRINationalGeographic_0,lyr_GoogleSatellite_1,lyr_PaisesdelMundo_2,lyr_Zonas_3,lyr_MARAVILLASDELMUNDOANTIGUO_4];
lyr_PaisesdelMundo_2.set('fieldAliases', {'FIPS_CNTRY': 'FIPS_CNTRY', 'GMI_CNTRY': 'GMI_CNTRY', 'CNTRY_NAME': 'Paises', 'POP_CNTRY': 'POP_CNTRY', 'SQKM_CNTRY': 'SQKM_CNTRY', 'SQMI_CNTRY': 'SQMI_CNTRY', 'CURR_TYPE': 'CURR_TYPE', 'CURR_CODE': 'CURR_CODE', 'LANDLOCKED': 'LANDLOCKED', 'COLOR_MAP': 'COLOR_MAP', 'paises': 'paises', });
lyr_Zonas_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fecha': 'fecha', });
lyr_MARAVILLASDELMUNDOANTIGUO_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fecha': 'fecha', 'IMAGEN': 'IMAGEN', });
lyr_PaisesdelMundo_2.set('fieldImages', {'FIPS_CNTRY': 'Hidden', 'GMI_CNTRY': 'Hidden', 'CNTRY_NAME': 'Hidden', 'POP_CNTRY': 'Hidden', 'SQKM_CNTRY': 'Hidden', 'SQMI_CNTRY': 'Hidden', 'CURR_TYPE': 'Hidden', 'CURR_CODE': 'Hidden', 'LANDLOCKED': 'Hidden', 'COLOR_MAP': 'Hidden', 'paises': 'TextEdit', });
lyr_Zonas_3.set('fieldImages', {'Name': 'Hidden', 'descriptio': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMo': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'fecha': 'Hidden', });
lyr_MARAVILLASDELMUNDOANTIGUO_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMo': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'fecha': 'Hidden', 'IMAGEN': 'ExternalResource', });
lyr_PaisesdelMundo_2.set('fieldLabels', {'paises': 'no label', });
lyr_Zonas_3.set('fieldLabels', {});
lyr_MARAVILLASDELMUNDOANTIGUO_4.set('fieldLabels', {'Name': 'no label', 'IMAGEN': 'no label', });
lyr_MARAVILLASDELMUNDOANTIGUO_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'hard-light';
});