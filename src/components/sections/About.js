import React from 'react';
import Cat from "../../assets/ancitent_background.gif";

const About = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6" style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={Cat} alt="ancient cat" style={{ maxWidth: '100%', borderRadius: '50%', height: 'auto' }} />
                    </div>  
                    <div className="col-lg-6 col-md-6" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        <h3>Roadmap</h3>
                        <h5><strong>Step1 <br/> </strong> Launch Tut Uncommon NFTs collection on Cronos Chain with 5555 minted cats.
                        A companion website is developed.</h5>
                            
                        <h5><strong>Step2 <br/> </strong>Provide Airdrop giveaways of a distinctive Tut NFT to randomly selected Tut NFT owners</h5>
                                
                        <h5><strong>Step3 <br/> </strong>After sellout, partner with Ebisu's Bay as secondary marketplace to expand the Tut Uncommon universe.</h5>
                                
                        <h5><strong>Step4    <br/> </strong>When the collection sells out, develop a Metaverse game where the cats can use their skills and wiles to solve mysteries. The rarity of each stat will determine the capabilities of that Tut NFT.</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;