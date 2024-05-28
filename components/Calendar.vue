
<template>
  <FullCalendar :options="calendarOptions" />
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      schedule_name: "",
      calendarOptions: {
        plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        events: [
          { title: 'event 1', start: '2024-05-21T10:30:00', end:'2024-05-21T1:30:00' },
          { title: 'meeting', date: '2024-06-02' }
        ]
      }
    }
  },
  methods: {
    handleDateClick(arg) {
      if (confirm( arg.dateStr + " に追加するスケジュールのタイトルを記入してください。")) {
        //schedule title
        
        this.calendarOptions.events.push({
          // add new event data
          title: "新規スケジュール",
          start: arg.date,
          allDay: arg.allDay
        });
      }
    }
    //入っている予定をクリックするとタイトルの変更等ができる
  }
}
</script>