import "./HomePage.css";


function HomePage() {
  return (
    <div>
      <h1>TIMACO</h1><br />
        <p> Descrição do site:</p>
        <div className= "container"> <br/>
        <img src="https://s3.amazonaws.com/plugcrm-app/5d430b7bf8381400224ccc82/deal_file/637d4f580de24c000c0538c2.jpeg" style={{ padding: 5,width: 50, height: 50, borderRadius: 40}} alt="home" />
              Este site se chama TIMACO, este site tem como proposito facilitar a criação de time e seus jogadores.
        </div>
    </div>
  );
}

export default HomePage;
