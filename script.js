// ==========================================
// CLASSMATE TIMETABLE
// ==========================================

const timetable = {

    // ======================================
    // DO-1
    // ======================================
    "DO-1": [
        {
            start: "09:30",
            end: "10:25",
            subject: "English",
            staff: "Ms. Amala Rencia J"
        },
        {
            start: "10:25",
            end: "11:35",
            subject: "OA",
            staff: "Ms. Jayashree"
        },
        {
            start: "11:35",
            end: "12:25",
            subject: "Tamil",
            staff: "Dr. Latha"
        },
        {
            start: "12:25",
            end: "14:10",
            subject: "OA",
            staff: "Ms. Karmela S"
        },
        {
            start: "14:10",
            end: "15:00",
            subject: "PV Course",
            staff: "PV Course"
        },
        {
            start: "15:00",
            end: "16:00",
            subject: "PST",
            staff: "Dr. Jayamary A"
        }
    ],


    // ======================================
    // DO-2
    // ======================================
    "DO-2": [
        {
            start: "09:30",
            end: "10:25",
            subject: "DSA",
            staff: "Mr. JB"
        },
        {
            start: "10:25",
            end: "11:35",
            subject: "PST",
            staff: "Dr. Jayamary A"
        },
        {
            start: "11:35",
            end: "12:25",
            subject: "English",
            staff: "Ms. Amala Rencia J"
        },
        {
            start: "12:25",
            end: "14:10",
            subject: "OA",
            staff: "Ms. Karmela S"
        },
        {
            start: "14:10",
            end: "15:00",
            subject: "Tamil",
            staff: "Dr. Latha"
        },
        {
            start: "15:00",
            end: "16:00",
            subject: "Common Course",
            staff: "Various Staff"
        }
    ],


    // ======================================
    // DO-3
    // ======================================
    "DO-3": [
        {
            start: "09:30",
            end: "11:35",
            subject: "DSA Lab",
            staff: "Mr. JB"
        },
        {
            start: "11:35",
            end: "12:25",
            subject: "English",
            staff: "Ms. Amala Rencia J"
        },
        {
            start: "12:25",
            end: "14:10",
            subject: "EVS",
            staff: "Mr. Jayabalan"
        },
        {
            start: "14:10",
            end: "15:00",
            subject: "PV Course",
            staff: "PV Course"
        },
        {
            start: "15:00",
            end: "16:00",
            subject: "DSA",
            staff: "Mr. JB"
        }
    ],


    // ======================================
    // DO-4
    // ======================================
    "DO-4": [
        {
            start: "09:30",
            end: "10:25",
            subject: "DSA",
            staff: "Mr. JB"
        },
        {
            start: "10:25",
            end: "11:35",
            subject: "Tamil",
            staff: "Dr. Latha"
        },
        {
            start: "11:35",
            end: "12:25",
            subject: "English",
            staff: "Ms. Amala Rencia J"
        },
        {
            start: "12:25",
            end: "14:10",
            subject: "OA",
            staff: "Ms. Karmela S"
        },
        {
            start: "14:10",
            end: "15:00",
            subject: "Club",
            staff: "Club"
        },
        {
            start: "15:00",
            end: "16:00",
            subject: "Common Course",
            staff: "Various Staff"
        }
    ],


    // ======================================
    // DO-5
    // ======================================
    "DO-5": [
        {
            start: "09:30",
            end: "10:25",
            subject: "Tamil",
            staff: "Dr. Latha"
        },
        {
            start: "10:25",
            end: "11:35",
            subject: "EVS",
            staff: "Mr. Jayabalan"
        },
        {
            start: "11:35",
            end: "12:25",
            subject: "Religion",
            staff: "Fr. Thaddeus"
        },
        {
            start: "12:25",
            end: "14:10",
            subject: "OA",
            staff: "Ms. Jayashree"
        },
        {
            start: "14:10",
            end: "15:00",
            subject: "PV Course",
            staff: "PV Course"
        },
        {
            start: "15:00",
            end: "16:00",
            subject: "DSA",
            staff: "Mr. JB"
        }
    ],


    // ======================================
    // DO-6
    // ======================================
    "DO-6": [
        {
            start: "09:30",
            end: "10:25",
            subject: "English",
            staff: "Ms. Amala Rencia J"
        },
        {
            start: "10:25",
            end: "11:35",
            subject: "Tamil",
            staff: "Dr. Latha"
        },
        {
            start: "11:35",
            end: "12:25",
            subject: "PST",
            staff: "Dr. Jayamary A"
        },
        {
            start: "12:25",
            end: "14:10",
            subject: "DSA",
            staff: "Mr. JB"
        },
        {
            start: "14:10",
            end: "15:00",
            subject: "PV Course",
            staff: "PV Course"
        },
        {
            start: "15:00",
            end: "16:00",
            subject: "DSA Lab",
            staff: "Mr. JB"
        }
    ]
};


// ==========================================
// CURRENT DATE AND TIME
// ==========================================

const now = new Date();


// ==========================================
// DAYS
// ==========================================

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];


// ==========================================
// AUTOMATIC DAY ORDER
// ==========================================

const dayOrders = [
    "DO-6",   // Sunday
    "DO-1",   // Monday
    "DO-2",   // Tuesday
    "DO-3",   // Wednesday
    "DO-4",   // Thursday
    "DO-5",   // Friday
    "DO-6"    // Saturday
];


// Today's day
const todayName = days[now.getDay()];


// Automatically select today's Day Order
let selectedOrder = dayOrders[now.getDay()];


// ==========================================
// GET HTML ELEMENTS
// ==========================================

const dayOrderSelect =
    document.getElementById("dayOrder");

const timetableDiv =
    document.getElementById("timetable");

const todayDate =
    document.getElementById("todayDate");

const currentClass =
    document.getElementById("currentClass");

const nextClass =
    document.getElementById("nextClass");


// ==========================================
// AUTOMATICALLY SELECT TODAY'S DAY ORDER
// ==========================================

dayOrderSelect.value = selectedOrder;


// ==========================================
// CONVERT TIME INTO MINUTES
// ==========================================

function convertToMinutes(time) {

    const parts = time.split(":");

    const hours = Number(parts[0]);

    const minutes = Number(parts[1]);

    return (hours * 60) + minutes;
}


// ==========================================
// SHOW TIMETABLE
// ==========================================

function showTimetable(order) {

    const classes = timetable[order] || [];


    // Clear old timetable
    timetableDiv.innerHTML = "";


    // Show heading
    todayDate.textContent =
        `${todayName} - ${order} Timetable`;


    // If there are no classes
    if (classes.length === 0) {

        timetableDiv.innerHTML = `
            <div class="class-card">

                <h3>📅 No Classes Today</h3>

                <p>Enjoy your day! 😊</p>

            </div>
        `;

        currentClass.textContent =
            "🔵 No class is currently running";

        nextClass.textContent =
            "✅ No more classes today";

        return;
    }


    // ======================================
    // DISPLAY ALL CLASSES
    // ======================================

    classes.forEach(function(item) {

        const card =
            document.createElement("div");


        card.className =
            "class-card";


        card.innerHTML = `

            <h3>📚 ${item.subject}</h3>

            <p>
                ⏰ ${item.start} - ${item.end}
            </p>

            <p>
                👨‍🏫 ${item.staff}
            </p>

        `;


        timetableDiv.appendChild(card);

    });


    // Check current and next class
    checkClass(classes);
}


// ==========================================
// CHECK CURRENT AND NEXT CLASS
// ==========================================

function checkClass(classes) {

    const currentTime =
        (now.getHours() * 60) +
        now.getMinutes();


    let current = null;

    let next = null;


    // ======================================
    // FIND CURRENT AND NEXT CLASS
    // ======================================

    for (let i = 0; i < classes.length; i++) {

        const start =
            convertToMinutes(classes[i].start);

        const end =
            convertToMinutes(classes[i].end);


        // Current class
        if (
            currentTime >= start &&
            currentTime < end
        ) {

            current = classes[i];

        }


        // Next class
        if (
            currentTime < start &&
            next === null
        ) {

            next = classes[i];

        }

    }


    // ======================================
    // SHOW CURRENT CLASS
    // ======================================

    if (current !== null) {

        currentClass.textContent =
            `🟢 NOW: ${current.subject} - ${current.staff}`;

    }

    else {

        currentClass.textContent =
            "🔵 No class is currently running";

    }


    // ======================================
    // SHOW NEXT CLASS
    // ======================================

    if (next !== null) {

        nextClass.textContent =
            `⏭️ NEXT: ${next.subject} - ${next.staff}`;

    }

    else {

        nextClass.textContent =
            "✅ No more classes today";

    }

}


// ==========================================
// DAY ORDER DROPDOWN
// ==========================================

dayOrderSelect.addEventListener(
    "change",
    function() {

        selectedOrder =
            this.value;


        showTimetable(
            selectedOrder
        );

    }
);


// ==========================================
// START WEBSITE
// ==========================================

showTimetable(
    selectedOrder
);