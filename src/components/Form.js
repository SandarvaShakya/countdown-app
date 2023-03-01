const Form = (props) => {
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

    const currentMonth = months.find(month => month.id === new Date().getMonth() + 1).monthName

    const handleMonthChange = (event) => {
        console.log(event.target.value);
        props.setMonth(event.target.value)
    }

    const handleDateChange = (event) => {
        console.log(event.target.value);
        props.setDate(event.target.value)
    }

    const handleYearChange = (event) => {
        console.log(event.target.value);
        props.setYear(event.target.value)
    }

    return (
        <div>
            <p>Months</p>
            <select 
                onChange={(event) => handleMonthChange(event)} 
                defaultValue={currentMonth}
            >
                {months.map(month => 
                    <option value={month.monthValue} key={month.id}>{month.monthName}</option>
                )}
            </select>
            <p>Date</p>
            <select 
                onChange={(event) => handleDateChange(event)} 
                defaultValue={new Date().getDate() + 1}
            >
                {dates.map(date => 
                    <option value={date} key={date}>{date}</option>
                )}
            </select>
            <p>Year</p>
            <select 
                onChange={(event) => handleYearChange(event)}
                defaultValue={new Date().getFullYear()}
            >
                {years.map(year => 
                    <option value={year} key={year}>{year}</option>
                )}
            </select>
        </div>
    )
}

export default Form