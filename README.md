# Leaflet for Meteor

## Purpose

To provide a Meteor package to quickly build real-time cross-platform map apps.

## Meteor Package
- [bevanhunt:meteor-leaflet](https://atmospherejs.com/bevanhunt/leaflet)
- Leaflet Version: 0.7.7 = bevanhunt:meteor-leaflet 2.0.0
- Leaflet Version: 1.0.0-beta2 = bevanhunt:meteor-leaflet 1.3.1

## Demo
Meteor Leafet Demo  |  [GitHub](https://github.com/bevanhunt/meteor-leaflet-demo)  |  [Demo](http://leaflet.meteor.com)

## Packaged Libraries
- [Leaflet: 0.7.7](https://www.npmjs.com/package/leaflet)
- [Leaflet Providers: 1.1.7](https://www.npmjs.com/package/leaflet-providers)
- [Leaflet Spin: 0.1.0](https://github.com/makinacorpus/Leaflet.Spin)
- [Spin.js: 2.3.2](https://www.npmjs.com/package/spin.js)
- [Leaflet.FreeDraw: 1.2.2](https://github.com/Wildhoney/Leaflet.FreeDraw)
- [Leaflet.FreeDraw: 1.2.2](https://github.com/Wildhoney/Leaflet.FreeDraw)

## Roadmap
[Roadmap](https://github.com/bevanhunt/meteor-leaflet/milestones)

## Usage
- add this package to your Meteor project

  ```bash
    meteor add bevanhunt:leaflet
  ```

- add a map div to html

  ```html
    <div id='map'></div>
  ```

- add a style for map to css

  ```css
    #map {
      min-height: 350px;
      min-width: 100%;
    }
  ```

- in Javascript client-side code define Leaflet map with default image path

  ```javascript
    if (Meteor.isClient) {
      L.Icon.Default.imagePath = 'packages/bevanhunt_leaflet/images';
      var map = L.map('map');
    }
  ```

- in Javascript client-side code use a free tile provider [optional] - [View Map Choices](http://leaflet-extras.github.io/leaflet-providers/preview/)

  ```javascript
    if (Meteor.isClient) {
      L.tileLayer.provider('Thunderforest.Outdoors').addTo(map);
    }
  ```

- in Javascript client-side code use Leaflet Spin [optional]

  - to start the loading spinner
    ```javascript
      if (Meteor.isClient) {
        map.spin(true);
      }
    ```

  - to stop the loading spinner
    ```javascript
      if (Meteor.isClient) {
        map.spin(false);
      }
    ```

  - to add drow 
  ```javascript

    var drawnItems = L.featureGroup().addTo(map);

    map.addControl(new L.Control.Draw({
        draw: {
            polyline: false,
            polygon: true,
            rectangle: true
        },
        edit: {
            featureGroup: drawnItems,
            edit: false,
            remove: true
        }
    }));

    map.on('draw:created', function(event) {
        var layer = event.layer;
        console.log(event.layer);
        console.log(event.layerType);
        console.log(drawnItems);
        var feature = {
            options: event.layer.options,
            layerType: event.layerType
        };
        switch (event.layerType) {
            case 'marker':
                feature.latlng = event.layer._latlng;
                break;
            case 'circle':
                feature.latlng = event.layer._latlng;
                feature.radius = event.layer._mRadius;
                break;
        }
        console.log(feature);
        Markers.insert(feature);
    });

    map.on('draw:deleted', function(event) {
        console.log(event);
        console.log(event.layers._layers);
        for (var l in event.layers._layers) {
            console.log(l);
            Markers.remove({_id: l});
        }
    });


  ```  

## Reactive Popups

- in Javascript client-side to create Reactive Popups - more [info on Blaze.renderWithData](http://docs.meteor.com/#/full/blaze_renderwithdata).

  ```javascript
    if (Meteor.isClient) {
      // add marker to map
      var marker = L.marker([50.5, 30.5]).addTo(map);
      // wrapping node for bindPopup
      var containerNode = document.createElement('div');
      // Which template to use for the popup? Some data for it, and attach it to node
      Blaze.renderWithData(Template.popup, dataContext, containerNode);
      // Finally bind the containerNode to the popup
      marker.bindPopup(containerNode).openPopup();
    }
  ```

## GeoJSON

### From Arrays
* [meteor-leaflet-demo geojson branch](https://github.com/bevanhunt/meteor-leaflet-demo/tree/geojson) is an example array conversion app using the [geojson npm package](https://www.npmjs.com/package/geojson).

### From KML/GPX
* [meteor-leaflet-demo KML branch](https://github.com/bevanhunt/meteor-leaflet-demo/tree/kml) is a example KML conversion app using the [togeojson npm package](https://www.npmjs.com/package/togeojson).

### From other Formats
* [Orge Web Service](http://ogre.adc4gis.com/) can be used for straight conversion.

## Featured Blog Posts

* [GeoSpatital Indexing in Meteor](http://joshowens.me/using-mongodb-geospatial-index-with-meteor-js/)

* [RealTime Maps in Meteor](http://asynchrotron.com/blog/2013/12/27/realtime-maps-with-meteor-and-leaflet/) - use bevanhunt:leaflet not mrt:leaflet

* [Animate with D3 and Leaflet](http://zevross.com/blog/2014/09/30/use-the-amazing-d3-library-to-animate-a-path-on-a-leaflet-map/) (not Meteor specific)

## License
MIT
