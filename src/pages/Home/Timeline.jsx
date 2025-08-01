function TimelineEvent({ event }) {
  return (
    <div className="timeline-event">
      <div className="emoji">{event.emoji}</div>
      <div className="year">{event.year}</div>
      <div className="event">{event.event}</div>
    </div>
  );
}

export default function Timeline({ timeline }) {
  return (
    <div className="timeline-wrapper">
      <div className="timeline">
        {timeline.map((event, idx) => {
          return <TimelineEvent event={event} key={idx} />;
        })}
      </div>
    </div>
  );
}
