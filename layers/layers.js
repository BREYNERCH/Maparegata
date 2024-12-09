var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Drenaje_PG_1 = new ol.format.GeoJSON();
var features_Drenaje_PG_1 = format_Drenaje_PG_1.readFeatures(json_Drenaje_PG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drenaje_PG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drenaje_PG_1.addFeatures(features_Drenaje_PG_1);
var lyr_Drenaje_PG_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drenaje_PG_1, 
                style: style_Drenaje_PG_1,
                popuplayertitle: "Drenaje_PG",
                interactive: true,
                title: '<img src="styles/legend/Drenaje_PG_1.png" /> Drenaje_PG'
            });
var format_Via_Municipal_2_2 = new ol.format.GeoJSON();
var features_Via_Municipal_2_2 = format_Via_Municipal_2_2.readFeatures(json_Via_Municipal_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Via_Municipal_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Via_Municipal_2_2.addFeatures(features_Via_Municipal_2_2);
var lyr_Via_Municipal_2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Via_Municipal_2_2, 
                style: style_Via_Municipal_2_2,
                popuplayertitle: "Via_Municipal_2",
                interactive: true,
                title: '<img src="styles/legend/Via_Municipal_2_2.png" /> Via_Municipal_2'
            });
var format_Limite_Vial_urb_3 = new ol.format.GeoJSON();
var features_Limite_Vial_urb_3 = format_Limite_Vial_urb_3.readFeatures(json_Limite_Vial_urb_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_Vial_urb_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_Vial_urb_3.addFeatures(features_Limite_Vial_urb_3);
var lyr_Limite_Vial_urb_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_Vial_urb_3, 
                style: style_Limite_Vial_urb_3,
                popuplayertitle: "Limite_Vial_urb",
                interactive: true,
                title: '<img src="styles/legend/Limite_Vial_urb_3.png" /> Limite_Vial_urb'
            });
var format_Drenaje_LN_4 = new ol.format.GeoJSON();
var features_Drenaje_LN_4 = format_Drenaje_LN_4.readFeatures(json_Drenaje_LN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drenaje_LN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drenaje_LN_4.addFeatures(features_Drenaje_LN_4);
var lyr_Drenaje_LN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drenaje_LN_4, 
                style: style_Drenaje_LN_4,
                popuplayertitle: "Drenaje_LN",
                interactive: true,
                title: '<img src="styles/legend/Drenaje_LN_4.png" /> Drenaje_LN'
            });
var format_Sitios_5 = new ol.format.GeoJSON();
var features_Sitios_5 = format_Sitios_5.readFeatures(json_Sitios_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitios_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitios_5.addFeatures(features_Sitios_5);
var lyr_Sitios_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitios_5, 
                style: style_Sitios_5,
                popuplayertitle: "Sitios",
                interactive: true,
    title: 'Sitios<br />\
    <img src="styles/legend/Sitios_5_0.png" /> Banco Sucursal<br />\
    <img src="styles/legend/Sitios_5_1.png" /> Bar<br />\
    <img src="styles/legend/Sitios_5_2.png" /> Comidas Ramidas<br />\
    <img src="styles/legend/Sitios_5_3.png" /> Comidas rapidas<br />\
    <img src="styles/legend/Sitios_5_4.png" /> Comidas Rapidas<br />\
    <img src="styles/legend/Sitios_5_5.png" /> Enbarcadero<br />\
    <img src="styles/legend/Sitios_5_6.png" /> Farmacia<br />\
    <img src="styles/legend/Sitios_5_7.png" /> Gasolinera<br />\
    <img src="styles/legend/Sitios_5_8.png" /> Hotel<br />\
    <img src="styles/legend/Sitios_5_9.png" /> Iglesia Catolica<br />\
    <img src="styles/legend/Sitios_5_10.png" /> Institucion Publica<br />\
    <img src="styles/legend/Sitios_5_11.png" /> Montallantas<br />\
    <img src="styles/legend/Sitios_5_12.png" /> Panaderia<br />\
    <img src="styles/legend/Sitios_5_13.png" /> Parque Central<br />\
    <img src="styles/legend/Sitios_5_14.png" /> Parqueadero<br />\
    <img src="styles/legend/Sitios_5_15.png" /> Plaza de Mercado<br />\
    <img src="styles/legend/Sitios_5_16.png" /> Plazoleta Ecologica<br />\
    <img src="styles/legend/Sitios_5_17.png" /> Restaurante<br />\
    <img src="styles/legend/Sitios_5_18.png" /> Supermecado<br />\
    <img src="styles/legend/Sitios_5_19.png" /> Supermercado<br />\
    <img src="styles/legend/Sitios_5_20.png" /> Taquilla<br />\
    <img src="styles/legend/Sitios_5_21.png" /> <br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_Drenaje_PG_1.setVisible(true);lyr_Via_Municipal_2_2.setVisible(true);lyr_Limite_Vial_urb_3.setVisible(true);lyr_Drenaje_LN_4.setVisible(true);lyr_Sitios_5.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Drenaje_PG_1,lyr_Via_Municipal_2_2,lyr_Limite_Vial_urb_3,lyr_Drenaje_LN_4,lyr_Sitios_5];
lyr_Drenaje_PG_1.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_Via_Municipal_2_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'VIdentif': 'VIdentif', 'VTipo': 'VTipo', 'VEstado': 'VEstado', 'VCarril': 'VCarril', 'VAcceso': 'VAcceso', 'RuleID': 'RuleID', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Limite_Vial_urb_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LVIdentif': 'LVIdentif', 'LVTipo': 'LVTipo', 'RuleID': 'RuleID', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Drenaje_LN_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_clip': 'FID_clip', 'NOMBRE_GEO': 'NOMBRE_GEO', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'RULEID': 'RULEID', 'ID_MULTI': 'ID_MULTI', 'BK_MULTI': 'BK_MULTI', 'ESCALA': 'ESCALA', 'CAMBIO': 'CAMBIO', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RESPONSABL': 'RESPONSABL', 'PK_CUE': 'PK_CUE', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'NOMBRE': 'NOMBRE', 'DEFINE': 'DEFINE', 'PAISES': 'PAISES', 'ESTADO': 'ESTADO', 'TIPO': 'TIPO', 'FUENTE': 'FUENTE', 'ACTUALIZAC': 'ACTUALIZAC', 'CAUDAL': 'CAUDAL', 'CLASE': 'CLASE', 'POM': 'POM', 'Longitud': 'Longitud', 'Shape_Leng': 'Shape_Leng', 'Filtro_pre': 'Filtro_pre', 'dist_mt': 'dist_mt', 'km': 'km', 'Long_m': 'Long_m', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Sitios_5.set('fieldAliases', {'id': 'id', 'Categoria': 'Categoria', 'Nombre': 'Nombre', 'Ubicacion': 'Ubicacion', 'Telefono': 'Telefono', 'Red Social': 'Red Social', 'Imagen': 'Imagen', });
lyr_Drenaje_PG_1.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', });
lyr_Via_Municipal_2_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'VIdentif': 'TextEdit', 'VTipo': 'Range', 'VEstado': 'TextEdit', 'VCarril': 'TextEdit', 'VAcceso': 'TextEdit', 'RuleID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Limite_Vial_urb_3.set('fieldImages', {'OBJECTID': '', 'LVIdentif': '', 'LVTipo': '', 'RuleID': '', 'SHAPE_Leng': '', });
lyr_Drenaje_LN_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_clip': 'TextEdit', 'NOMBRE_GEO': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'RULEID': 'TextEdit', 'ID_MULTI': 'TextEdit', 'BK_MULTI': 'TextEdit', 'ESCALA': 'Range', 'CAMBIO': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'DateTime', 'RESPONSABL': 'TextEdit', 'PK_CUE': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'NOMBRE': 'TextEdit', 'DEFINE': 'TextEdit', 'PAISES': 'TextEdit', 'ESTADO': 'TextEdit', 'TIPO': 'TextEdit', 'FUENTE': 'TextEdit', 'ACTUALIZAC': 'TextEdit', 'CAUDAL': 'TextEdit', 'CLASE': 'TextEdit', 'POM': 'TextEdit', 'Longitud': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Filtro_pre': 'TextEdit', 'dist_mt': 'TextEdit', 'km': 'TextEdit', 'Long_m': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr_Sitios_5.set('fieldImages', {'id': 'TextEdit', 'Categoria': 'TextEdit', 'Nombre': 'TextEdit', 'Ubicacion': 'TextEdit', 'Telefono': 'TextEdit', 'Red Social': 'TextEdit', 'Imagen': 'TextEdit', });
lyr_Drenaje_PG_1.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_Via_Municipal_2_2.set('fieldLabels', {'OBJECTID': 'no label', 'VIdentif': 'no label', 'VTipo': 'no label', 'VEstado': 'no label', 'VCarril': 'no label', 'VAcceso': 'no label', 'RuleID': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Limite_Vial_urb_3.set('fieldLabels', {'OBJECTID': 'no label', 'LVIdentif': 'no label', 'LVTipo': 'no label', 'RuleID': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Drenaje_LN_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'FID_clip': 'no label', 'NOMBRE_GEO': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'RULEID': 'no label', 'ID_MULTI': 'no label', 'BK_MULTI': 'no label', 'ESCALA': 'no label', 'CAMBIO': 'no label', 'VIGENCIA': 'no label', 'FECHA_MODI': 'no label', 'RESPONSABL': 'no label', 'PK_CUE': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'NOMBRE': 'no label', 'DEFINE': 'no label', 'PAISES': 'no label', 'ESTADO': 'no label', 'TIPO': 'no label', 'FUENTE': 'no label', 'ACTUALIZAC': 'no label', 'CAUDAL': 'no label', 'CLASE': 'no label', 'POM': 'no label', 'Longitud': 'no label', 'Shape_Leng': 'no label', 'Filtro_pre': 'no label', 'dist_mt': 'no label', 'km': 'no label', 'Long_m': 'no label', 'Shape_Le_1': 'no label', });
lyr_Sitios_5.set('fieldLabels', {'id': 'no label', 'Categoria': 'no label', 'Nombre': 'no label', 'Ubicacion': 'no label', 'Telefono': 'no label', 'Red Social': 'no label', 'Imagen': 'no label', });
lyr_Sitios_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});