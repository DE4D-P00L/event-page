import React from "react";
import { event } from "../../data/data.js";
import Tags from "../Tags.jsx";

function EventPage() {
  const data = new Date(event.startDate).toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  const day = data.split(" ")[0].replace(",", "");
  const month = data.split(" ")[1];
  const date = data.split(" ")[2];

  const convertTime = (timeString) => {
    const colonSeparatedTime = timeString;
    const timeParts = colonSeparatedTime.split(":");
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);
    const seconds = parseInt(timeParts[2]);
    const time = new Date();
    time.setHours(hours);
    time.setMinutes(minutes);
    time.setSeconds(seconds);
    time.setMilliseconds(0);
    return time;
  };

  const start = convertTime(event.startTime);
  const end = convertTime(event.endTime);

  const startTime = start.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });

  const endTime = end.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div className="flex flex-col text-[#44413a] bg-[#d7d1be] justify-center items-center shadow-lg px-5 py-4 rounded-xl">
      <div className="flex font-playball text-2xl md:text-4xl items-center justify-center">
        <h1 className="border-double border-[#58544b] border-t-[7px] border-b-[7px] box-border px-5 -mr-[7px]">
          {day}
        </h1>
        <h1 className="text-4xl md:text-7xl border-double rounded-full border-[#58544b] bg-[#d7d1be] z-10 border-[7px] box-border p-3 aspect-square items-center flex">
          {date}
        </h1>
        <h1 className="border-double border-[#58544b] border-t-[7px] border-b-[7px] box-border px-5 -ml-[7px]">
          {month}
        </h1>
      </div>
      <div className="font-playball flex divide-x-[6px] divide-double divide-black max-w-[500px]">
        <div className="flex flex-col items-center px-3">
          <h2>{startTime}</h2>
          <h2 className="text-xl md:text-2xl">Start</h2>
        </div>
        <div className="flex flex-col items-center px-3">
          <h2 className="text-xl md:text-2xl">{event.location.name}</h2>
          <h2>{event.location.address}</h2>
        </div>
        <div className="flex flex-col items-center px-3">
          <h2>{endTime}</h2>
          <h2 className="text-xl md:text-2xl">End</h2>
        </div>
      </div>
      <div className="font-Playfair max-w-[900px] px-3">
        <h1 className="text-[#923940] font-bold text-2xl md:text-3xl text-center my-3">
          {event.title}
        </h1>
        <div className="my-3 flex gap-2">
          {event.categories.map((tag) => (
            <Tags key={tag}>{tag}</Tags>
          ))}
        </div>
        <p className="text-justify md:text-xl">{event.description}</p>
        <div className="mt-1">
          <h2 className="text-2xl mt-2 font-semibold text-[#923940] ">
            Sessions
          </h2>
          <table className="table-auto border border-slate-500 border-collapse py-3 w-full md:text-xl">
            <thead>
              <tr>
                <th className="border border-slate-500 px-2">Title</th>
                <th className="border border-slate-500 px-2">Speaker</th>
                <th className="border border-slate-500 px-2">Start Time</th>
                <th className="border border-slate-500 px-2">Duration</th>
              </tr>
            </thead>
            <tbody>
              {event.sessions.map((session) => (
                <tr key={session.title}>
                  <td className="px-4 border-l border-r border-slate-500 text-left">
                    {session.title}
                  </td>
                  <td className="px-4 border-l border-r border-slate-500 text-left">
                    {session.speaker}
                  </td>
                  <td className="px-4 border-l border-r border-slate-500 text-center">
                    {session.startTime}
                  </td>
                  <td className="px-4 border-l border-r border-slate-500 text-center">
                    {session.duration}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-3 flex justify-between items-start">
          <div className="">
            <h3 className="flex flex-col text-md font-semibold">
              Sponsors
              {event.sponsors.map((sponsor) => (
                <span key={sponsor.name} className="text-[#923940] font-normal">
                  {sponsor.name}
                </span>
              ))}
            </h3>
          </div>
          <a
            href={event.registration.url}
            className="text-[#923940] font-semibold px-2 py-1 rounded-lg border-[2px] border-[#923940]">
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default EventPage;
