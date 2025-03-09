//your JS code here. If required.
function createPromise() {
    const delay = Math.floor(Math.random() * 2000) + 1000; // Random time between 1000ms to 3000ms
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(delay / 1000); // Resolve with time taken in seconds
      }, delay);
    });
  }

const promises = [createPromise(), createPromise(), createPromise()];

 Promise.all(promises)
    .then(times => {
      const tableBody = document.getElementById('output');
      tableBody.innerHTML = ''; // Clear loading row
      

      times.forEach((time, index) => {
        const row = document.createElement('tr');
        const promiseCell = document.createElement('td');
        const timeCell = document.createElement('td');
        
        promiseCell.textContent = `Promise ${index + 1}`;
        timeCell.textContent = time.toFixed(3); // Format time to 3 decimal places
        
        row.appendChild(promiseCell);
        row.appendChild(timeCell);
        tableBody.appendChild(row);
      });
      

      const totalTime = Math.max(...times);
      const totalRow = document.createElement('tr');
      const totalCell1 = document.createElement('td');
      const totalCell2 = document.createElement('td');
      
      totalCell1.textContent = 'Total';
      totalCell2.textContent = totalTime.toFixed(3); // Format total time to 3 decimal places
      
      totalRow.appendChild(totalCell1);
      totalRow.appendChild(totalCell2);
      tableBody.appendChild(totalRow);
    });