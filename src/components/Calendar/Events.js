import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classes from './Events.module.css';

const locales = {
    "az": require("date-fns/locale/az"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

function Events() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState([]);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
        setNewEvent({ title: "", start: "", end: "" });
    };

    return (
        <div>
            <h2 className={classes['event-h2']}>Yeni təqvim əlavə et</h2>
            <div className={classes.event}>
                <div className={classes['text-input-group']}>
                    <label htmlFor="eventTitle">Başlıq əlavə et:</label>
                    <input 
                        type="text" 
                        id="eventTitle"
                        placeholder="Başlıq əlavə et"
                        value={newEvent.title}
                        onChange={(e) => setNewEvent({...newEvent, title: e.target.value})} 
                    />
                </div>
                <div className={classes['date-picker-group']} >
                    <div className={classes['input-date-group1']}>
                        <label htmlFor="startDate">Başlanğıc gün:</label>
                        <DatePicker 
                            className={classes.datepicker} 
                            placeholderText="Başlanğıc tarixi" 
                            selected={newEvent.start} 
                            onChange={(start) => setNewEvent({ ...newEvent, start: start })} 
                        />
                    </div>
                    <div className={classes['input-date-group2']}>
                        <label htmlFor="endDate">Son gün:</label>
                        <DatePicker 
                            className={classes.datepicker} 
                            placeholderText="Bitiş tarixi" 
                            selected={newEvent.end} 
                            onChange={(end) => setNewEvent({ ...newEvent, end: end })} 
                        />
                    </div>
                </div>
                <div className={classes['event-button']}>
                    <button onClick={handleAddEvent}>Add Event</button>
                </div>
            </div>
            <h1 className={classes['calendar-title']}>Təqvim</h1>
            <Calendar 
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                style={{height: '500px', margin: "20px 50px", background: '#fff'}}
            />
        </div>
    );
}

export default Events;