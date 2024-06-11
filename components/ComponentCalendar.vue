
<template>
  <FullCalendar :options="calendarOptions" />
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDat8GLF8HoorMCNfD3XWTmKvwZSGev2Fc",
  authDomain: "proconbulletinboard.firebaseapp.com",
  databaseURL: "https://proconbulletinboard-default-rtdb.firebaseio.com",
  projectId: "proconbulletinboard",
  storageBucket: "proconbulletinboard.appspot.com",
  messagingSenderId: "1073896450744",
  appId: "1:1073896450744:web:417c6b08a05a328c39a24d",
  measurementId: "G-S92VLC6CXJ"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()


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
          { id: 1,
            title: 'event 1',
            extendedProps:{
              description: 'this is description of event1',
            },
            start: '2024-05-21T10:30:00',
            end: '2024-05-21T13:30:00',
            backgroundColor: 'green',
            editable: true},
          { id: 2,
            title: 'event 2',
            extendedProps:{
              description: 'this is description of event2',
            },
            start: '2024-06-21T10:30:00',
            end: '2024-06-21T13:30:00',
            backgroundColor: 'green',
            editable: true},
        ]
        
      }
    }
  },
  methods: {
    handleDateClick(arg) {
      if ((this.schedule_name = window.prompt('Enter Schdule title.', 'ゼミ')) != null){
        // Entered title.
        if ((this.schedule_description = window.prompt('Enter Schdule description.', 'notifications')) != null){
          //Entered description
          if ((this.start = window.prompt('schdule start time ', '13:00')) != null){
            //'2024-05-21T10:30:00'
            this.start = arg.dateStr + 'T' + this.start + ':00'
            if ((this.end = window.prompt('schdule end time ', '17:40')) != null){
              this.end = arg.dateStr + 'T' + this.end + ':00'
              if (confirm( "Register Schdule title ' " + this.schedule_name + " ' to " + arg.dateStr + "(" + this.start[11] + this.start[12] +this.start[13] +this.start[14] +this.start[15]+ "~" + this.end[11] + this.end[12] +this.end[13] +this.end[14] +this.end[15] +"), OK?")) {
                //up to DB schedule
                db.collection('events').add({
                  name: this.schedule_name,
                  description: this.schedule_description,
                  starttime: this.start,
                  endtime: this.end
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
          "Event start time : " + info.event.start.getHours() + ":" + info.event.start.getMinutes()  + "\n" +
          "Event end time : "+ info.event.end.getHours() + ":" + info.event.end.getMinutes() )) {
        
      }
    }
  }
}
</script>