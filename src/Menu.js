export default function Menu({videoNames, onSelectVideo}) {
    return (
        <form className="form-item" onClick={(e) => onSelectVideo(e.target.value)}>
            {videoNames.map((videoName, i) => (
                <div>
                    <input type="radio" key={i} value={videoName} name="src" />
                    {videoName}
                </div>                
            ))}
        </form>
    )
}