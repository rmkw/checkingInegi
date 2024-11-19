import { Component } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import multiMonthPlugin from '@fullcalendar/multimonth';

import { CalendarOptions, EventInput } from '@fullcalendar/core';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    timeZone: 'UTC-6',
    locale: esLocale, //idioma
    //rangos de tiempos de cada dia
    slotMinTime: '06:00',
    slotMaxTime: '19:00',

    expandRows: true, //Todas las filas son del mismo tamaño
    initialView: 'dayGridMonth',

    navLinks: true, // can click day/week names to navigate views no funciona

    editable: false,

    selectable: true, //funciona es para selección de cosas days and months
    nowIndicator: true, //Muestra una línea que indica el momento actual
    dayMaxEvents: true, // allow "more" link when too many events

    height: '50rem', //altura del calendario
    weekends: false, //no muestro fin de semana

    eventTimeFormat: {
      // Configuración del formato de la hora
      hour: 'numeric',
      minute: '2-digit',
      meridiem: 'short',
      hour12: true,
    },

    plugins: [
      dayGridPlugin,
      timeGridPlugin,
      interactionPlugin,
      listPlugin,
      multiMonthPlugin,
    ],

    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek,multiMonthYear',
    },

    events: [
      {
        title: 'Falta',
        start: '2024-11-06',
        end: '2024-11-07',
        overlap: false,
        display: 'background',
        backgroundColor: '#ffec33',
      },

      {
        id: '1',
        title: 'Reunión de Ventas',
        start: '2024-11-21T10:00:00',
        end: '2024-11-21T12:00:00',
        allDay: false,
        color: '#ff0000',

        backgroundColor: '#ffcccc',
        borderColor: '#ff0000',
        textColor: '#000000',

        classNames: ['evento-importante'],
        editable: true,
        startEditable: true,
        durationEditable: true,
        resourceEditable: true,
        display: 'block',
        overlap: false,
        constraint: 'businessHours',
        // url: 'https://example.com/reunion-ventas',
        extendedProps: {
          description:
            'Reunión mensual del equipo de ventas para revisar objetivos y estrategias.',
          department: 'Ventas',
        },
      },
      {
        id: '3',
        title: 'Reunión de Ventas',
        start: '2024-11-21T11:00:00',
        end: '2024-11-21T13:00:00',
        allDay: false,
        color: '#ff0000',

        backgroundColor: '#ffcccc',
        borderColor: '#ff0000',
        textColor: '#000000',

        classNames: ['evento-importante'],
        editable: true,
        startEditable: true,
        durationEditable: true,
        resourceEditable: true,
        display: 'block',
        overlap: false,
        constraint: 'businessHours',
        url: 'https://example.com/reunion-ventas',
        extendedProps: {
          description:
            'Reunión mensual del equipo de ventas para revisar objetivos y estrategias.',
          // department: 'Ventas',
        },
      },

      {
        id: '2',
        title: 'Taller de Capacitación',
        start: '2024-11-22T14:00:00',
        end: '2024-11-22T16:00:00',
        allDay: false,
        color: '#00ff00',
        backgroundColor: '#ccffcc',
        borderColor: '#00ff00',
        textColor: '#000000',
        classNames: ['evento-capacitacion'],
        editable: true,
        startEditable: true,
        durationEditable: true,
        resourceEditable: true,
        display: 'block',
        overlap: true,
        constraint: 'businessHours',
        url: 'https://example.com/taller-capacitacion',
        extendedProps: {
          description:
            'Taller de capacitación para nuevos empleados sobre el uso de herramientas internas.',
          department: 'Recursos Humanos',
        },
      },
      {
        title: 'Día especial',
        start: '2024-11-25', // Día que quieres resaltar
        allDay: true, // Marca el evento como de todo el día
        backgroundColor: '#ff9f89', // Color de fondo personalizado
        borderColor: '#ff4f29', // Color del borde
      },
    ],

  };
}
