import { parseISO, format } from "date-fns";

export default function DateEn({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "MMMM dd, yyyy")}</time>;
}
