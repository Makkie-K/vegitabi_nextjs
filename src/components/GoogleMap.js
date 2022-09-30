export function GoogleMap({ map }) {
  return (
    <div>
      <iframe
        src={map}
        width="100%"
        // style="border:0;"
        // allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
