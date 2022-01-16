import { ko } from "date-fns/locale";
import format from "date-fns/format";

export function formatDate(date, type) {
  return format(new Date(date), type, { locale: ko });
}
