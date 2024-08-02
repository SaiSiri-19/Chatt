import { useState } from "react";
import Calendar from "react-calendar"; // Import calendar component
import { FaCalendarAlt } from "react-icons/fa"; // Import calendar icon

const MyCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [notes, setNotes] = useState({}); // Object to store notes for each date
    const [showCalendar, setShowCalendar] = useState(false); // State to control calendar visibility

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleAddNote = () => {
        // Prompt the user to add a note for the selected date
        const note = prompt("Enter a note:");
        if (note) {
            setNotes({
                ...notes,
                [selectedDate.toDateString()]: note,
            });
        }
    };

    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
    };

    return (
        <div>
            <FaCalendarAlt
                className=" text-white cursor-pointer ml-auto mt-[-0.7cm] transition-colors duration-300 hover:text-green-300"
                onClick={toggleCalendar}
            />
            {showCalendar && (
                <div>
                    <Calendar
                        onChange={handleDateChange}
                        value={selectedDate}
                        className="text-white"
                    />
                    <button
                        onClick={handleAddNote}
                        className="bg-green-500 text-white py-2 px-4 rounded"
                    >
                        Mark The Date
                    </button>
                    <div>
                        <h3 className="text-white">Note On {selectedDate.toDateString()}</h3>
                        <p className="text-green-400">{notes[selectedDate.toDateString()]}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyCalendar;
