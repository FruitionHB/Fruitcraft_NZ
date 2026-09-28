var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_HB02mRural2026_1 = new ol.layer.Tile({
            'title': 'HB 0.2m Rural 2026',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tiles-cdn.koordinates.com/services;key=611290839ed346da8a0e4b5e8b39c2e9/tiles/v4/layer=124939/EPSG:3857/{z}/{x}/{y}.png'
            })
        });
var format_Posy_2 = new ol.format.GeoJSON();
var features_Posy_2 = format_Posy_2.readFeatures(json_Posy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Posy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Posy_2.addFeatures(features_Posy_2);
var lyr_Posy_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Posy_2, 
                style: style_Posy_2,
                popuplayertitle: 'Posy',
                interactive: true,
                title: '<img src="styles/legend/Posy_2.png" /> Posy'
            });
var format_Lumi_3 = new ol.format.GeoJSON();
var features_Lumi_3 = format_Lumi_3.readFeatures(json_Lumi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lumi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lumi_3.addFeatures(features_Lumi_3);
var lyr_Lumi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lumi_3, 
                style: style_Lumi_3,
                popuplayertitle: 'Lumi',
                interactive: true,
                title: '<img src="styles/legend/Lumi_3.png" /> Lumi'
            });
var format_Dazzle_4 = new ol.format.GeoJSON();
var features_Dazzle_4 = format_Dazzle_4.readFeatures(json_Dazzle_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dazzle_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dazzle_4.addFeatures(features_Dazzle_4);
var lyr_Dazzle_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dazzle_4, 
                style: style_Dazzle_4,
                popuplayertitle: 'Dazzle',
                interactive: true,
                title: '<img src="styles/legend/Dazzle_4.png" /> Dazzle'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_HB02mRural2026_1.setVisible(true);lyr_Posy_2.setVisible(true);lyr_Lumi_3.setVisible(true);lyr_Dazzle_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_HB02mRural2026_1,lyr_Posy_2,lyr_Lumi_3,lyr_Dazzle_4];
lyr_Posy_2.set('fieldAliases', {'ID': 'ID', 'Grower': 'Grower', 'Address': 'Address', 'Region': 'Region', 'RPIN': 'RPIN', 'Block_name': 'Block name', 'Yr_planted': 'Year planted', 'Yr_grafted': 'Year grafted', 'Row_width': 'Row width', 'Tree_space': 'Tree spacing', 'Density': 'Density', 'Area (ha)': 'Area (ha)', 'Calc_trees': 'Calculated trees', 'Licence_trees': 'Licensed trees', 'Labels_2': 'Labels_2', 'Grower_block': 'Grower_block', 'Rootstock': 'Rootstock', 'Rows': 'Rows', 'Notes': 'Notes', 'Training': 'Training', 'Actual_trees': 'Actual_trees', });
lyr_Lumi_3.set('fieldAliases', {'ID': 'ID', 'Grower': 'Grower', 'Address': 'Address', 'Region': 'Region', 'RPIN': 'RPIN', 'Block_name': 'Block name', 'Yr_planted': 'Year planted', 'Yr_grafted': 'Year grafted', 'Row_width': 'Row width', 'Tree_space': 'Tree spacing', 'Density': 'Density', 'Area (ha)': 'Area (ha)', 'Calc_trees': 'Calculated trees', 'Licence_trees': 'Licensed trees', 'Labels_2': 'Labels_2', 'Grower_block': 'Grower_block', 'Rootstock': 'Rootstock', 'Rows': 'Rows', 'Notes': 'Notes', 'Training': 'Training', 'Actual_trees': 'Actual_trees', 'Address2': 'Address2', });
lyr_Dazzle_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Grower': 'Grower', 'Address': 'Address', 'Region': 'Region', 'RPIN': 'RPIN', 'Block_name': 'Block name', 'Yr_planted': 'Year planted', 'Yr_grafted': 'Year grafted', 'Row_width': 'Row width', 'Tree_space': 'Tree spacing', 'Density': 'Density', 'Area (ha)': 'Area (ha)', 'Calc_trees': 'Calculated trees', 'Licence_trees': 'Licensed trees', 'Rootstock': 'Rootstock', 'Rows': 'Rows', 'Notes': 'Notes', 'Training': 'Training', 'Labels_2': 'Labels_2', 'Grower_block': 'Grower_block', 'Actual_trees': 'Actual_trees', });
lyr_Posy_2.set('fieldImages', {'ID': 'TextEdit', 'Grower': 'TextEdit', 'Address': 'TextEdit', 'Region': 'TextEdit', 'RPIN': 'TextEdit', 'Block_name': 'TextEdit', 'Yr_planted': 'TextEdit', 'Yr_grafted': 'TextEdit', 'Row_width': 'TextEdit', 'Tree_space': 'TextEdit', 'Density': 'TextEdit', 'Area (ha)': 'TextEdit', 'Calc_trees': 'TextEdit', 'Licence_trees': 'TextEdit', 'Labels_2': 'TextEdit', 'Grower_block': 'TextEdit', 'Rootstock': 'TextEdit', 'Rows': 'TextEdit', 'Notes': 'TextEdit', 'Training': 'TextEdit', 'Actual_trees': 'TextEdit', });
lyr_Lumi_3.set('fieldImages', {'ID': 'Range', 'Grower': 'TextEdit', 'Address': 'TextEdit', 'Region': 'TextEdit', 'RPIN': 'TextEdit', 'Block_name': 'TextEdit', 'Yr_planted': 'TextEdit', 'Yr_grafted': 'TextEdit', 'Row_width': 'TextEdit', 'Tree_space': 'TextEdit', 'Density': 'TextEdit', 'Area (ha)': 'TextEdit', 'Calc_trees': 'TextEdit', 'Licence_trees': 'TextEdit', 'Labels_2': 'TextEdit', 'Grower_block': 'TextEdit', 'Rootstock': 'TextEdit', 'Rows': 'TextEdit', 'Notes': 'TextEdit', 'Training': 'TextEdit', 'Actual_trees': 'TextEdit', 'Address2': 'TextEdit', });
lyr_Dazzle_4.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'Grower': 'TextEdit', 'Address': 'TextEdit', 'Region': 'TextEdit', 'RPIN': 'TextEdit', 'Block_name': 'TextEdit', 'Yr_planted': 'TextEdit', 'Yr_grafted': 'TextEdit', 'Row_width': 'TextEdit', 'Tree_space': 'TextEdit', 'Density': 'TextEdit', 'Area (ha)': 'TextEdit', 'Calc_trees': 'TextEdit', 'Licence_trees': 'TextEdit', 'Rootstock': 'TextEdit', 'Rows': 'TextEdit', 'Notes': 'TextEdit', 'Training': 'TextEdit', 'Labels_2': 'TextEdit', 'Grower_block': 'TextEdit', 'Actual_trees': 'TextEdit', });
lyr_Posy_2.set('fieldLabels', {'ID': 'hidden field', 'Grower': 'header label - visible with data', 'Address': 'inline label - always visible', 'Region': 'inline label - always visible', 'RPIN': 'inline label - always visible', 'Block_name': 'inline label - always visible', 'Yr_planted': 'inline label - visible with data', 'Yr_grafted': 'inline label - visible with data', 'Row_width': 'inline label - always visible', 'Tree_space': 'inline label - always visible', 'Density': 'inline label - always visible', 'Area (ha)': 'inline label - always visible', 'Calc_trees': 'inline label - always visible', 'Licence_trees': 'inline label - always visible', 'Labels_2': 'hidden field', 'Grower_block': 'hidden field', 'Rootstock': 'inline label - always visible', 'Rows': 'inline label - always visible', 'Notes': 'hidden field', 'Training': 'inline label - always visible', 'Actual_trees': 'hidden field', });
lyr_Lumi_3.set('fieldLabels', {'ID': 'hidden field', 'Grower': 'header label - visible with data', 'Address': 'inline label - always visible', 'Region': 'inline label - always visible', 'RPIN': 'inline label - always visible', 'Block_name': 'inline label - always visible', 'Yr_planted': 'inline label - visible with data', 'Yr_grafted': 'inline label - visible with data', 'Row_width': 'inline label - always visible', 'Tree_space': 'inline label - always visible', 'Density': 'inline label - always visible', 'Area (ha)': 'inline label - always visible', 'Calc_trees': 'inline label - always visible', 'Licence_trees': 'inline label - always visible', 'Labels_2': 'hidden field', 'Grower_block': 'hidden field', 'Rootstock': 'inline label - always visible', 'Rows': 'inline label - always visible', 'Notes': 'hidden field', 'Training': 'inline label - always visible', 'Actual_trees': 'hidden field', 'Address2': 'hidden field', });
lyr_Dazzle_4.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Grower': 'header label - visible with data', 'Address': 'inline label - always visible', 'Region': 'inline label - always visible', 'RPIN': 'inline label - always visible', 'Block_name': 'inline label - always visible', 'Yr_planted': 'inline label - visible with data', 'Yr_grafted': 'inline label - visible with data', 'Row_width': 'inline label - always visible', 'Tree_space': 'inline label - always visible', 'Density': 'inline label - always visible', 'Area (ha)': 'inline label - always visible', 'Calc_trees': 'inline label - always visible', 'Licence_trees': 'inline label - always visible', 'Rootstock': 'inline label - always visible', 'Rows': 'inline label - always visible', 'Notes': 'hidden field', 'Training': 'inline label - always visible', 'Labels_2': 'hidden field', 'Grower_block': 'hidden field', 'Actual_trees': 'hidden field', });
lyr_Dazzle_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});