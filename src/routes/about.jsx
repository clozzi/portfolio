function About() {
    return (
        <div className="about">
            <p>About Me</p>
            {/* clickable photo to proceed to bio and interest */}
            {/* photo of me with interests as thought bubbles */}
            <div className="interests-container">
                <div className="interest">
                    <h1>Learning</h1>
                    {/* add image for each interest */}
                    <p>Right now I'm working on my CSS skills and connecting SpoiledPotatoes to an API for some legitimate media data.</p>
                </div>
                <div className="interest">
                    <h1>Sci-Fi</h1>
                    <p>My brother-in-law recently got me <a target="_blank" rel="noopener noreferrer" href="https://starwars.fandom.com/wiki/From_a_Certain_Point_of_View">Star Wars From a Certain Point of View</a> and I started reading it. Buy it, read it, be happy.</p>
                </div>
                <div className="interest">
                    <h1>Cooking & Cooking Competition Shows</h1>
                    <p>Barbecue Showdown Season 3 came out on July 4th on Netflix and my fiance and I are very excited.</p>
                </div>
                <div className="interest">
                    <h1>Nature & Hiking</h1>
                    <p>I'm getting married at a campground in New Jersey, weather be kind!</p>
                </div>
                <div className="interest">
                    <h1>Charlie, my cat</h1>
                    <p>17 lb devil reincarnate living in my apartment. But it's ok because he likes to snuggle.</p>
                </div>
            </div>
        </div>
    )
}

export default About