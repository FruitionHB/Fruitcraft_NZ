var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Posy_1 = new ol.format.GeoJSON();
var features_Posy_1 = format_Posy_1.readFeatures(json_Posy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Posy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Posy_1.addFeatures(features_Posy_1);
var lyr_Posy_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Posy_1, 
                style: style_Posy_1,
                popuplayertitle: 'Posy',
                interactive: true,
                title: '<img src="styles/legend/Posy_1.png" /> Posy'
            });
var format_Lumi_2 = new ol.format.GeoJSON();
var features_Lumi_2 = format_Lumi_2.readFeatures(json_Lumi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lumi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lumi_2.addFeatures(features_Lumi_2);
var lyr_Lumi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lumi_2, 
                style: style_Lumi_2,
                popuplayertitle: 'Lumi',
                interactive: true,
                title: '<img src="styles/legend/Lumi_2.png" /> Lumi'
            });
var format_Dazzle_3 = new ol.format.GeoJSON();
var features_Dazzle_3 = format_Dazzle_3.readFeatures(json_Dazzle_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dazzle_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dazzle_3.addFeatures(features_Dazzle_3);
var lyr_Dazzle_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dazzle_3, 
                style: style_Dazzle_3,
                popuplayertitle: 'Dazzle',
                interactive: true,
                title: '<img src="styles/legend/Dazzle_3.png" /> Dazzle'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Posy_1.setVisible(true);lyr_Lumi_2.setVisible(true);lyr_Dazzle_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Posy_1,lyr_Lumi_2,lyr_Dazzle_3];
lyr_Posy_1.set('fieldAliases', {'ID': 'ID', 'Grower': 'Grower', 'Address': 'Address', 'Region': 'Region', 'RPIN': 'RPIN', 'Block_name': 'Block name', 'Yr_planted': 'Year planted', 'Yr_grafted': 'Year grafted', 'Row_width': 'Row width', 'Tree_space': 'Tree spacing', 'Density': 'Density', 'Area (ha)': 'Area (ha)', 'Calc_trees': 'Calculated trees', 'Licence_trees': 'Licensed trees', 'Labels_2': 'Labels_2', 'Grower_block': 'Grower_block', 'Rootstock': 'Rootstock', 'Rows': 'Rows', 'Notes': 'Notes', 'Training': 'Training', 'Actual_trees': 'Actual_trees', });
lyr_Lumi_2.set('fieldAliases', {'ID': 'ID', 'Grower': 'Grower', 'Address': 'Address', 'Region': 'Region', 'RPIN': 'RPIN', 'Block_name': 'Block name', 'Yr_planted': 'Year planted', 'Yr_grafted': 'Year grafted', 'Row_width': 'Row width', 'Tree_space': 'Tree spacing', 'Density': 'Density', 'Area (ha)': 'Area (ha)', 'Calc_trees': 'Calculated trees', 'Licence_trees': 'Licensed trees', 'Labels_2': 'Labels_2', 'Grower_block': 'Grower_block', 'Rootstock': 'Rootstock', 'Rows': 'Rows', 'Notes': 'Notes', 'Training': 'Training', 'Actual_trees': 'Actual_trees', 'Address2': 'Address2', });
lyr_Dazzle_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Grower': 'Grower', 'Address': 'Address', 'Region': 'Region', 'RPIN': 'RPIN', 'Block_name': 'Block name', 'Yr_planted': 'Year planted', 'Yr_grafted': 'Year grafted', 'Row_width': 'Row width', 'Tree_space': 'Tree spacing', 'Density': 'Density', 'Area (ha)': 'Area (ha)', 'Calc_trees': 'Calculated trees', 'Licence_trees': 'Licensed trees', 'Rootstock': 'Rootstock', 'Rows': 'Rows', 'Notes': 'Notes', 'Training': 'Training', 'Labels_2': 'Labels_2', 'Grower_block': 'Grower_block', 'Actual_trees': 'Actual_trees', });
lyr_Posy_1.set('fieldImages', {'ID': 'TextEdit', 'Grower': 'TextEdit', 'Address': 'TextEdit', 'Region': 'TextEdit', 'RPIN': 'TextEdit', 'Block_name': 'TextEdit', 'Yr_planted': 'TextEdit', 'Yr_grafted': 'TextEdit', 'Row_width': 'TextEdit', 'Tree_space': 'TextEdit', 'Density': 'TextEdit', 'Area (ha)': 'TextEdit', 'Calc_trees': 'TextEdit', 'Licence_trees': 'TextEdit', 'Labels_2': 'TextEdit', 'Grower_block': 'TextEdit', 'Rootstock': 'TextEdit', 'Rows': 'TextEdit', 'Notes': 'TextEdit', 'Training': 'TextEdit', 'Actual_trees': 'TextEdit', });
lyr_Lumi_2.set('fieldImages', {'ID': 'Range', 'Grower': 'TextEdit', 'Address': 'TextEdit', 'Region': 'TextEdit', 'RPIN': 'TextEdit', 'Block_name': 'TextEdit', 'Yr_planted': 'TextEdit', 'Yr_grafted': 'TextEdit', 'Row_width': 'TextEdit', 'Tree_space': 'TextEdit', 'Density': 'TextEdit', 'Area (ha)': 'TextEdit', 'Calc_trees': 'TextEdit', 'Licence_trees': 'TextEdit', 'Labels_2': 'TextEdit', 'Grower_block': 'TextEdit', 'Rootstock': 'TextEdit', 'Rows': 'TextEdit', 'Notes': 'TextEdit', 'Training': 'TextEdit', 'Actual_trees': 'TextEdit', 'Address2': 'TextEdit', });
lyr_Dazzle_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Grower': 'TextEdit', 'Address': 'TextEdit', 'Region': 'TextEdit', 'RPIN': 'TextEdit', 'Block_name': 'TextEdit', 'Yr_planted': 'TextEdit', 'Yr_grafted': 'TextEdit', 'Row_width': 'TextEdit', 'Tree_space': 'TextEdit', 'Density': 'TextEdit', 'Area (ha)': 'TextEdit', 'Calc_trees': 'TextEdit', 'Licence_trees': 'TextEdit', 'Rootstock': 'TextEdit', 'Rows': 'TextEdit', 'Notes': 'TextEdit', 'Training': 'TextEdit', 'Labels_2': 'TextEdit', 'Grower_block': 'TextEdit', 'Actual_trees': 'TextEdit', });
lyr_Posy_1.set('fieldLabels', {'ID': 'hidden field', 'Grower': 'header label - visible with data', 'Address': 'inline label - always visible', 'Region': 'inline label - always visible', 'RPIN': 'inline label - always visible', 'Block_name': 'inline label - always visible', 'Yr_planted': 'inline label - visible with data', 'Yr_grafted': 'inline label - visible with data', 'Row_width': 'inline label - always visible', 'Tree_space': 'inline label - always visible', 'Density': 'inline label - always visible', 'Area (ha)': 'inline label - always visible', 'Calc_trees': 'inline label - always visible', 'Licence_trees': 'inline label - always visible', 'Labels_2': 'hidden field', 'Grower_block': 'hidden field', 'Rootstock': 'inline label - always visible', 'Rows': 'inline label - always visible', 'Notes': 'hidden field', 'Training': 'inline label - always visible', 'Actual_trees': 'hidden field', });
lyr_Lumi_2.set('fieldLabels', {'ID': 'hidden field', 'Grower': 'header label - visible with data', 'Address': 'inline label - always visible', 'Region': 'inline label - always visible', 'RPIN': 'inline label - always visible', 'Block_name': 'inline label - always visible', 'Yr_planted': 'inline label - visible with data', 'Yr_grafted': 'inline label - visible with data', 'Row_width': 'inline label - always visible', 'Tree_space': 'inline label - always visible', 'Density': 'inline label - always visible', 'Area (ha)': 'inline label - always visible', 'Calc_trees': 'inline label - always visible', 'Licence_trees': 'inline label - always visible', 'Labels_2': 'hidden field', 'Grower_block': 'hidden field', 'Rootstock': 'inline label - always visible', 'Rows': 'inline label - always visible', 'Notes': 'hidden field', 'Training': 'inline label - always visible', 'Actual_trees': 'hidden field', 'Address2': 'hidden field', });
lyr_Dazzle_3.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Grower': 'header label - visible with data', 'Address': 'inline label - always visible', 'Region': 'inline label - always visible', 'RPIN': 'inline label - always visible', 'Block_name': 'inline label - always visible', 'Yr_planted': 'inline label - visible with data', 'Yr_grafted': 'inline label - visible with data', 'Row_width': 'inline label - always visible', 'Tree_space': 'inline label - always visible', 'Density': 'inline label - always visible', 'Area (ha)': 'inline label - always visible', 'Calc_trees': 'inline label - always visible', 'Licence_trees': 'inline label - always visible', 'Rootstock': 'inline label - always visible', 'Rows': 'inline label - always visible', 'Notes': 'hidden field', 'Training': 'inline label - always visible', 'Labels_2': 'hidden field', 'Grower_block': 'hidden field', 'Actual_trees': 'hidden field', });
lyr_Dazzle_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});