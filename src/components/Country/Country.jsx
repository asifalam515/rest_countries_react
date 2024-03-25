import './Country.css'

const Country = ({country} ) => {
    // console.log(country);
    const {name}=country
    return (
        <div className='country'>
            <h1> {name?.common} </h1>
        </div>
    );
};

export default Country;