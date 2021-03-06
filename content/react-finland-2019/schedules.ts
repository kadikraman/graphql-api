import { Schedule } from "../../server/schema/Schedule";
import { SessionType } from "../../server/schema/Session";
import * as locations from "../locations";
import * as people from "../people";
import * as talks from "./talks";
import * as allWorkshops from "./workshops";

const workshops = Object.values(allWorkshops);

const preConferenceDay: Schedule = {
  day: "2019-04-23",
  description: "Pre-conference",
  intervals: [
    {
      begin: "18:00",
      end: "22:00",
      sessions: [
        {
          type: SessionType.PARTY,
          title: "React Helsinki meetup",
          description: `Meet local developers in React Helsinki meetup.

More info to come.`,
        },
      ],
    },
  ],
};

const workshopDay: Schedule = {
  day: "2019-04-24",
  description: "Workshop day",
  location: locations.paasitorni,
  intervals: [
    {
      begin: "08:00",
      end: "09:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration",
          description:
            "Pro tip: You can register at any time during the conference",
        },
      ],
    },
    {
      begin: "09:00",
      end: "11:30",
      sessions: workshops,
    },
    {
      begin: "11:30",
      end: "12:30",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
        },
      ],
    },
    {
      begin: "12:30",
      end: "14:00",
      sessions: workshops,
    },
    {
      begin: "14:00",
      end: "14:20",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
        },
      ],
    },
    {
      begin: "14:20",
      end: "15:40",
      sessions: workshops,
    },
    {
      begin: "15:40",
      end: "16:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
        },
      ],
    },
    {
      begin: "16:00",
      end: "17:30",
      sessions: workshops,
    },
    {
      begin: "18:00",
      end: "23:00",
      sessions: [
        {
          title: "Sauna with Reaktor",
          description: `One of our sponsors is organizing an unofficial event where you can go to sauna and meet developers. The event also has food and drinks so you won't go hungry/thirsty and there will be transfer from the venue.

          [Please register separately if you are coming](https://www.reaktor.com/react-finland-afterparty/).`,
          type: SessionType.PARTY,
        },
      ],
    },
  ],
};

const presentationDay1: Schedule = {
  day: "2019-04-25",
  description: "First conference day",
  location: locations.paasitorni,
  intervals: [
    {
      begin: "08:00",
      end: "09:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration",
          description: "You can register later too",
        },
      ],
    },
    {
      begin: "09:00",
      end: "09:15",
      sessions: [
        {
          people: [people.janiEvakallio],
          title: "Opening",
          description: "Opening the day with Jani Eväkallio, our MC of the day",
          type: SessionType.ORGANIZATIONAL,
        },
      ],
    },
    {
      begin: "09:15",
      end: "10:45",
      title: "State management",
      sessions: [
        talks.michelWeststrate,
        talks.lucaMatteis,
        talks.davidKhourshid,
        talks.farzadYz,
      ],
    },
    {
      begin: "10:45",
      end: "11:15",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee, live long and prosper",
        },
      ],
    },
    {
      begin: "11:15",
      end: "12:15",
      title: "Design Systems",
      sessions: [talks.andreyOkonetchnikov, talks.varyaStepanova],
    },
    {
      begin: "12:15",
      end: "13:15",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
          description:
            "Hopefully it's as disappointing as the one you had at GraphQL Finland",
        },
      ],
    },
    {
      begin: "13:15",
      end: "14:30",
      title: "Testing",
      sessions: [
        talks.juhaLinnanen,
        talks.maaretPyhajarvi,
        talks.manuelMatuzovic,
      ],
    },
    {
      begin: "14:30",
      end: "15:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee. Again.",
        },
      ],
    },
    {
      begin: "15:00",
      end: "16:00",
      title: "Case Studies",
      sessions: [talks.kadiKraman, talks.glennReyes, talks.dustinSchau],
    },
    {
      begin: "16:00",
      end: "16:30",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee if you still can.",
        },
      ],
    },
    {
      begin: "16:30",
      end: "17:30",
      title: "Visual",
      sessions: [talks.brunoLourenco, talks.nikGraf],
    },
    {
      begin: "17:30",
      end: "18:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Closing ceremonies",
        },
      ],
    },
    {
      begin: "18:00",
      end: "20:00",
      sessions: [
        {
          people: [people.janiEvakallio],
          title: "#componentDidSmoosh",
          description: `React has a new lifecycle method, \`componentDidSmoosh\`. Learn all about it.

The event is held at the main venue!`,
          type: SessionType.PARTY,
        },
      ],
    },
  ],
};

const presentationDay2: Schedule = {
  day: "2019-04-26",
  description: "Second conference day",
  location: locations.paasitorni,
  intervals: [
    {
      begin: "08:00",
      end: "09:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Registration",
          description: "If you slept late, you can still register after this",
        },
      ],
    },
    {
      begin: "09:00",
      end: "09:15",
      sessions: [
        {
          people: [people.saraVieira],
          title: "Opening",
          description: "Opening the day with Sara Vieira, our MC of the day",
          type: SessionType.ORGANIZATIONAL,
        },
      ],
    },
    {
      begin: "09:15",
      end: "10:45",
      title: "React Native",
      sessions: [talks.rickHanlon, talks.jamonHolmgren, talks.villeImmonen],
    },
    {
      begin: "10:45",
      end: "11:15",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee. Finnish coffee is darker than you think.",
        },
      ],
    },
    {
      begin: "11:15",
      end: "12:15",
      title: "Styling",
      sessions: [talks.artemSapegin, talks.artemZakharchenko],
    },
    {
      begin: "12:15",
      end: "13:15",
      sessions: [
        {
          type: SessionType.LUNCH,
          title: "Lunch",
          description: "Hopefully it's as disappointing as day before.",
        },
      ],
    },
    {
      begin: "13:15",
      end: "14:30",
      title: "Tooling",
      sessions: [
        talks.carolynStransky,
        talks.monicaLent,
        talks.bohdanLiashenko,
      ],
    },
    {
      begin: "14:30",
      end: "15:00",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee. Again.",
        },
      ],
    },
    {
      begin: "15:00",
      end: "16:00",
      title: "Performance",
      sessions: [talks.annaDoubkova, talks.svenSauleau],
    },
    {
      begin: "16:00",
      end: "16:30",
      sessions: [
        {
          type: SessionType.COFFEE_BREAK,
          title: "Break",
          description: "Drink coffee if you still can.",
        },
      ],
    },
    {
      begin: "16:30",
      end: "17:30",
      title: "Universal React",
      sessions: [talks.tomasKonrady, talks.tejasKumar],
    },
    {
      begin: "17:30",
      end: "18:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Closing ceremonies",
        },
      ],
    },
    {
      begin: "18:00",
      end: "23:00",
      sessions: [
        {
          type: SessionType.ORGANIZATIONAL,
          title: "Afterparty",
        },
      ],
      location: locations.tiivistamo,
    },
  ],
};

export default [
  preConferenceDay,
  workshopDay,
  presentationDay1,
  presentationDay2,
];
