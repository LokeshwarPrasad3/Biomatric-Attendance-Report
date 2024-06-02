// const lokeshwar = document.getElementById("studlist_tbody");
// // Initialize totalDays as an empty array
let totalDays = 84;

// // Get all <tr> elements inside the div
// const rows = lokeshwar.getElementsByTagName("tr");

// // Iterate over each <tr> element
// for (let i = 0; i < rows.length; i++) {
//     const row = rows[i];
//     // Get all <td> elements inside the current <tr> element
//     const cells = row.getElementsByTagName("td");
//     if (cells.length >= 5) {
//         // Get the value of the 5th <td> element (index 4)
//         const fifthValue = cells[4].innerText;
//         console.log(fifthValue);
//         // Push fifthValue to the totalDays array
//         totalDays.push(parseInt(fifthValue));
//     } else {
//         console.log("Not enough cells in this row");
//     }
// }

// console.log('Total days:', totalDays);

const dataArray = [
    {
        "essl_id": "11305",
        "stud_name": "Asha paikra ",
        "stud_mobile": "7746840034"
    },
    {
        "essl_id": "2120",
        "stud_name": "DUSHYANT DAS MANIKPURI",
        "stud_mobile": "9302686679"
    },
    {
        "essl_id": "11309",
        "stud_name": " Lokeshwar",
        "stud_mobile": "7879431869"
    },
    {
        "essl_id": "11420",
        "stud_name": "SAURABH RAJWADE ",
        "stud_mobile": "6266328496"
    },
    {
        "essl_id": "11422",
        "stud_name": "GAYATRI KUMARI",
        "stud_mobile": "7857087461"
    },
    {
        "essl_id": "11423",
        "stud_name": "KHILENDRA DEWANGAN",
        "stud_mobile": "9691382427"
    },
    {
        "essl_id": "11424",
        "stud_name": "KODARA MURLI KRISHNA",
        "stud_mobile": "9111768643"
    },
    {
        "essl_id": "11425",
        "stud_name": "HARISHANKAR",
        "stud_mobile": "6266274821"
    },
    {
        "essl_id": "11427",
        "stud_name": "ARVIND KUMAR DEWANGAN",
        "stud_mobile": "7587263205"
    },
    {
        "essl_id": "11428",
        "stud_name": "Nikita kuldeep ",
        "stud_mobile": "7489854121"
    },
    {
        "essl_id": "11430",
        "stud_name": "Krishna Deep ",
        "stud_mobile": "9630366635"
    },
    {
        "essl_id": "11433",
        "stud_name": "Kunal chandelkar ",
        "stud_mobile": "7067323470"
    },
    { "essl_id": "11434", "stud_name": "VANITA ", "stud_mobile": "8770870208" },
    {
        "essl_id": "11435",
        "stud_name": "GAURAV OJHA ",
        "stud_mobile": "8340771654"
    },
    {
        "essl_id": "11436",
        "stud_name": "VIVEK SAHU",
        "stud_mobile": "6265687014"
    },
    {
        "essl_id": "11437",
        "stud_name": "VEDPRAKASH NETAM  ",
        "stud_mobile": "9770406364"
    },
    {
        "essl_id": "11438",
        "stud_name": "VANSHIKA SONI",
        "stud_mobile": "8827956544"
    },
    {
        "essl_id": "11442",
        "stud_name": "RAHUL CHANDRAVANSHI",
        "stud_mobile": "6260276989"
    },
    {
        "essl_id": "11443",
        "stud_name": "SHIVAM SINGH",
        "stud_mobile": "9303168897"
    },
    {
        "essl_id": "11444",
        "stud_name": "Gaurav mishra ",
        "stud_mobile": "9753121071"
    },
    {
        "essl_id": "11445",
        "stud_name": "Takeshwar Janghel ",
        "stud_mobile": "6267822881"
    },
    {
        "essl_id": "11446",
        "stud_name": "KARAN RAJWADE ",
        "stud_mobile": "6267407439"
    },
    {
        "essl_id": "11447",
        "stud_name": "PRAKASH TANDI",
        "stud_mobile": "7987090503"
    },
    {
        "essl_id": "11449",
        "stud_name": "ROUNAK KUMAR TILANTE",
        "stud_mobile": "9399803347"
    },
    {
        "essl_id": "11450",
        "stud_name": "KUNDAN SINGH YADAV",
        "stud_mobile": "8827114186"
    },
    {
        "essl_id": "11451",
        "stud_name": "Tushar Kumar ",
        "stud_mobile": "9399446981"
    },
    {
        "essl_id": "11452",
        "stud_name": "Aryan Mishra ",
        "stud_mobile": "9399268792"
    },
    {
        "essl_id": "11454",
        "stud_name": "SHUBHANSHI SAW",
        "stud_mobile": "7999889651"
    },
    {
        "essl_id": "11455",
        "stud_name": "NAFEESHA BANO  ",
        "stud_mobile": "8305980342"
    },
    { "essl_id": "11457", "stud_name": "Md Kaif", "stud_mobile": "8269887132" },
    {
        "essl_id": "11458",
        "stud_name": "RAJESH KUMAR SINGH",
        "stud_mobile": "6266969294"
    },
    {
        "essl_id": "11459",
        "stud_name": "HARSH KUMAR KEWAT",
        "stud_mobile": "9893776932"
    },
    {
        "essl_id": "11461",
        "stud_name": "AYUSHI ASHATKAR",
        "stud_mobile": "7898433206"
    },
    {
        "essl_id": "11463",
        "stud_name": "Yamini Sinha ",
        "stud_mobile": "8305196900"
    },
];

// Define the URL for fetching data
const url = 'https://myrungta.com/erp/adminpanel/attendance_mis_report_students_college_wise_backend.php';

// Initialize the globalArray
const globalArray = [];

// Function to fetch data using essl_id
async function fetchData(essl_id) {
    const formData = new FormData();
    formData.append('fetch_day_wise_attendance_log', 'fetch_day_wise_attendance_log');
    formData.append('essl_id', essl_id);
    formData.append('start_date', '2024-02-12');
    formData.append('end_date', '2024-05-25');
    formData.append('clg_id', 2);
    formData.append('cor_id', 3);
    formData.append('branch_id', 33);
    formData.append('sem_year_id', 6);

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
        console.log(data)
        return data.length;
    } catch (error) {
        console.error('Error fetching data for essl_id', essl_id, error);
        return 0; // Return 0 or handle error appropriately
    }
}

// Array to store promises
const promises = [];

// Loop through each object in dataArray
dataArray.forEach((dataObj) => {
    // Push promise to promises array
    promises.push(fetchData(dataObj.essl_id).then(dataLength => {
        const percent = `${Math.floor((dataLength / totalDays) * 100)}%`;


        // Push data to globalArray
        globalArray.push({
            nameStudent: dataObj.stud_name,
            essl_id: dataObj.essl_id,
            totalDays: totalDays,
            presentDays: dataLength,
            percent: percent
        });
    }));
});

// Wait for all promises to resolve
Promise.all(promises).then(() => {
    // Once all promises are resolved, store globalArray in localStorage
    localStorage.setItem('globalArray', JSON.stringify(globalArray));
});
