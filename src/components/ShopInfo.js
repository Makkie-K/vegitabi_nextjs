import { GoogleMap } from "/src/components/GoogleMap";
import ShopModal from "/src/components/ShopModal";
import Table from "/src/components/Table";

export default function ShopInfo({
  map,
  address,
  title,
  telephone,
  url,
  businessHour,
  others,
  fileCount,
  id,
}) {
  console.log(id);
  return (
    // <Table />
    <div>
      <div>{title}</div>
      <div>{address}</div>
      <GoogleMap map={map} />
      <div>{telephone}</div>
      <div>{url}</div>
      <div>{businessHour}</div>
      <div>{others}</div>
      {/* <div>{files}</div> */}
      <div>
        <ShopModal fileCount={fileCount} id={id} />
      </div>
      <div>{/* <ShopModal fileCount={fileCount} /> */}</div>
    </div>
  );
}
