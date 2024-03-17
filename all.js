function showSlidebar(){
    const slidebar = document.querySelector('.slidebar');
    slidebar.style.display = 'flex';
}
function hideSlidebar(){
    const slidebar = document.querySelector('.slidebar');
    slidebar.style.display = 'none';
}
const slidebar = document.querySelector('.slidebar');
slidebar.style.display = 'none';

if (localStorage.getItem('displayPopup') !== '0') {
    const openTime = Date.now();
  
    const totalVisitTime = +localStorage.getItem('totalVisitTime');
    document.getElementById('container').innerHTML = totalVisitTime;
  
    setTimeout(() => {
      alert('2 Minute Timeout');
      localStorage.setItem('displayPopup', '0');
      localStorage.removeItem('totalVisitTime');
    }, 12e4 - totalVisitTime);
  
    window.addEventListener('beforeunload', () => {
      if (localStorage.getItem('displayPopup') === '0') return;
      localStorage.setItem(
        'totalVisitTime',
        totalVisitTime + Date.now() - openTime
      );
    });
  }