
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
      schdule_starttime: "",
      schdule_endtime: "",
      calendarOptions: {
        plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        eventClick: this.handleEventClick,
        eventContent: this.handleEventContent,
        events: [
          // { id: 1,
          //   title: 'event 1',
          //   extendedProps:{
          //     description: 'this is description of event1',
          //   },
          //   start: '2024-05-21T10:30:00',
          //   end: '2024-05-21T13:30:00',
          //   backgroundColor: 'red',
          //   editable: true},
          // { id: 2,
          //   title: 'event 2',
          //   extendedProps:{
          //     description: 'this is description of event2',
          //   },
          //   start: '2024-06-21T10:30:00',
          //   end: '2024-06-21T13:30:00',
          //   backgroundColor: 'green',
          //   editable: true},
        ]
      }
    }
  },
  created() {
    this.getEvents()
  },
  methods: {
    handleDateClick(arg) {
      if ((this.schedule_name = window.prompt('Enter Schdule title.', 'ゼミ')) != null){
        // Entered title.
        if ((this.schedule_description = window.prompt('Enter Schdule description.', 'notifications')) != null){
          //Entered description
          if ((this.start = window.prompt('Enter schdule start time (hh:mm)', '08:05')) != null){
            //'2024-05-21T10:30:00'
            this.start = arg.dateStr + 'T' + this.start + ':00'
            if ((this.end = window.prompt('Enter schdule end time (hh:mm)', '15:40')) != null){
              this.end = arg.dateStr + 'T' + this.end + ':00'
              if (confirm( "Register Schdule title ' " + this.schedule_name + " ' to " + arg.dateStr + "(" + this.start[11] + this.start[12] +this.start[13] +this.start[14] +this.start[15]+ "~" + this.end[11] + this.end[12] +this.end[13] +this.end[14] +this.end[15] +"), OK?")) {
                //up to DB schedule
                this.$fire.firestore.collection('events').add({
                  title: this.schedule_name,
                  description: this.schedule_description,
                  start: this.start,
                  end: this.end
                })

                this.calendarOptions.events.push({
                  // add new event data
                  title: this.schedule_name,
                  description: this.schedule_description,
                  start: this.start,
                  end: this.end,
                });
              }
            }
          }
       }

      }
      // this.schdule_starttime = window.prompt('Enter Schdule start time.', '0900')
    },
    handleEventClick(info){
      if (confirm( "Event title : " + info.event.title + "\n" +
          "Event description : " + info.event.extendedProps.description + "\n" +
          "Event start time : " + info.event.start.getHours() + ":" + ('0'+info.event.start.getMinutes()).slice(-2)  + "\n" +
          "Event end time : "+ info.event.end.getHours() + ":" + ('0'+info.event.end.getMinutes()).slice(-2) )) {

      }
    },
    getEvents() {
      this.$fire.firestore.collection('events').get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // this.posts.push(doc.data());
          this.calendarOptions.events.push(doc.data());
        })
      })
    }
  }
}
</script>
