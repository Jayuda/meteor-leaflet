Package.describe({
  name: "jayuda:meteor-leaflet",
  summary: "Complete leaflet module on Meteor APP. Modules included : Geonames, leaflet-draw, font-awesome",
  git: "https://github.com/Jayuda/meteor-leaflet",
  author: "Y.N Pamungkas Jayuda",
  version: "0.0.11",
  license: "MIT"
});

Npm.depends({
  "spin.js": "2.3.2",
  "leaflet": "0.7.7",
  "leaflet-providers": "1.1.7",
  "leaflet-geonames" : "0.1.1",
  "leaflet-draw" : "0.3.0",
  "font-awesome" : "4.2.0",
  "leaflet-routing-machine" : "3.0.1"
});

Package.onUse(function (api) {
  api.versionsFrom('1.2');
  api.addFiles([
    '.npm/package/node_modules/leaflet/dist/leaflet-src.js',
    '.npm/package/node_modules/leaflet-providers/leaflet-providers.js',
    '.npm/package/node_modules/spin.js/spin.js',

    '.npm/package/node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js',    
    '.npm/package/node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.css',    

    '.npm/package/node_modules/leaflet-draw/dist/leaflet.draw.js',    
    '.npm/package/node_modules/leaflet-draw/dist/leaflet.draw.css',    
    '.npm/package/node_modules/leaflet-geonames/L.Control.Geonames.js',    
    '.npm/package/node_modules/leaflet-geonames/L.Control.Geonames.css',    
    '.npm/package/node_modules/font-awesome/css/font-awesome.css',    
    'lib/leaflet_spin.js',
    'styles/leaflet.css',
  ], 'client');
  api.addAssets([
    '.npm/package/node_modules/leaflet-routing-machine/dist/leaflet.routing.icons.png',    
    '.npm/package/node_modules/leaflet-draw/dist/images/spritesheet-2x.png',    
    '.npm/package/node_modules/leaflet-draw/dist/images/spritesheet.png',    
    'images/layers-2x.png',
    'images/layers.png',
    'images/marker-icon-2x.png',
    'images/marker-icon.png',
    'images/marker-shadow.png'
  ],'client');
});
