export default function Video({selectedVideo}) {
    return (
        <video loop controls autostart='true' autoPlay muted src={selectedVideo} />
    )
}