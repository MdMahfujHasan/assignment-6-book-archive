const searchByText = () => {
    const search = document.getElementById('search-field').value;
    const url2 = `https://openlibrary.org/search.json?q=${search}`
    fetch(url2)
        .then(response => response.json())
        .then(data => displayBookDetails(data.docs[0]))
    document.getElementById('search-field').value = '';
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayBookDetails = bookDetails => {
    setInnerText('title', bookDetails.title)
    setInnerText('author-name', bookDetails.author_alternative_name)
    setInnerText('publish-year', bookDetails.first_publish_year)
    setInnerText('publish-date', bookDetails.publish_date)
    setInnerText('publisher', bookDetails.publisher)
}