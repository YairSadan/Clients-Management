import { formatDistanceToNow, format } from 'date-fns';
import heLocale from 'date-fns/locale/he';

export const ConvertDateToWhen = ( dateTime: Date): string => {
  const formattedDateTime = formatDistanceToNow(dateTime, { addSuffix: true, locale: heLocale});

  return formattedDateTime
};

export const ConvertToWordDate = (dateTime: Date, fullDate: boolean): string => {
  let dateStr: string = ''
  if (fullDate) dateStr = "dd MMM HH:mm";
  else dateStr = "HH:mm";
  const formattedDate = format(dateTime, dateStr, { locale: heLocale });
  return formattedDate;
};