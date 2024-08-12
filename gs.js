let searchInput = document.getElementById('searchInput');
let searchButton = document.getElementById('searchButton');

    // Function to handle the search action
    function handleSearch() {
      let query = searchInput.value; // Get the trimmed value of the search input
      if (query) {
        // For demonstration, just alert the search query
        alert(`Searching for: ${query}`);
        // Alternatively, you could redirect to a search results page with the query as a URL parameter
       // window.location.href = `/search-results.html?q=${encodeURIComponent(query)}`;
      }
    }

    // Add event listener to the search button
    searchButton.addEventListener('onClick', handleSearch);

    // Add event listener to handle the Enter key press in the search input
    searchInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        handleSearch(); // Trigger search when Enter is pressed
      }
    });