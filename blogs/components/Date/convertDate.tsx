import { parseISO, format } from "date-fns";
import ja from "date-fns/locale/ja";

type props = {
  dateISO: string;
};

export const ConvertDate = ({ dateISO }: props) => {
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), "yyyy年MM月dd日", {
        locale: ja,
      })}
    </time>
  );
};

export default ConvertDate;
