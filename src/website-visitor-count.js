async function getVisitorCount() {
    const api_url = process.env.API_URL
    try {
        const response = await fetch(api_url, {
            headers: {'Content-Type': 'application/json'},
            mode: 'cors'
        });
        
        const data = await response.json();
        
        document.getElementById('visitor-count').innerHTML = data.visit_count;
    } catch (error) {
        console.error("Error fetching visitor count:", error);
    }
}
getVisitorCount();
