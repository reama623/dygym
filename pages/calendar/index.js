import { Box, VStack } from "@chakra-ui/react";

import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import ko from "date-fns/locale/ko";
import { format, parse, startOfWeek, getDay } from "date-fns";
// import useTodayExercises from "../../effects/useTodayExercises";
import events from "../../assets/events";

const locales = {
  ko,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function Calendar() {
  // const { data } = useTodayExercises();
  return (
    <Box>
      <VStack>
        <Box w="full">트레이너님 반갑습니다.</Box>
        <Box w="full">
          <BigCalendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600 }}
          />
        </Box>
      </VStack>
    </Box>
  );
}
