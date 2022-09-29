import ShopModal from "/src/components/ShopModal";

export default function ShopInfo({
  map,
  address,
  title,
  telephone,
  url,
  businessHour,
  others,
}) {
  return (
    <div>
      <div>{title}</div>
      <div>{telephone}</div>
      <div>{url}</div>
      <div>{businessHour}</div>
      <div>{others}</div>
      <div>{address}</div>
      <GoogleMap map={map} />
      <div>
        <ShopModal />
      </div>
    </div>
  );
}

export function GoogleMap({ map }) {
  return (
    <div>
      <iframe
        src={map}
        width="100%"
        // style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
