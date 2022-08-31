//ADD THIS CODE BELOW YOUR IMPORTS
const makeDraggrable = (map, popup) =>{
  const pos = map.latLngTolayerPoint(popup.getlatLng());
  L.DomUtil.setPosition(popup._wrapper.parentNode, pos);
  const draggable = new L.Draggable(popup._container, popup._wrapper);
  draggable.enable();

  draggable.on('dragend', function () {
    const pos = map.layerPointTolatLng(this._newPos);
    popup.setLatLng(pos)
  })
}


//ADD THIS CODE TO YOUR COMPONENT //
const [mapRef, setMapRef] = useState(null);
const [popupRef, setPopupRef] = useState(null);

useEffect(() => {
  if(!mapRef || !popupRef) return;

  mapRef.on('click', function(){
    makeDraggrable(mapRef, popupRef);
  })
}, [mapRef, popupRef]);


// ADD THIS TO YOUR MAPCONTAINER OR MAP TAG //
ref={mapRef}


// ADD THIS TO YOUR POPUP TAG //
ref={popupRef}