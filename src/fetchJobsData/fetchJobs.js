const fetchJobs = async (page = 0, limit = 10) => {
    try {
        const body = JSON.stringify({
            "limit": limit,
            "offset": page
        });

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
        };

        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);

        if (!response.ok) {
            throw new Error('Failed to fetch Jobs data');
        }

        const newData = await response.json(); // Parse the JSON response

        return newData;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default fetchJobs;