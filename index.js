const element = (
  // Write your code here.
  <div class='bg-container'>
    <h1 class='heading'>Congratulations</h1>
    <div class='card-container'>
      <img
        class='image'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
      />
      <h1 class='name'>Sohan k</h1>
      <p class='college-name'>
        Gokaraju Rangaraju Institute of Engineering and Technology, Hyderabad
      </p>
      <img
        class='image'
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
