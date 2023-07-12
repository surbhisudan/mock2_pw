const dataContainer = document.getElementById('dataContainer');

function showSkeletonLoader() {
  dataContainer.innerHTML = `
    <div class="skeleton-loader">
      <div class="skeleton-row">
        <div class="skeleton-item"></div>
      </div>
      <div class="skeleton-row">
        <div class="skeleton-item"></div>
      </div>
      <div class="skeleton-row">
        <div class="skeleton-item"></div>
      </div>
      <div class="skeleton-row">
        <div class="skeleton-item"></div>
      </div>
      <div class="skeleton-row">
        <div class="skeleton-item"></div>
      </div>
    </div>
  `;
}

function hideSkeletonLoader() {
  dataContainer.innerHTML = '';
}

function displayData(data) {
  hideSkeletonLoader();

  data.forEach(item => {
    const row = document.createElement('div');
    row.textContent = `${item.id} - ${item.title}`;
    dataContainer.appendChild(row);
  });
}

function fetchData() {
  showSkeletonLoader();

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => {
      console.log('Error fetching data:', error);
      hideSkeletonLoader();
    });
}

fetchData();
