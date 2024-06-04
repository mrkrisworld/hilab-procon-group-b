
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
      schedule_description: "",
      calendarOptions: {
        plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        eventClick: this.handleEventClick,
        // eventContent: this.handleEventContent,
        events: [
          { id: 1,
            title: 'event 1',
            description: 'これはevent1の説明欄です。',
            start: '2024-05-21T10:30:00',
            end:'2024-05-21T1:30:00',
            backgroundColor: 'green',
            editable: true},
          { id: 2,
            title: 'event 2',
            description: 'これはevent2の説明欄です。',
            start: '2024-06-21T10:30:00',
            end:'2024-06-21T1:30:00',
            backgroundColor: 'green',
            editable: true},
        ]
      }
    }
  },
  methods: {
    handleDateClick(arg) {
      this.schedule_name = window.prompt('Enter Schdule title.')
      this.schedule_description = window.prompt('Enter Schdule description.')
      if (confirm( "Register Schdule title ' " + this.schedule_name + " ' to " + arg.dateStr + ", OK?")) {
        //schedule title
        
        this.calendarOptions.events.push({
          // add new event data
          title: this.schedule_name,
          description: this.schedule_description,
          start: arg.date,
          allDay: arg.allDay
        });
      }
    },
    handleEventClick(info){
      if (confirm( info.event.title + "には" + info.event.description )) {
        //schedule title
      }
    }
  }
}
</script>