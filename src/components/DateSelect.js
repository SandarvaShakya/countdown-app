const DateSelect = (props) => {
    const months = [
        {
            id: 1,
            monthName: "January",
            monthValue: "Jan"
        },
        {
            id: 2,
            monthName: "February",
            monthValue: "Feb"
        },
        {
            id: 3,
            monthName: "March",
            monthValue: "Mar"
        },
        {
            id: 4,
            monthName: "April",
            monthValue: "Apr"
        },
        {
            id: 5,
            monthName: "May",
            monthValue: "May"
        },
        {
            id: 6,
            monthName: "June",
            monthValue: "Jun"
        },
        {
            id: 7,
            monthName: "July",
            monthValue: "Jul"
        },
        {
            id: 8,
            monthName: "August",
            monthValue: "Aug"
        },
        {
            id: 9,
            monthName: "September",
            monthValue: "Sept"
        },
        {
            id: 10,
            monthName: "October",
            monthValue: "Oct"
        },
        {
            id: 11,
            monthName: "November",
            monthValue: "Nov"
        },
        {
            id: 12,
            monthName: "December",
            monthValue: "Dec"
        },
    ]

    const dates = [...Array(30).keys()].map(x => x + 1)
    const currentYear = new Date().getFullYear()
    const years = [...Array(10).keys()].map(x => x+currentYear)

    const handleMonthChange = (event) => {
        props.setMonth(event.target.value)
    }

    const handleDateChange = (event) => {
        props.setDate(event.target.value)
    }

    const handleYearChange = (event) => {
        props.setYear(event.target.value)
    }

    return (
        <div className="date-form">
            <div className="date">
                <p>Months</p>
                <select
                    onChange={(event) => handleMonthChange(event)}
                    defaultValue={months.find(month => month.id === new Date().getMonth() + 1).monthValue}
                    className="select"
                >
                    {months.map(month =>
                        <option value={month.monthValue} key={month.id}>{month.monthName}</option>
                    )}
                </select>
            </div>
            <div className="date">
                <p>Date</p>
                <select
                    onChange={(event) => handleDateChange(event)}
                    defaultValue={new Date().getDate() + 1}
                    className="select"
                >
                    {dates.map(date =>
                        <option value={date} key={date}>{date}</option>
                    )}
                </select>
            </div>
            <div className="date">
                <p>Year</p>
                <select
                    onChange={(event) => handleYearChange(event)}
                    defaultValue={new Date().getFullYear()}
                    className="select"
                >
                    {years.map(year =>
                        <option value={year} key={year}>{year}</option>
                    )}
                </select>
            </div>
        </div>
    )
}

export default DateSelect