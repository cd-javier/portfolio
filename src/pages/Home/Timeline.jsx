function TimelineEvent({ event, styles }) {
  return (
    <div className={styles.timelineEvent}>
      <div className={styles.emoji}>{event.emoji}</div>
      <div className={styles.year}>{event.year}</div>
      <div className={styles.event}>{event.event}</div>
    </div>
  );
}

export default function Timeline({ timeline, styles }) {
  return (
    <div className={styles.timelineWrapper}>
      <div className={styles.timeline}>
        {timeline.map((event, idx) => (
          <TimelineEvent event={event} styles={styles} key={idx} />
        ))}
      </div>
    </div>
  );
}
