type MapInput = {
  type:
    | 'Point'
    | 'LineString'
    | 'Polygon'
    | 'Multipoint'
    | 'MultiLineString'
    | 'MultiPolygon'
    | 'Geometry (All)';
  coordinates: [number, number];
};
