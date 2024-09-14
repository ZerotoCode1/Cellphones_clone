"use client";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  MapControl,
} from "@vis.gl/react-google-maps";
import React, { useEffect, useState } from "react";
import PinCustom from "./Pin";
import servicesInstance from "@/Lib/Request/Services";

const GoogleMap = () => {
  const handleShowDetail = (item: any) => {};
  const [listStore, setListStore] = useState<any>();
  const fetchData = async () => {
    try {
      const res = await servicesInstance.get(`getShopLocation`);
      if (res?.data?.data) {
        setListStore(res.data.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <APIProvider
        apiKey={"AIzaSyDTBpN6GF2yCrwMs6DfVPcY7R6YpOEN6Vg"}
        language="Vi"
      >
        <Map
          mapTypeControl={true}
          fullscreenControl={true}
          zoomControl={true}
          clickableIcons={true}
          mapId={"bf51a910020fa25c"}
          style={{ width: "100vw", height: "100vh" }}
          defaultCenter={{ lat: 21.028511, lng: 105.804817 }}
          defaultZoom={15}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          //   onClick={handleChangePosition}
        >
          {listStore &&
            listStore.map((item: any) => (
              <AdvancedMarker
                key={item._id}
                position={{ lat: item?.lat, lng: item?.long }}
                onClick={() => handleShowDetail(item?._id)}
              >
                <PinCustom img={item?.image} name={item?.nameShop} />
              </AdvancedMarker>
            ))}
        </Map>
        {/* <MapControl position={ControlPosition.TOP}>
          <div className="autocomplete-control">
            <PlaceAutocomplete onPlaceSelect={setSelectedPlace} />
          </div>
        </MapControl>
        <MapHandler place={selectedPlace} marker={marker} /> */}
      </APIProvider>
    </div>
  );
};

export default GoogleMap;
