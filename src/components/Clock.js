const Clock = (props) => {
    return (
        <div className="clock">
            <div className="clock-timer">
                <p>{props.days}</p>
                <small>Days</small>
            </div>
            <span>:</span>
            <div className="clock-timer">
                <p>{props.hours}</p>
                <small>Hours</small>
            </div>
            <span>:</span>
            <div className="clock-timer">
                <p>{props.minutes}</p>
                <small>Minutes</small>
            </div>
            <span>:</span>
            <div className="clock-timer">
                <p>{props.seconds}</p>
                <small>Seconds</small>
            </div>
        </div>
    )
}

Clock.defaultProps = {
    days: 10,
    hours: 10,
    minutes: 10,
    seconds: 10
}

export default Clock;