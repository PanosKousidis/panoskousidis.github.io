document.addEventListener("DOMContentLoaded", function() {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const items = document.querySelectorAll(".item .time");

    items.forEach(function(item) {
        const timeFrom = item.getAttribute("data-time-from");
        const timeTo = item.getAttribute("data-time-to");

        if (timeFrom && timeTo) {
            // Parse the start date directly
            const startDate = new Date(timeFrom);
            let endDate;

            // Handle "Present" as today's date
            if (timeTo === "Present") {
                endDate = new Date();
            } else {
                endDate = new Date(timeTo);
            }

            const startMonthIndex = startDate.getMonth(); // Months are zero-based
            const startYear = startDate.getFullYear();

            const endMonthIndex = endDate.getMonth();
            const endYear = endDate.getFullYear();

            let durationYears = endYear - startYear;
            let durationMonths = endMonthIndex - startMonthIndex + 1;

            if (durationMonths < 0) {
                durationYears--;
                durationMonths += 12;
            }
            if (durationMonths === 12) {
                durationYears++;
                durationMonths = 0;
            }
            const formattedStartDate = `${monthNames[startMonthIndex]} ${startYear}`;
            const formattedEndDate = timeTo === "Present" ? "Present" : `${monthNames[endMonthIndex]} ${endYear}`;
            const formattedDurationYears = durationYears === 0 ? `` : `${durationYears} years `;
            const formattedDurationMonths = durationMonths === 0 ? `` : `${durationMonths} months`;

            item.textContent = `${formattedStartDate} - ${formattedEndDate} (${formattedDurationYears}${formattedDurationMonths})`;
        }
    });
});
