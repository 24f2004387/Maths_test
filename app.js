document.addEventListener('DOMContentLoaded', () => {
    const totalSalesElement = document.getElementById('total-sales');
    const githubCreatedAtElement = document.getElementById('github-created-at');

    // Simulate fetching data
    const fetchData = async () => {
        const totalSales = await fetch('data.json').then(res => res.json()).then(data => data.totalSales);
        const githubCreatedAt = await fetch('data.json').then(res => res.json()).then(data => data.githubCreatedAt);

        totalSalesElement.textContent = totalSales;
        githubCreatedAtElement.textContent = new Date(githubCreatedAt).toLocaleDateString();
    };

    fetchData().then(() => {
        document.title = "Score Display - Updated";
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });
    });
});