import './App.css';
import SimpsonComponents from "./components/simpsonComponents";

function App() {
  return (
    <div>

      <SimpsonComponents   name={'Bart'} age={39}  status={'Alive'} hairColor={'Blond'}
                           image={"https://i1.sndcdn.com/avatars-000099391844-1oczm0-t500x500.jpg"}
      />
      <SimpsonComponents   name={'Homer Jay Simpson'} age={10}  status={'Alive'} hairColor={'None, formerly Brown'}
                           image={"https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png"}
      />
      <SimpsonComponents   name={'Marge Simpson'} age={34}  status={'Alive'} hairColor={'Blue'}
                           image={"https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png"}
      />
      <SimpsonComponents   name={'Lisa Simpson'} age={8}  status={'Alive'} hairColor={'Blonde'}
                           image={"https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png"}
      />
      <SimpsonComponents   name={'Edna Krabappel'} age={41}  status={'Alive'} hairColor={'Brown'}
                           image={"https://static.wikia.nocookie.net/simpsons/images/7/76/Edna_Krabappel.png"}
      />

    </div>
  );
}

export default App;
