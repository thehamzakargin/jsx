import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App(){
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard 
                            title="Suna" 
                            handle="@suna99" 
                            image={AlexaImage}
                            description="Suna was created by amazon and helps you buy things"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                            title="Handan" 
                            handle="@handan32" 
                            image={CortanaImage}
                            description="Handan was made by microsoft. Who knows what it does?"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                            title="Memduh" 
                            handle="@memduh01" 
                            image={SiriImage}
                            description="Memduh was made by Apple and is being phased out"
                            /> 
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
}

export default App;