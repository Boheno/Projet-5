import { useState } from "react";

function About (){
    let [openSections, setOpenSections] = useState({
        fiabilite: false,
        respect: false,
        service: false,
        securite:false,
    });
    let collapseSection =(section) =>{
        setOpenSections((prevState)=>({
            ...prevState,
            [section]: !prevState[section],
        }))
    }
    return(
        <div className="menus-collapse">
            <button onClick={()=> collapseSection("fiabilite")} className="fiabilite-collapse" >Fiabilité</button>
            {openSections.fiabilite && (
            <div className="fiabilite-content">
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
            </div>
            )}
            <button onClick={()=> collapseSection("respect")} className="respect-collapse" >Respect</button>
            {openSections.respect && (
            <div className="respect-content">
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme. </p>
            </div>
            )}
            <button onClick={()=> collapseSection("service")} className="service-collapse" >Service</button>
            {openSections.service && (
            <div className="service-content">
                <p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
            </div>
            )}
            <button onClick={()=> collapseSection("securite")} className="securite-collapse" >Fiabilité</button>
            {openSections.securite && (
            <div className="securite-content">
                <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes</p>
            </div>
            )}
        </div>
    )
}   
export default About